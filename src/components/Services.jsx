import React from 'react';
import { motion } from 'framer-motion';
import { Video, ShieldAlert, Fingerprint, CloudCog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-10 h-10 text-primary" />,
      title: "CCTV Installation",
      description: "High-definition camera setups for comprehensive monitoring, equipped with night vision and motion detection."
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-primary" />,
      title: "Alarm Systems",
      description: "Smart intruder alarms integrated directly with local authorities and your mobile device for rapid response."
    },
    {
      icon: <Fingerprint className="w-10 h-10 text-primary" />,
      title: "Access Control",
      description: "Biometric and keycard entry systems allowing you to restrict and monitor access to sensitive areas."
    },
    {
      icon: <CloudCog className="w-10 h-10 text-primary" />,
      title: "Cloud Storage",
      description: "Secure, encrypted off-site video backup ensuring your footage is safe from local tampering or hardware failure."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-bold tracking-wider uppercase mb-2">Our Services</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Security and Surveillance Solutions</h2>
          <p className="text-muted text-lg">
            We offer end-to-end security services tailored for residential and commercial properties.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-surface p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="text-primary font-medium inline-flex items-center hover:text-blue-700 transition-colors">
                Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
