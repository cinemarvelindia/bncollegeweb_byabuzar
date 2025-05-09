
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, Search, Download, Check, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Applications = () => {
  // Mock data
  const applications = [
    { 
      id: 'APP001', 
      name: 'John Doe', 
      email: 'john.doe@example.com',
      course: 'Computer Science', 
      date: '2023-05-01', 
      status: 'Pending' 
    },
    { 
      id: 'APP002', 
      name: 'Jane Smith', 
      email: 'jane.smith@example.com',
      course: 'Business Administration', 
      date: '2023-05-02', 
      status: 'Approved' 
    },
    { 
      id: 'APP003', 
      name: 'Robert Johnson', 
      email: 'robert.johnson@example.com',
      course: 'Engineering', 
      date: '2023-05-03', 
      status: 'Pending' 
    },
    { 
      id: 'APP004', 
      name: 'Emily Davis', 
      email: 'emily.davis@example.com',
      course: 'English Literature', 
      date: '2023-05-04', 
      status: 'Rejected' 
    },
    { 
      id: 'APP005', 
      name: 'Michael Brown', 
      email: 'michael.brown@example.com',
      course: 'Physics', 
      date: '2023-05-05', 
      status: 'Pending' 
    },
  ];

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
              />
            </div>
            <div className="flex gap-2">
              <select className="border rounded px-3 py-1 bg-white text-sm">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell>{application.id}</TableCell>
                    <TableCell>{application.name}</TableCell>
                    <TableCell>{application.email}</TableCell>
                    <TableCell>{application.course}</TableCell>
                    <TableCell>{application.date}</TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          application.status === 'Approved'
                            ? 'bg-green-100 text-green-800 hover:bg-green-100'
                            : application.status === 'Rejected'
                            ? 'bg-red-100 text-red-800 hover:bg-red-100'
                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                        }`}
                      >
                        {application.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                      {application.status === 'Pending' && (
                        <>
                          <Button variant="ghost" size="sm" className="text-green-600">
                            <Check className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
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

          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1-5</strong> of <strong>15</strong> applications
            </div>
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Applications;
