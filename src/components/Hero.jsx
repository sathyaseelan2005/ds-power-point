import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle, Battery, Zap, Car, Truck } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const trustItems = [
    'Genuine Products',
    'Installation Support',
    'Authorized Dealer',
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-primary-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-gold/10 rounded-full blur-2xl" />
      </div>

      {/* Curved Background */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <svg
          viewBox="0 0 500 800"
          className="h-full w-full opacity-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C200,200 300,400 200,800 L500,800 L500,0 Z"
            fill="url(#goldGradient)"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFC107" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-primary-gold/30 mb-6">
              <span className="w-2 h-2 bg-primary-gold rounded-full animate-pulse" />
              <span className="text-primary-gold font-montserrat font-medium text-sm">Since 1998</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
            >
              DS POWER POINT
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="font-poppins font-semibold text-2xl sm:text-3xl lg:text-4xl text-gradient-gold mb-6"
            >
              Powering Your Life With Reliability
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-montserrat text-gray-300 text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Your trusted partner for premium batteries and power solutions. 
              Authorized dealer for leading brands with 25+ years of excellence in service.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="tel:8902388887"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-white rounded-full font-montserrat font-semibold text-base hover:shadow-glow transition-shadow"
              >
                <Phone size={20} />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/918902388887"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-montserrat font-semibold text-base hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust Items */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary-gold flex-shrink-0" />
                  <span className="text-gray-300 font-montserrat text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Battery Composition */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
              {/* UPS Battery Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-primary-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Zap size={24} className="text-primary-gold" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">UPS Batteries</h3>
                <p className="text-gray-400 text-sm font-montserrat">Home & Computer UPS solutions</p>
              </motion.div>

              {/* Car Battery Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8"
              >
                <div className="w-12 h-12 bg-primary-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Car size={24} className="text-primary-gold" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">Car Batteries</h3>
                <p className="text-gray-400 text-sm font-montserrat">Four wheeler power solutions</p>
              </motion.div>

              {/* Two Wheeler Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-primary-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Battery size={24} className="text-primary-gold" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">Two Wheeler Batteries</h3>
                <p className="text-gray-400 text-sm font-montserrat">Bike & scooter batteries</p>
              </motion.div>

              {/* Industrial Card */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8"
              >
                <div className="w-12 h-12 bg-primary-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Truck size={24} className="text-primary-gold" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">Industrial Batteries</h3>
                <p className="text-gray-400 text-sm font-montserrat">Heavy-duty power systems</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-gold/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#F5F6F8"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
