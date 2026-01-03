// src/components/Header.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, navigationItems }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#" onClick={() => scrollToSection('about')}>Roosso P.</a>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                activeSection === item.id ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="block text-center py-2 text-gray-600 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;