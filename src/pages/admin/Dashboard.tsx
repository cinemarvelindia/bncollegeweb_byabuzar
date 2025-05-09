
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, Calendar, FileText } from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const stats = [
    { title: 'Total Students', value: '1,234', icon: <Users className="h-8 w-8 text-college-blue" />, change: '+5%' },
    { title: 'Active Courses', value: '42', icon: <GraduationCap className="h-8 w-8 text-college-gold" />, change: '+2' },
    { title: 'Upcoming Events', value: '8', icon: <Calendar className="h-8 w-8 text-green-500" />, change: '+3' },
    { title: 'New Applications', value: '56', icon: <FileText className="h-8 w-8 text-purple-500" />, change: '+12' },
  ];

  const recentApplications = [
    { name: 'John Doe', course: 'Computer Science', date: '2023-05-01', status: 'Pending' },
    { name: 'Jane Smith', course: 'Business Administration', date: '2023-05-02', status: 'Approved' },
    { name: 'Robert Johnson', course: 'Engineering', date: '2023-05-03', status: 'Pending' },
    { name: 'Emily Davis', course: 'English Literature', date: '2023-05-04', status: 'Rejected' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Latest admission applications received</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div key={application.name} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div>
                    <p className="font-medium">{application.name}</p>
                    <p className="text-sm text-muted-foreground">{application.course}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-md text-xs ${
                      application.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                      application.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {application.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{application.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">View All Applications</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used admin tasks</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Users className="h-6 w-6" />
              <span>Add Student</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span>Add Course</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <Calendar className="h-6 w-6" />
              <span>Schedule Event</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
              <FileText className="h-6 w-6" />
              <span>Review Apps</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
