
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
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
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <BrowserRouter>
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

              {/* Admin routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="students" element={<Students />} />
                <Route path="applications" element={<Applications />} />
                {/* Add more admin routes as needed */}
                <Route path="courses" element={<div className="p-4">Courses Admin Panel</div>} />
                <Route path="events" element={<div className="p-4">Events Admin Panel</div>} />
                <Route path="gallery" element={<div className="p-4">Gallery Admin Panel</div>} />
                <Route path="settings" element={<div className="p-4">Settings Panel</div>} />
                <Route path="*" element={<Navigate to="/admin" replace />} />
              </Route>
            </Routes>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </BrowserRouter>
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
};

export default App;
