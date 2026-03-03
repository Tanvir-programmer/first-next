"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? "top-4 px-4" : "top-0 px-0"
    }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        isScrolled 
        ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl px-6 py-3" 
        : "bg-transparent px-8 py-6"
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">F</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Future<span className="text-indigo-600">Sync</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-indigo-600">Log in</button>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 hover:scale-105 transition-all active:scale-95 shadow-lg shadow-slate-200">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-slate-700">{link.name}</a>
            ))}
            <hr className="border-slate-100" />
            <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Sign Up Free</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;