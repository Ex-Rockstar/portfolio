import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <div className="flex items-center cursor-pointer text-xl md:text-2xl" onClick={() => scrollToSection('home')}>
            <ion-icon name="sparkles"></ion-icon>
            Ruthika
          </div>

          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden text-2xl text-primary-dark hover:text-primary-burgundy transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'experience', 'certificates', 'awards', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-heading2 transition-colors duration-300 text-primary-dark hover:text-primary-burgundy"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-4">
            {['home', 'about', 'experience', 'certificates', 'awards', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 text-sm font-heading2 transition-colors duration-300 rounded-lg text-primary-dark hover:text-primary-burgundy hover:bg-primary-beige"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;