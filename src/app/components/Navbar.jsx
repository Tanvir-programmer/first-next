"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Adds a shadow and background blur when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with Gradient Text */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Brand<span className="text-blue-600">Logo</span>
            </span>
          </div>

          {/* Desktop Menu - High End Spacing */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Services', 'Case Studies', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 active:scale-95">
              Contact Us
            </button>
          </div>

          {/* Animated Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 focus:outline-none p-2 rounded-lg bg-slate-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide-down Animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-slate-100 px-6 py-6 space-y-4 shadow-xl">
          <a href="#" className="block text-base font-medium text-slate-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-base font-medium text-slate-700 hover:text-blue-600">Services</a>
          <a href="#" className="block text-base font-medium text-slate-700 hover:text-blue-600">About</a>
          <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-bold">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;