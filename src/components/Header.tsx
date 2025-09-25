import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">ECHOES</h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#band" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Band
              </a>
              <a href="#gallery" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
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
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#band" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Band
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Gallery
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}