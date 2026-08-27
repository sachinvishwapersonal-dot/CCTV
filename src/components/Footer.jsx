import React from 'react';
import { Shield, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-heading font-bold text-slate-900 tracking-wider">RAJ SECURITY SOLUTIONS</span>
            </div>
            <p className="text-muted mb-6">
              Leading provider of advanced security solutions in Bhopal, protecting what matters most with cutting-edge technology and 24/7 monitoring.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-slate-500 hover:text-white">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-slate-500 hover:text-white">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-slate-500 hover:text-white">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors text-slate-500 hover:text-white">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-900">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted hover:text-primary transition-colors flex items-center before:content-[''] before:w-2 before:h-2 before:bg-primary before:mr-3 before:rounded-full">About Us</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors flex items-center before:content-[''] before:w-2 before:h-2 before:bg-primary before:mr-3 before:rounded-full">Our Team</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors flex items-center before:content-[''] before:w-2 before:h-2 before:bg-primary before:mr-3 before:rounded-full">Pricing Plans</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors flex items-center before:content-[''] before:w-2 before:h-2 before:bg-primary before:mr-3 before:rounded-full">Latest News</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors flex items-center before:content-[''] before:w-2 before:h-2 before:bg-primary before:mr-3 before:rounded-full">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-900">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted hover:text-primary transition-colors">CCTV Installation</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Security Consulting</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Alarm Systems</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Access Control</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">24/7 Monitoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-900">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted">MP Nagar Zone - 2, Bhopal, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted">info@rajsecuritysolutions.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 text-center md:flex md:justify-between md:text-left">
          <p className="text-muted mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Raj Security Solutions. All Rights Reserved.
          </p>
          <div className="space-x-6">
            <a href="#" className="text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
