import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero_cctv_1787817985787.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="CCTV Camera" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#0000001a_1px,transparent_1px),linear-gradient(90deg,#0000001a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 mb-6 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 uppercase tracking-wider">Advanced Security Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Protecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Every Space</span> With Smart Tech.
          </h1>
          
          <p className="text-xl text-muted mb-10 max-w-2xl leading-relaxed">
            Comprehensive CCTV, Alarm, and Surveillance installations for homes and businesses. We deliver trusted security solutions you can monitor from anywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex justify-center">Explore Services</button>
            <button className="btn-outline flex justify-center">Contact Us Today</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
