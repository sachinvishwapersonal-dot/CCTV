import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "500+", label: "Professional Team" },
    { value: "2.5K", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Active Monitoring" }
  ];

  return (
    <section className="py-20 relative bg-primary">
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-white/80 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
