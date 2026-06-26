import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Home, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Servo Stabilizers',
      description: 'Protect your valuable appliances from voltage fluctuations with our range of servo stabilizers.',
      features: [
        'Oil Cooled Stabilizers',
        'Air Cooled Stabilizers',
        'Capacity: 2KVA – 150KVA',
      ],
      gradient: 'from-blue-500/10 to-blue-600/5',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
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
      gradient: 'from-primary-gold/10 to-accent-gold/5',
      iconBg: 'bg-primary-gold/10',
      iconColor: 'text-primary-gold',
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
      gradient: 'from-green-500/10 to-green-600/5',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500',
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
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-gold/10 rounded-full mb-4">
            <span className="text-primary-gold font-montserrat font-medium text-sm">Our Services</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-heading mb-4">
            Premium Services
          </h2>
          <p className="font-montserrat text-paragraph text-base max-w-2xl mx-auto">
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
              className="group relative bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-soft-lg transition-all duration-300"
            >
              {/* Top Gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon size={28} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-xl text-heading mb-3">
                  {service.title}
                </h3>
                <p className="font-montserrat text-paragraph text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-gold rounded-full flex-shrink-0" />
                      <span className="font-montserrat text-heading text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/918902388887"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary-gold font-montserrat font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
