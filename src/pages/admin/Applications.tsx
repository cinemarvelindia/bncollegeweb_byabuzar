import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Search, Download, Check, X, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface Application {
  id: string;
  course: string;
  high_school: string;
  status: string;
  submitted_at: string;
  user_id: string;
  profile?: {
    first_name: string | null;
    last_name: string | null;
    email: string;
  };
}

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchApplications = async () => {
    setIsLoading(true);
    
    try {
      // Fetch applications first
      const { data: applicationsData, error: applicationsError } = await supabase
        .from('applications')
        .select('id, user_id, course, high_school, status, submitted_at')
        .order('submitted_at', { ascending: false });
      
      if (applicationsError) throw applicationsError;
      
      if (applicationsData) {
        // Fetch profiles for each application
        const applicationsWithProfiles = await Promise.all(
          applicationsData.map(async (application) => {
            const { data: profileData, error: profileError } = await supabase
              .from('profiles')
              .select('first_name, last_name, email')
              .eq('id', application.user_id)
              .single();
              
            return {
              ...application,
              profile: profileError ? undefined : profileData
            };
          })
        );
        
        setApplications(applicationsWithProfiles);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast({
        title: "Error",
        description: "Failed to load applications",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ 
          status,
          last_updated_at: new Date().toISOString()
        })
        .eq('id', id);
      
      if (error) throw error;
      
      // Update local state to reflect the change
      setApplications(apps => 
        apps.map(app => 
          app.id === id ? { ...app, status } : app
        )
      );
      
      toast({
        title: "Status Updated",
        description: `Application has been ${status}`,
        variant: status === 'approved' ? 'default' : 'destructive'
      });
    } catch (error) {
      console.error('Error updating application status:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update application status",
        variant: "destructive"
      });
    }
  };

  const filteredApplications = applications.filter(app => {
    // Apply search filter
    const searchMatch = 
      app.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.high_school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.profile?.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.profile?.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.profile?.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply status filter
    const statusMatch = statusFilter === 'all' || app.status === statusFilter;
    
    return searchMatch && statusMatch;
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'rejected':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-college-blue" />
          <h2 className="text-2xl font-bold">Admission Applications</h2>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Application Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4 flex-col sm:flex-row gap-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search applications..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select 
                className="border rounded px-3 py-1 bg-white text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin h-8 w-8 border-4 border-college-blue border-opacity-25 border-t-college-blue rounded-full mx-auto"></div>
              <p className="mt-4 text-gray-500">Loading applications...</p>
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No applications found</p>
            </div>
          ) : (
            <div className="rounded-md border overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell className="font-medium">
                        {application.profile ? `${application.profile.first_name || ''} ${application.profile.last_name || ''}`.trim() : 'Unknown'}
                      </TableCell>
                      <TableCell>{application.profile?.email || 'Unknown'}</TableCell>
                      <TableCell>{application.course}</TableCell>
                      <TableCell>{format(new Date(application.submitted_at), 'MMM d, yyyy')}</TableCell>
                      <TableCell>
                        <Badge
                          className={getStatusBadgeClass(application.status)}
                        >
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => navigate(`/admin/applications/${application.id}`)}
                          className="mr-1"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        
                        {application.status === 'pending' && (
                          <>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-green-600 mr-1"
                              onClick={() => updateApplicationStatus(application.id, 'approved')}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-600"
                              onClick={() => updateApplicationStatus(application.id, 'rejected')}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {!isLoading && applications.length > 0 && (
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>{filteredApplications.length}</strong> of <strong>{applications.length}</strong> applications
              </div>
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled={filteredApplications.length === applications.length}>
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Applications;
