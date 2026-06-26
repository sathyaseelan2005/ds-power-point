import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Car, Zap, Monitor, Truck, Home, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Battery,
      title: 'Two Wheeler Batteries',
      brands: ['Exide', 'Amaron'],
      description: 'High-performance batteries for all two-wheeler models including bikes and scooters. Long-lasting power with extended warranty.',
      features: ['All Models Available', 'Extended Warranty', 'Quick Replacement'],
      color: 'from-blue-500/10 to-blue-600/10',
      iconColor: 'text-blue-500',
    },
    {
      icon: Car,
      title: 'Four Wheeler Batteries',
      brands: ['Exide', 'Amaron'],
      description: 'Reliable car batteries designed for optimal performance in all weather conditions. Wide range for all car models.',
      features: ['All Car Models', 'Free Installation', 'Long Life'],
      color: 'from-green-500/10 to-green-600/10',
      iconColor: 'text-green-500',
    },
    {
      icon: Home,
      title: 'Home UPS & Inverters',
      brands: ['Exide', 'Amaron', 'V-Guard', 'Luminous', 'Microtek', 'HISOL', 'SF Sonic'],
      description: 'Power backup solutions ranging from 400VA to 100KVA for homes and offices. 24 Hours backup solutions available.',
      features: ['400VA – 100KVA', 'All Brands Available', '24H Backup'],
      color: 'from-primary-gold/10 to-accent-gold/10',
      iconColor: 'text-primary-gold',
    },
    {
      icon: Monitor,
      title: 'Computer UPS Batteries',
      brands: ['Numeric', 'V-Guard'],
      description: 'Compact and efficient UPS systems for computers and sensitive electronics. Reliable protection for your devices.',
      features: ['2 Years Warranty', 'Compact Design', 'Surge Protection'],
      color: 'from-purple-500/10 to-purple-600/10',
      iconColor: 'text-purple-500',
    },
    {
      icon: Truck,
      title: 'Industrial Batteries',
      brands: ['Exide', 'Amaron', 'V-Guard', 'Luminous', 'Microtek', 'HISOL', 'Invamaster'],
      description: 'Heavy-duty industrial power solutions for factories, warehouses, and commercial spaces. Built for performance.',
      features: ['Heavy Duty', 'Long Life', 'High Performance'],
      color: 'from-red-500/10 to-red-600/10',
      iconColor: 'text-red-500',
    },
    {
      icon: Zap,
      title: 'Servo Stabilizers',
      brands: ['V-Guard', 'Microtek'],
      description: 'Voltage stabilizers for home and office appliances. Complete protection for your valuable equipment.',
      features: ['Wide Range', 'Complete Protection', 'After Sales Service'],
      color: 'from-orange-500/10 to-orange-600/10',
      iconColor: 'text-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="products" className="py-20 lg:py-32 bg-white">
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
            <span className="text-primary-gold font-montserrat font-medium text-sm">Our Products</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-heading mb-4">
            Premium Power Solutions
          </h2>
          <p className="font-montserrat text-paragraph text-base max-w-2xl mx-auto">
            Strong starts. Steady backups. Total power solutions. Explore our wide range of batteries and power solutions from leading brands.
          </p>
        </motion.div>



        {/* Products Grid - Hidden as per user request
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-soft-lg transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${product.color} p-8`}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-4">
                  <product.icon size={32} className={product.iconColor} />
                </div>
                <h3 className="font-poppins font-bold text-xl text-heading mb-2">
                  {product.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="font-montserrat text-paragraph text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="mb-4">
                  <p className="font-montserrat text-xs text-gray-500 uppercase tracking-wider mb-2">Brands</p>
                  <div className="flex flex-wrap gap-2">
                    {product.brands.map((brand, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-background rounded-full text-xs font-montserrat font-medium text-heading"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-gold/10 text-primary-gold rounded-full text-xs font-montserrat font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <motion.a
                  href="https://wa.me/918902388887"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary-navy text-white rounded-xl font-montserrat font-medium text-sm hover:bg-secondary-dark transition-colors"
                >
                  <MessageCircle size={16} />
                  Enquire Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        */}

        {/* Product Images Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <motion.div
                key={num}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100 flex flex-col group"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden cursor-pointer relative">
                  <img
                    src={`/product-images/product${num}.jpeg`}
                    alt={`Product view ${num}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-4 bg-white mt-auto">
                  <motion.a
                    href="https://wa.me/918902388887"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary-navy text-white rounded-xl font-montserrat font-medium text-sm hover:bg-secondary-dark transition-colors"
                  >
                    <MessageCircle size={16} />
                    Enquire Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
