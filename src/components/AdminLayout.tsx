
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  Image,
  FileText,
  Settings,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const sidebarItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, path: '/admin' },
    { name: 'Students', icon: <Users className="h-5 w-5" />, path: '/admin/students' },
    { name: 'Courses', icon: <GraduationCap className="h-5 w-5" />, path: '/admin/courses' },
    { name: 'Events', icon: <Calendar className="h-5 w-5" />, path: '/admin/events' },
    { name: 'Gallery', icon: <Image className="h-5 w-5" />, path: '/admin/gallery' },
    { name: 'Applications', icon: <FileText className="h-5 w-5" />, path: '/admin/applications' },
    { name: 'Settings', icon: <Settings className="h-5 w-5" />, path: '/admin/settings' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for desktop */}
      <aside
        className={cn(
          "bg-white shadow-md z-30 transition-all duration-300",
          isMobile
            ? cn(
                "fixed inset-y-0 left-0 w-64 transform",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              )
            : "w-64"
        )}
      >
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-college-blue">BNC Admin</span>
          </Link>
        </div>

        {/* Nav Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-college-blue transition-colors"
                  onClick={isMobile ? () => setIsSidebarOpen(false) : undefined}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-4 border-t">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white h-16 border-b flex items-center px-4 sticky top-0 z-20 shadow-sm">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
          <h1 className="text-xl font-medium">Admin Portal</h1>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
