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
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-light/10 rounded-full blur-2xl" />
      </div>



      <div className="relative w-full pt-20 lg:pt-24">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative z-10"
        >
          <img 
            src="/hero-image.png" 
            alt="DS Power Point Hero Banner" 
            className="w-full h-auto" 
          />
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;

