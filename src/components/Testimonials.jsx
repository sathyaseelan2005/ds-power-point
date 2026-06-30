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
    {
      name: 'Sakthi',
      role: 'Customer',
      rating: 5,
      text: 'Amazing support and fast installation. I called them for a car battery replacement and they arrived within an hour. Excellent service!',
    },
    {
      name: 'Prem',
      role: 'Business Owner',
      rating: 5,
      text: 'The best battery shop in Erode. Their knowledgeable staff helped me choose the perfect inverter for my office. Truly a premium experience.',
    },
    {
      name: 'Suriya',
      role: 'Customer',
      rating: 5,
      text: 'Very satisfied with the purchase. They offer competitive prices and the after-sales support is unmatched. Would definitely recommend to friends.',
    },
  ];

  // Duplicate for seamless marquee
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-6 lg:py-10 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2 tracking-wider">
            What Our Customers Say
          </h2>
          <div className="mb-6">
            <span className="text-gold font-montserrat font-medium text-base md:text-lg uppercase tracking-wider">Testimonials</span>
          </div>
          <p className="font-montserrat text-white/80 text-base max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across Erode
          </p>
        </motion.div>
      </div>

      {/* Scrolling Marquee container */}
      <div className="relative w-full overflow-hidden flex group">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 px-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-soft border border-gold p-8 w-[320px] lg:w-[400px] flex-shrink-0 relative transition-all duration-300 hover:shadow-soft-lg"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <Quote size={18} className="text-gold" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-montserrat text-navy/80 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="font-poppins font-bold text-white text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-navy text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="font-montserrat text-navy/60 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


