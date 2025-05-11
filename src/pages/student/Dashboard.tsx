
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { FileText, GraduationCap, CreditCard } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface DashboardStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  totalCertificates: number;
  pendingPayments: number;
}

const StudentDashboard = () => {
  const { user, profile } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalApplications: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    totalCertificates: 0,
    pendingPayments: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;
      
      setIsLoading(true);
      
      try {
        // Get applications stats
        const { data: applications } = await supabase
          .from('applications')
          .select('id, status')
          .eq('user_id', user.id);
          
        // Get certificates count
        const { count: certificatesCount } = await supabase
          .from('certificates')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', user.id);
          
        // Get pending payments count
        const { count: pendingPaymentsCount } = await supabase
          .from('payments')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('status', 'pending');
        
        if (applications) {
          const pendingApps = applications.filter(app => app.status === 'pending').length;
          const approvedApps = applications.filter(app => app.status === 'approved').length;
          
          setStats({
            totalApplications: applications.length,
            pendingApplications: pendingApps,
            approvedApplications: approvedApps,
            totalCertificates: certificatesCount || 0,
            pendingPayments: pendingPaymentsCount || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDashboardData();
  }, [user]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
        
        {profile && (
          <div className="mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Welcome, {profile.first_name} {profile.last_name}</h3>
                    <p className="text-gray-500">{profile.email}</p>
                  </div>
                  <div>
                    <Link to="/admissions/apply">
                      <Button className="bg-college-gold hover:bg-amber-600">
                        Apply for Admission
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between">
                <span>Applications</span>
                <FileText className="h-5 w-5 text-college-blue" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalApplications}</div>
              <div className="text-sm text-gray-500 mt-2">
                <span className="text-amber-500">{stats.pendingApplications} Pending</span> · 
                <span className="text-green-500 ml-2">{stats.approvedApplications} Approved</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/dashboard/applications" className="w-full">
                <Button variant="outline" size="sm" className="w-full">View All</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between">
                <span>Certificates</span>
                <GraduationCap className="h-5 w-5 text-college-blue" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalCertificates}</div>
              <div className="text-sm text-gray-500 mt-2">
                Available to download
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/dashboard/certificates" className="w-full">
                <Button variant="outline" size="sm" className="w-full">View All</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between">
                <span>Payments</span>
                <CreditCard className="h-5 w-5 text-college-blue" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.pendingPayments}</div>
              <div className="text-sm text-gray-500 mt-2">
                Pending payments
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/dashboard/payments" className="w-full">
                <Button variant="outline" size="sm" className="w-full">View All</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {stats.pendingApplications > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Pending Applications</h3>
          <Card>
            <CardHeader>
              <CardDescription>
                You have {stats.pendingApplications} pending application{stats.pendingApplications !== 1 ? 's' : ''}. Check the status and complete any required actions.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link to="/dashboard/applications" className="w-full">
                <Button className="w-full">Review Applications</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}
      
      {stats.pendingPayments > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Pending Payments</h3>
          <Card>
            <CardHeader>
              <CardDescription>
                You have {stats.pendingPayments} pending payment{stats.pendingPayments !== 1 ? 's' : ''}. Please complete these payments to proceed with your application.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link to="/dashboard/payments" className="w-full">
                <Button className="w-full">View Payments</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
