import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Brands', href: '#brands' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-lg">DS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-poppins font-bold text-xl text-heading leading-tight">
                  DS POWER POINT
                </h1>
                <p className="text-xs text-paragraph tracking-wider">PREMIUM BATTERIES</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`font-montserrat font-medium text-sm transition-colors duration-200 hover:text-primary-gold ${
                    isScrolled ? 'text-heading' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:8902388887"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-gold text-white rounded-full font-montserrat font-medium text-sm hover:shadow-glow transition-shadow"
              >
                <Phone size={16} />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/918902388887"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary-navy text-white rounded-full font-montserrat font-medium text-sm hover:bg-secondary-dark transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-heading' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-24 px-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-lg font-poppins font-medium text-heading py-3 border-b border-gray-100"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="tel:8902388887"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-gold text-white rounded-full font-montserrat font-medium"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918902388887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-primary-navy text-white rounded-full font-montserrat font-medium"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
