
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-2xl font-bold">
            Portfolio
          </Link>
          
          {isMobile ? (
            <>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black/95 border-b border-white/10">
                  <div className="flex flex-col space-y-4 p-4">
                    <Link 
                      to="/" 
                      className="text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      to="/projects" 
                      className="text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Projects
                    </Link>
                    <Link 
                      to="/about" 
                      className="text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      to="/contact" 
                      className="text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-white/80 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
