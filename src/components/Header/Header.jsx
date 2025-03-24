import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl font-heading1 text-primary-dark">
              Ruthika
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-primary-taupe hover:text-primary-burgundy transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-primary-taupe hover:text-primary-burgundy transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-primary-taupe hover:text-primary-burgundy transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-primary-taupe hover:text-primary-burgundy transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-primary-taupe hover:text-primary-burgundy transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-primary-taupe hover:text-primary-burgundy transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-primary-taupe hover:text-primary-burgundy hover:bg-primary-beige focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-white shadow-lg rounded-lg">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-primary-taupe hover:text-primary-burgundy hover:bg-primary-beige rounded-md transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-primary-taupe hover:text-primary-burgundy hover:bg-primary-beige rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-primary-taupe hover:text-primary-burgundy hover:bg-primary-beige rounded-md transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-3 py-2 text-primary-taupe hover:text-primary-burgundy hover:bg-primary-beige rounded-md transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-primary-taupe hover:text-primary-burgundy hover:bg-primary-beige rounded-md transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-primary-taupe hover:text-primary-burgundy hover:bg-primary-beige rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;