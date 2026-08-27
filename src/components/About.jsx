import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImage from '../assets/about_cctv_1787817998122.jpg';

const About = () => {
  const features = [
    "High-Resolution 4K Cameras",
    "24/7 Professional Monitoring",
    "Smart Home Integration",
    "Mobile App Remote Access",
    "Cloud Storage & Backup",
    "Expert Installation Team"
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-lg blur-lg opacity-30"></div>
            <img 
              src={aboutImage} 
              alt="Security Professional" 
              className="relative rounded-lg shadow-2xl border border-white/10 w-full h-[500px] object-cover"
            />
            
            <div className="absolute -bottom-8 -right-8 bg-white border border-slate-200 p-6 rounded-lg shadow-xl hidden md:block">
              <div className="text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-slate-600 font-medium">Years of Trust<br/>& Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-primary font-bold tracking-wider uppercase mb-2">About Us</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Protecting Homes, Businesses and Peace in Bhopal</h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Based in the heart of Madhya Pradesh, Raj Security Solutions specializes in delivering state-of-the-art security systems tailored to your specific needs. From high-definition CCTV networks to advanced access control, our solutions ensure that you are always connected and protected locally.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">Discover More About Us</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
