import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, Shield, Battery, Headphones, Activity, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Servo Stabilizers',
      description: 'Protect your valuable appliances from voltage fluctuations with our range of servo stabilizers.',
      features: [
        'Oil Cooled Stabilizers',
        'Air Cooled Stabilizers',
        'Capacity: 2KVA Ã¢â‚¬â€œ 150KVA',
      ],
      iconBg: 'bg-gold shadow-soft',
      iconColor: 'text-white',
    },
    {
      icon: Home,
      title: 'Home Appliance Protection',
      description: 'Comprehensive protection solutions for all your home appliances with V-Guard stabilizers.',
      features: [
        'TV Stabilizers',
        'Refrigerator Stabilizers',
        'AC Stabilizers',
        'Washing Machine Stabilizers',
      ],
      iconBg: 'bg-gold shadow-soft',
      iconColor: 'text-white',
    },
    {
      icon: Wrench,
      title: 'Installation & Maintenance',
      description: 'Professional installation and regular maintenance services for all battery and power systems.',
      features: [
        'Expert Installation Team',
        'Regular Maintenance',
        'Emergency Support',
        'Warranty Claims',
      ],
      iconBg: 'bg-gold shadow-soft',
      iconColor: 'text-white',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-6 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-2 tracking-wider">
            Our Services
          </h2>
          <div className="mb-6">
            <span className="text-gold font-montserrat font-medium text-base md:text-lg uppercase tracking-wider">Premium Services</span>
          </div>
          <p className="font-montserrat text-gray-600 text-lg max-w-2xl mx-auto">
            Beyond batteries, we offer comprehensive power protection and maintenance services
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl border border-gold hover:bg-navy hover:shadow-card-hover hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer"
            >
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gold/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <service.icon size={28} className="text-gold group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-xl text-navy group-hover:text-white transition-colors duration-300 mb-3">
                  {service.title}
                </h3>
                <p className="font-montserrat text-navy/80 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-gold group-hover:bg-white transition-colors duration-300 rounded-full flex-shrink-0" />
                      <span className="font-montserrat text-navy group-hover:text-white transition-colors duration-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>


              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



