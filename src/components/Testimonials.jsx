import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      rating: 5,
      text: 'DS Power Point has been our go-to battery supplier for years. Their genuine products and excellent service keep us coming back. Highly recommended!',
    },
    {
      name: 'Priya Sundaram',
      role: 'Homeowner',
      rating: 5,
      text: 'Got my home UPS battery replaced here. The team was professional, installation was quick, and the pricing was very reasonable. Great experience!',
    },
    {
      name: 'Karthik R',
      role: 'Auto Workshop Owner',
      rating: 5,
      text: 'As a workshop owner, I need reliable battery suppliers. DS Power Point never disappoints. Always genuine products with proper warranty.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
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
            <span className="text-primary-gold font-montserrat font-medium text-sm">Testimonials</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-heading mb-4">
            What Our Customers Say
          </h2>
          <p className="font-montserrat text-paragraph text-base max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across Erode
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8 hover:shadow-soft-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-primary-gold/10 rounded-full flex items-center justify-center">
                <Quote size={18} className="text-primary-gold" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-primary-gold fill-primary-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-montserrat text-paragraph text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-gold to-accent-gold rounded-full flex items-center justify-center">
                  <span className="font-poppins font-bold text-white text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-heading text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="font-montserrat text-paragraph text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
