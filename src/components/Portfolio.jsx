import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import imgEnterprise from '../assets/portfolio_enterprise_1787818011792.jpg';
import imgResidential from '../assets/portfolio_residential_1787818025974.jpg';
import imgHealthcare from '../assets/portfolio_healthcare_1787818046177.jpg';
import imgIndustrial from '../assets/portfolio_industrial_1787818059201.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "Commercial Surveillance",
      category: "Enterprise",
      image: imgEnterprise
    },
    {
      title: "Residential Smart Cameras",
      category: "Residential",
      image: imgResidential
    },
    {
      title: "Hospital Security Systems",
      category: "Healthcare",
      image: imgHealthcare
    },
    {
      title: "Warehouse Monitoring",
      category: "Industrial",
      image: imgIndustrial
    }
  ];

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-2">Our Projects</h4>
            <h2 className="text-4xl md:text-5xl font-bold">Advanced Features Security Installations</h2>
          </div>
          <button className="btn-outline self-start md:self-auto">View All Projects</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] md:aspect-video cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-primary font-medium mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
