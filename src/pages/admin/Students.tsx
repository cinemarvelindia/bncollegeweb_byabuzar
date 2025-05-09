
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, Search, Plus, Download } from 'lucide-react';

const Students = () => {
  // Mock data
  const students = [
    { id: '001', name: 'John Doe', course: 'Computer Science', year: '3rd', status: 'Active' },
    { id: '002', name: 'Jane Smith', course: 'Business Administration', year: '2nd', status: 'Active' },
    { id: '003', name: 'Robert Johnson', course: 'Engineering', year: '4th', status: 'Inactive' },
    { id: '004', name: 'Emily Davis', course: 'English Literature', year: '1st', status: 'Active' },
    { id: '005', name: 'Michael Brown', course: 'Physics', year: '3rd', status: 'Active' },
    { id: '006', name: 'Sarah Wilson', course: 'Art History', year: '2nd', status: 'Active' },
    { id: '007', name: 'David Thompson', course: 'Mathematics', year: '4th', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-college-blue" />
          <h2 className="text-2xl font-bold">Student Management</h2>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="flex items-center gap-2 bg-college-blue hover:bg-college-darkBlue">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Student</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Student Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4 flex-col sm:flex-row gap-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search students..."
                className="pl-8 w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Filter</Button>
              <select className="border rounded px-3 py-1 bg-white text-sm">
                <option value="all">All Years</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>
            </div>
          </div>

          <div className="rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs ${
                          student.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {student.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1-7</strong> of <strong>50</strong> students
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

export default Students;
