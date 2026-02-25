import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xl font-bold tracking-tight">FUSER</span>
            <span className="text-gray-400 text-sm">AI Workshop</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('context')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Context
            </button>
            <button onClick={() => scrollToSection('production')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Production
            </button>
            <button onClick={() => scrollToSection('deliverables')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Deliverables
            </button>
            <button onClick={() => scrollToSection('investment')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Investment
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-sm">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('context')} className="block text-gray-300 hover:text-white transition-colors text-sm">
              Context
            </button>
            <button onClick={() => scrollToSection('production')} className="block text-gray-300 hover:text-white transition-colors text-sm">
              Production
            </button>
            <button onClick={() => scrollToSection('deliverables')} className="block text-gray-300 hover:text-white transition-colors text-sm">
              Deliverables
            </button>
            <button onClick={() => scrollToSection('investment')} className="block text-gray-300 hover:text-white transition-colors text-sm">
              Investment
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors text-sm">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
