import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, ThumbsUp, Clock, Settings, Wallet, Users, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Since 1998',
      description: 'Over 25 years of trusted service in battery and power solutions.',
    },
    {
      icon: Shield,
      title: 'Genuine Products',
      description: '100% authentic products from authorized brands only.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trained professionals for consultation and installation.',
    },
    {
      icon: BadgeCheck,
      title: 'Warranty Support',
      description: 'Complete warranty assistance and after-sales service.',
    },
    {
      icon: Shield,
      title: 'Best Brands',
      description: 'Authorized dealer for all leading battery brands.',
    },
    {
      icon: Wallet,
      title: 'Affordable Pricing',
      description: 'Competitive prices with the best value for your money.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-6 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-2 tracking-wider">
            Why Choose Us
          </h2>
          <div className="mb-6">
            <span className="text-gold font-montserrat font-medium text-base md:text-lg uppercase tracking-wider">The DS Power Point Advantage</span>
          </div>
          <p className="font-montserrat text-gray-600 text-lg max-w-2xl mx-auto">
            We go beyond just selling batteries. Our commitment to quality, service, and customer satisfaction sets us apart.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden relative shadow-2xl flex items-center justify-center bg-gray-100 border-4 border-white">
                <video
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/promo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right - Features Grid */}
          <div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-50 rounded-2xl p-6 shadow-soft border border-gold hover:bg-navy hover:border-transparent hover:shadow-soft-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gold/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 shadow-soft transition-colors duration-300">
                    <feature.icon size={24} className="text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-navy group-hover:text-white transition-colors duration-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-navy/80 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



