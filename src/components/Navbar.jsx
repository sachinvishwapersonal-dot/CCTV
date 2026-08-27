import React, { useState } from 'react';
import { Menu, X, Shield, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl md:text-2xl font-heading font-bold text-slate-900 tracking-wider">RAJ SECURITY SOLUTIONS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-primary font-medium hover:text-blue-700 transition-colors">Home</a>
              <a href="#about" className="text-muted hover:text-primary transition-colors font-medium">About Us</a>
              <a href="#services" className="text-muted hover:text-primary transition-colors font-medium">Services</a>
              <a href="#projects" className="text-muted hover:text-primary transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-muted hover:text-primary transition-colors font-medium">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-900">
              <PhoneCall className="w-5 h-5 text-primary" />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <button className="btn-primary">Get a Quote</button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-500 hover:text-primary inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <a href="#services" className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#projects" className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#contact" className="text-muted hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button className="w-full mt-4 btn-primary">Get a Quote</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
