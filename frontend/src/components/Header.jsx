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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/95 border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-black text-sm font-light tracking-wider">IKARO CAVALCANTE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button onClick={() => scrollToSection('context')} className="text-black text-sm font-light tracking-wide">
              CONTEXT
            </button>
            <button onClick={() => scrollToSection('production')} className="text-black text-sm font-light tracking-wide">
              PRODUCTION
            </button>
            <button onClick={() => scrollToSection('deliverables')} className="text-black text-sm font-light tracking-wide">
              DELIVERABLES
            </button>
            <button onClick={() => scrollToSection('investment')} className="text-black text-sm font-light tracking-wide">
              INVESTMENT
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-black text-sm font-light tracking-wide">
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 space-y-4 border-t border-gray-200 pt-4">
            <button onClick={() => scrollToSection('context')} className="block text-black text-sm font-light tracking-wide">
              CONTEXT
            </button>
            <button onClick={() => scrollToSection('production')} className="block text-black text-sm font-light tracking-wide">
              PRODUCTION
            </button>
            <button onClick={() => scrollToSection('deliverables')} className="block text-black text-sm font-light tracking-wide">
              DELIVERABLES
            </button>
            <button onClick={() => scrollToSection('investment')} className="block text-black text-sm font-light tracking-wide">
              INVESTMENT
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-black text-sm font-light tracking-wide">
              CONTACT
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
