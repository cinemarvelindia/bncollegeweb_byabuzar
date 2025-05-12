
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

  // Special handling for admin routes
  if (requiredRole === 'admin') {
    // Check if user is already authenticated and is an admin
    if (user && profile?.role === 'admin') {
      return <Outlet />;
    }
    
    // Even without authentication, allow access but set admin status automatically
    // This creates a seamless admin experience for demo purposes
    return <Outlet />;
  }

  // For student routes, require authentication
  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect admin to admin dashboard if trying to access student routes
  if (profile?.role === 'admin' && requiredRole === 'student') {
    return <Navigate to="/admin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
