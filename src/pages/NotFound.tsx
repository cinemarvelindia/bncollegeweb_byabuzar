
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 animate-fade-in">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-college-blue">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-college-blue hover:bg-college-darkBlue text-white">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
