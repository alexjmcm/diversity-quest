import React, { useState, useEffect } from 'react';
import { X, Menu as MenuIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-red-700/95 backdrop-blur-md shadow-md' : 'bg-gradient-to-r from-white via-red-100 to-red-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="text-red-700 text-2xl font-bold flex items-center">
            <span className="text-3xl mr-2">🍁</span> Canadian Diversity Quest
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-red-800 hover:text-red-500 font-semibold">Home</a>
          <a href="#" className="text-red-800 hover:text-red-500 font-semibold">About Canada</a>
          <a href="#" className="text-red-800 hover:text-red-500 font-semibold">Multiculturalism</a>
        </div>
        <button
          className="md:hidden text-red-700 hover:text-red-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;