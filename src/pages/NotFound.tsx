
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../components/Logo";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-8 left-4 md:left-8">
          <Logo variant="white" />
        </div>
        
        <div className="text-center max-w-lg mx-auto mt-12">
          <h1 className="text-8xl font-display font-bold text-white mb-4">404</h1>
          <p className="text-xl text-white/80 mb-8">Oops! The page you're looking for seems to have drifted into deep space.</p>
          <Link
        to="/" // Use 'to' prop instead of 'href'
        className="inline-flex items-center px-6 py-3 rounded-full bg-space-blue text-white font-medium hover:bg-space-blue/90 transition-all gap-2"
      >
        <ArrowLeft size={18} />
        Return to Home
      </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
