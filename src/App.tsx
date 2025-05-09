
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { SmoothScrollProvider } from "./context/SmoothScrollProvider";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="courses" element={<Courses />} />
                <Route path="faculty" element={<Faculty />} />
                <Route path="events" element={<Events />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="admissions" element={<Admissions />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
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
