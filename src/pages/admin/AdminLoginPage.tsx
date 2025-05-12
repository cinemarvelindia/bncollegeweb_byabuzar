
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Show a toast notification for better UX
    toast({
      title: "Admin Access Granted",
      description: "You now have full access to the admin panel",
    });
    
    // Immediately redirect to admin panel
    navigate('/admin');
  }, [navigate, toast]);

  return (
    <div className="container mx-auto py-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-md">
        <Card className="border-t-4 border-t-college-blue">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Admin Portal Access</CardTitle>
            <CardDescription>
              Direct access has been enabled for the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <p className="text-center">Redirecting you to the admin panel...</p>
            <Button onClick={() => navigate('/admin')} className="w-full">
              Enter Admin Panel
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm">
            <Button variant="link" onClick={() => navigate('/')}>
              Return to homepage
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminLoginPage;
