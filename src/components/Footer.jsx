import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Brands', href: '#brands' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'Two Wheeler Batteries',
    'Four Wheeler Batteries',
    'Home UPS & Inverters',
    'Computer UPS Batteries',
    'Industrial Batteries',
    'Servo Stabilizers',
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 sm:h-16 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/logo.jpg" alt="DS Logo" className="h-full w-auto object-contain" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-white">DS POWER POINT</h3>
                <p className="text-gray-400 text-xs tracking-wider">PREMIUM BATTERIES</p>
              </div>
            </div>
            <p className="font-montserrat text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium batteries and power solutions since 1998. 
              Authorized dealer for leading brands with 25+ years of excellence.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/karamtrustofficial?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 border border-gold text-gold rounded-lg flex items-center justify-center hover:bg-gold hover:text-white transition-colors group"
              >
                <InstagramIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-montserrat text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="font-montserrat text-gray-400 text-sm">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-poppins font-semibold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-gray-400 text-sm">
                  181, Mettur Road, Near Kalyan Silks, Erode â€“ 11
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <div>
                  <a href="tel:8902388887" className="font-montserrat text-gray-400 text-sm hover:text-gold transition-colors block">
                    89023 88887
                  </a>
                  <a href="tel:9865788887" className="font-montserrat text-gray-400 text-sm hover:text-gold transition-colors block">
                    98657 88887
                  </a>
                  <a href="tel:9842088887" className="font-montserrat text-gray-400 text-sm hover:text-gold transition-colors block">
                    98420 88887
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a href="mailto:dspowerpoint@gmail.com" className="font-montserrat text-gray-400 text-sm hover:text-gold transition-colors">
                  dspowerpoint@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-montserrat text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} DS Power Point. All rights reserved.
            </p>
            <p className="font-montserrat text-gray-500 text-xs mr-16 lg:mr-24 text-center md:text-right">
              Designed & Developed by <a href="https://pepsoftwares.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Pep Software</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


