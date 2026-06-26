import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
  const brands = [
    { name: 'Exide', status: 'Authorized Dealer', img: '/brands/exide.jpg' },
    { name: 'Amaron', status: 'Authorized Distributor', img: '/brands/amaron.jpg' },
    { name: 'V-Guard', status: 'Authorized Channel Partner', img: '/brands/v-guard.png' },
    { name: 'Luminous', status: 'Authorized Dealer', img: '/brands/luminous.png' },
    { name: 'Microtek', status: 'Authorized Dealer', img: '/brands/microtek.png' },
    { name: 'HISOL', status: 'Authorized Dealer', img: '/brands/hisol.png' },
    { name: 'Numeric', status: 'Authorized Channel Partner', img: '/brands/numeric.png' },
    { name: 'SF Sonic', status: 'Authorized Dealer', img: '/brands/sf-sonic.png' },
    { name: 'Invamaster', status: 'Authorized Dealer', img: '/brands/invamaster.jpg' },
  ];

  // Duplicate for seamless marquee
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-20 lg:py-32 bg-background overflow-hidden">
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
            <span className="text-primary-gold font-montserrat font-medium text-sm">Our Partners</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-heading mb-4">
            We Deal With
          </h2>
          <p className="font-montserrat text-paragraph text-base max-w-2xl mx-auto">
            All leading brands available. We are proud to be authorized dealers and distributors for India's leading battery and power solution brands.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -50 * brands.length + '%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 120,
                  ease: 'linear',
                },
              }}
              className="flex gap-6"
            >
              {marqueeBrands.map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-soft p-6 border border-gray-100 hover:shadow-soft-lg transition-all duration-300 group"
                >
                  {/* Brand Logo */}
                  <div className="w-full h-24 bg-white rounded-xl flex items-center justify-center mb-4 p-2">
                    <img
                      src={brand.img}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Brand Name */}
                  <h3 className="font-poppins font-semibold text-lg text-heading text-center mb-2">
                    {brand.name}
                  </h3>
                  
                  {/* Status Badge */}
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-primary-gold/10 text-primary-gold rounded-full text-xs font-montserrat font-medium">
                      {brand.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static Grid for Mobile */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:hidden">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-soft p-4 border border-gray-100 text-center"
            >
              <div className="w-full h-20 bg-white rounded-lg flex items-center justify-center mb-3 p-2">
                <img
                  src={brand.img}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h4 className="font-poppins font-medium text-sm text-heading mb-1">{brand.name}</h4>
              <span className="text-xs text-primary-gold font-montserrat">{brand.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
