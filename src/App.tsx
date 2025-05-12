
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import StudentLayout from "./components/StudentLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Apply from "./pages/admissions/Apply";
import Dashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import Applications from "./pages/admin/Applications";
import ApplicationDetails from "./pages/admin/ApplicationDetails";
import ContentEditor from "./pages/admin/ContentEditor";
import CourseManager from "./pages/admin/CourseManager";
import EventManager from "./pages/admin/EventManager";
import GalleryManager from "./pages/admin/GalleryManager";
import SettingsManager from "./pages/admin/SettingsManager";
import StudentDashboard from "./pages/student/Dashboard";
import StudentApplications from "./pages/student/Applications";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLoginPage from "./pages/admin/AdminLoginPage";

// Create a query client with more aggressive caching settings
// for better real-time performance in admin panel
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, // 10 seconds
      cacheTime: 300000, // 5 minutes
      refetchOnWindowFocus: true, // Refetch when window gains focus
      refetchOnMount: true, // Always refetch on component mount
      refetchOnReconnect: true, // Refetch when reconnecting
      retry: 1, // Retry failed queries once
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SmoothScrollProvider>
            <TooltipProvider>
              <Routes>
                {/* Main website routes */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="courses" element={<Courses />} />
                  <Route path="faculty" element={<Faculty />} />
                  <Route path="events" element={<Events />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="admissions" element={<Admissions />} />
                  <Route path="admissions/apply" element={<Apply />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Route>

                {/* Auth routes */}
                <Route path="/auth">
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="admin" element={<AdminLoginPage />} />
                </Route>

                {/* Student routes - protected for student role */}
                <Route element={<ProtectedRoute requiredRole="student" />}>
                  <Route path="/dashboard" element={<StudentLayout />}>
                    <Route index element={<StudentDashboard />} />
                    <Route path="applications" element={<StudentApplications />} />
                    <Route path="certificates" element={<div>Certificates Page</div>} />
                    <Route path="payments" element={<div>Payments Page</div>} />
                    <Route path="profile" element={<div>Profile Page</div>} />
                    <Route path="settings" element={<div>Settings Page</div>} />
                  </Route>
                </Route>

                {/* Admin routes - protected with admin role */}
                <Route element={<ProtectedRoute requiredRole="admin" />}>
                  <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="students" element={<Students />} />
                    <Route path="applications">
                      <Route index element={<Applications />} />
                      <Route path=":id" element={<ApplicationDetails />} />
                    </Route>
                    <Route path="courses" element={<CourseManager />} />
                    <Route path="events" element={<EventManager />} />
                    <Route path="gallery" element={<GalleryManager />} />
                    <Route path="content" element={<ContentEditor />} />
                    <Route path="settings" element={<SettingsManager />} />
                    <Route path="*" element={<Navigate to="/admin" replace />} />
                  </Route>
                </Route>
              </Routes>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </SmoothScrollProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
