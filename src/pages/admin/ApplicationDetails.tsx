
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, ArrowLeft, Download, Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';

interface ApplicationDetails {
  id: string;
  course: string;
  status: string;
  high_school: string;
  graduation_year: string;
  personal_statement: string;
  submitted_at: string;
  admin_notes: string | null;
  user_id: string;
}

interface StudentProfile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
};

const ApplicationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [application, setApplication] = useState<ApplicationDetails | null>(null);
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [adminNotes, setAdminNotes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  
  useEffect(() => {
    const fetchApplicationDetails = async () => {
      if (!id) return;
      
      setIsLoading(true);
      
      try {
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        
        if (data) {
          setApplication(data as ApplicationDetails);
          setAdminNotes(data.admin_notes || '');
          
          // Fetch student details
          if (data.user_id) {
            const { data: studentData, error: studentError } = await supabase
              .from('profiles')
              .select('id, email, first_name, last_name')
              .eq('id', data.user_id)
              .single();
            
            if (studentError) throw studentError;
            
            if (studentData) {
              setStudent(studentData as StudentProfile);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching application details:', error);
        toast({
          title: "Error",
          description: "Failed to load application details",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchApplicationDetails();
  }, [id, toast]);
  
  const updateApplicationStatus = async (status: string) => {
    if (!application) return;
    
    setIsUpdating(true);
    
    try {
      const { error } = await supabase
        .from('applications')
        .update({
          status,
          admin_notes: adminNotes,
          last_updated_at: new Date().toISOString()
        })
        .eq('id', application.id);
      
      if (error) throw error;
      
      setApplication({
        ...application,
        status,
        admin_notes: adminNotes
      });
      
      toast({
        title: "Status Updated",
        description: `Application has been ${status}`,
        variant: status === 'approved' ? 'default' : 'destructive'
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Update Failed",
        description: "Failed to update application status",
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };
  
  const saveNotes = async () => {
    if (!application) return;
    
    setIsUpdating(true);
    
    try {
      const { error } = await supabase
        .from('applications')
        .update({
          admin_notes: adminNotes,
          last_updated_at: new Date().toISOString()
        })
        .eq('id', application.id);
      
      if (error) throw error;
      
      setApplication({
        ...application,
        admin_notes: adminNotes
      });
      
      toast({
        title: "Notes Saved",
        description: "Admin notes have been saved"
      });
    } catch (error) {
      console.error('Error saving notes:', error);
      toast({
        title: "Save Failed",
        description: "Failed to save admin notes",
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-college-blue" />
      </div>
    );
  }
  
  if (!application) {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-medium">Application not found</p>
        <Button onClick={() => navigate('/admin/applications')} className="mt-4">
          Back to Applications
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/admin/applications')}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Applications
      </Button>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Application Details</h2>
          <p className="text-gray-500">
            Submitted on {format(new Date(application.submitted_at), 'PPP')}
          </p>
        </div>
        
        <Badge className={statusColors[application.status as keyof typeof statusColors] || 'bg-gray-100'}>
          {application.status.toUpperCase()}
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Course</h3>
                <p className="text-lg">{application.course}</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-2">High School</h3>
                <p>{application.high_school}</p>
                <p className="text-sm text-gray-500">Graduation Year: {application.graduation_year}</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium mb-2">Personal Statement</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="whitespace-pre-line">{application.personal_statement}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Admin Notes</CardTitle>
              <CardDescription>
                Add private notes about this application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter notes about this application..."
                className="min-h-[150px]"
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button 
                onClick={saveNotes} 
                disabled={isUpdating}
                className="ml-auto"
              >
                {isUpdating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Save Notes
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Information</CardTitle>
            </CardHeader>
            <CardContent>
              {student ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{student.first_name} {student.last_name}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{student.email}</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Student information not available</p>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {application.status === 'pending' && (
                <>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                    onClick={() => updateApplicationStatus('approved')}
                    disabled={isUpdating}
                  >
                    <Check className="h-4 w-4" />
                    Approve Application
                  </Button>
                  
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2"
                    onClick={() => updateApplicationStatus('rejected')}
                    disabled={isUpdating}
                  >
                    <X className="h-4 w-4" />
                    Reject Application
                  </Button>
                </>
              )}
              
              {application.status !== 'pending' && (
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center gap-2"
                  onClick={() => updateApplicationStatus('pending')}
                  disabled={isUpdating}
                >
                  Reset to Pending
                </Button>
              )}
              
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                disabled={isUpdating}
              >
                <Download className="h-4 w-4" />
                Download Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
