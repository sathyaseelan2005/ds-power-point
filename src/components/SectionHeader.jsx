import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, dark = false, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 max-w-2xl mx-auto flex flex-col items-center px-4"
    >
      {/* Subtitle with decorative lines */}
      <div className="flex items-center gap-3 sm:gap-4 mb-3 w-full justify-center">
        <span className="w-8 sm:w-12 h-[2px] bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"></span>
        <h3 className="font-montserrat text-gold font-semibold tracking-widest text-xs sm:text-sm uppercase drop-shadow-sm text-center">
          {subtitle}
        </h3>
        <span className="w-8 sm:w-12 h-[2px] bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"></span>
      </div>
      
      {/* Main Title */}
      <div className="relative inline-block pb-3">
        <h2 className={`font-poppins font-bold text-3xl lg:text-4xl drop-shadow-sm relative z-10 ${dark ? 'text-white' : 'text-navy'}`}>
          {title}
        </h2>
        {/* Subtle gold underline */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70"></span>
      </div>

      {/* Optional Description / Content */}
      {children && (
        <div className={`mt-4 font-montserrat text-base max-w-2xl mx-auto ${dark ? 'text-white/80' : 'text-navy/80'}`}>
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;


