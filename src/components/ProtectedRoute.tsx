
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  requiredRole?: 'admin' | 'student';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const { user, profile, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-college-blue" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  // If a specific role is required, check if the user has it
  if (requiredRole && profile?.role !== requiredRole) {
    // Redirect admin to admin dashboard if trying to access student routes
    if (profile?.role === 'admin' && requiredRole === 'student') {
      return <Navigate to="/admin" />;
    }
    // Redirect students to their dashboard if trying to access admin routes
    if (profile?.role === 'student' && requiredRole === 'admin') {
      return <Navigate to="/dashboard" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
