import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Shield, Wrench, CheckCircle } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const stats = [
    { icon: Award, value: 25, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 1000, suffix: '+', label: 'Happy Customers' },
    { icon: Shield, value: 7, suffix: '+', label: 'Premium Brands' },
    { icon: Wrench, value: 100, suffix: '%', label: 'Professional Service' },
  ];

  const features = [
    'Expert Consultation',
    'After Sales Support',
    'Genuine Products Only',
    'Warranty Assistance',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
              <div className="aspect-[4/3] w-full h-full">
                <img src="/unnamed.webp" alt="DS Power Point Store" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-soft-lg p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-gold/10 rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-primary-gold" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-heading text-lg">Authorized</p>
                  <p className="text-paragraph text-sm font-montserrat">Dealer Status</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-gold/10 rounded-full mb-6">
              <span className="text-primary-gold font-montserrat font-medium text-sm">About Us</span>
            </div>

            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-heading mb-6">
              Trusted Battery Dealer Since 1998
            </h2>

            <p className="font-montserrat text-paragraph text-base lg:text-lg leading-relaxed mb-6">
              DS Power Point has been a leading name in battery and power solutions for over 25 years. 
              We pride ourselves on delivering genuine products from top brands, expert consultation, 
              and unmatched after-sales support to keep your life powered without interruption.
            </p>

            <p className="font-montserrat text-paragraph text-base leading-relaxed mb-8">
              Located in the heart of Erode, we serve thousands of satisfied customers with 
              professional installation services and comprehensive warranty support.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-primary-gold flex-shrink-0" />
                  <span className="font-montserrat text-heading text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-5 shadow-soft text-center"
                >
                  <div className="w-10 h-10 bg-primary-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={20} className="text-primary-gold" />
                  </div>
                  <p className="font-poppins font-bold text-2xl text-heading mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-montserrat text-paragraph text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
