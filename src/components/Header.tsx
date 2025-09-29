import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Function to handle smooth scrolling and close mobile menu
  const handleNavClick = (targetId: string) => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Smooth scroll to target element
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transform transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider">
              NAACHEEZ
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#band" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('band');
                }}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Band
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('gallery');
                }}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#band" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('band');
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium cursor-pointer"
            >
              Band
            </a>
            <a 
              href="#gallery" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('gallery');
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium cursor-pointer"
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
