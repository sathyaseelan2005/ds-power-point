import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}\nPhone: ${formData.phone}\nProduct: ${formData.product}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/918902388887?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '181, Mettur Road, Near Kalyan Silks, Erode – 11',
      link: 'https://maps.google.com/?q=181+Mettur+Road+Erode',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '89023 88887',
      secondary: '98657 88887 / 98420 88887',
      link: 'tel:8902388887',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'dspowerpoint@gmail.com',
      link: 'mailto:dspowerpoint@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us',
      link: 'https://wa.me/918902388887',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 8:00 PM',
      secondary: 'Sunday: 10:00 AM - 6:00 PM',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-4">
            <span className="text-gold font-montserrat font-medium text-sm">Contact Us</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-navy mb-4">
            Get In Touch
          </h2>
          <p className="font-montserrat text-navy/80 text-base max-w-2xl mx-auto">
            Ready to power up? Contact us for expert advice and premium battery solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-navy-lighter1 rounded-2xl p-6 shadow-soft border border-gold hover:shadow-soft-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center mb-4 shadow-soft">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-white text-base mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-montserrat text-white/80 text-sm hover:text-gold transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="font-montserrat text-white/80 text-sm">{info.content}</p>
                  )}
                  {info.secondary && (
                    <p className="font-montserrat text-white/80 text-sm mt-1">{info.secondary}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-soft-lg h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.638!2d77.709!3d11.341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzI3LjYiTiA3N8KwNDInMzIuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DS Power Point Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-navy-lighter1 rounded-2xl shadow-soft border border-gold p-8 lg:p-10">
              <h3 className="font-poppins font-bold text-2xl text-white mb-2">
                Send Us a Message
              </h3>
              <p className="font-montserrat text-white/80 text-sm mb-8">
                Fill out the form below and we'll get back to you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-montserrat text-white text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy rounded-xl border border-gold/30 font-montserrat text-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 focus:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all placeholder:text-white/40"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy rounded-xl border border-gold/30 font-montserrat text-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 focus:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all placeholder:text-white/40"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block font-montserrat text-white text-sm font-medium mb-2">
                    Product Required
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy rounded-xl border border-gold/30 font-montserrat text-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 focus:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all appearance-none [&>option]:bg-navy [&>option]:text-white"
                  >
                    <option value="">Select a product</option>
                    <option value="Two Wheeler Battery">Two Wheeler Battery</option>
                    <option value="Four Wheeler Battery">Four Wheeler Battery</option>
                    <option value="Home UPS Battery">Home UPS Battery</option>
                    <option value="Computer UPS Battery">Computer UPS Battery</option>
                    <option value="Industrial Battery">Industrial Battery</option>
                    <option value="Servo Stabilizer">Servo Stabilizer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-montserrat text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-navy rounded-xl border border-gold/30 font-montserrat text-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 focus:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all resize-none placeholder:text-white/40"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white rounded-xl font-montserrat font-semibold text-base hover:bg-gold-hover hover:shadow-card-hover transition-all"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
