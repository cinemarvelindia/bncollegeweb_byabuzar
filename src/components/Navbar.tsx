
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/context/AuthContext';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { user, profile, signOut, isAdmin } = useAuth();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`w-full z-50 transition-all duration-300 ${isSticky ? 'sticky top-0 shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-college-blue">BNC</span>
            <div className={isMobile ? "hidden" : "block"}>
              <h1 className="text-xl font-bold text-college-blue">Bhagalpur National College</h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation with dropdown */}
          {!isMobile ? (
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.path}
                      className={cn(
                        "px-3 py-2 text-sm font-medium transition-colors duration-300",
                        location.pathname === link.path 
                          ? "text-college-blue font-semibold" 
                          : "text-gray-700 hover:text-college-blue"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                {user ? (
                  <NavigationMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="ml-2 flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {profile?.first_name || 'Account'}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link to={isAdmin ? "/admin" : "/dashboard"}>
                            {isAdmin ? "Admin Dashboard" : "Student Dashboard"}
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/dashboard/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => signOut()}>
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                ) : (
                  <>
                    <NavigationMenuItem>
                      <Link to="/auth/login">
                        <Button variant="outline" size="sm" className="ml-2">
                          Login
                        </Button>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/admissions/apply">
                        <Button className="ml-2 bg-college-gold hover:bg-amber-600 text-white">
                          Apply Now
                        </Button>
                      </Link>
                    </NavigationMenuItem>
                  </>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          ) : null}

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isOpen && isMobile && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 hover:bg-gray-100 rounded-md transition-colors",
                    location.pathname === link.path 
                      ? "text-college-blue font-semibold bg-gray-50" 
                      : "text-gray-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {user ? (
                <>
                  <Link 
                    to={isAdmin ? "/admin" : "/dashboard"}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {isAdmin ? "Admin Dashboard" : "Student Dashboard"}
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors text-left flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/auth/login" className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors">
                    Login
                  </Link>
                  <div className="pt-2">
                    <Link to="/admissions/apply">
                      <Button className="w-full bg-college-gold hover:bg-amber-600 text-white">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
