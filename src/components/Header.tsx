import React from 'react';
import { Palmtree, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-emerald-600">
              Innerlight Tour and Travel
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#packages" className="text-gray-700 hover:text-emerald-600 transition-colors">Packages</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">Home</a>
              <a href="#packages" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">Packages</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;