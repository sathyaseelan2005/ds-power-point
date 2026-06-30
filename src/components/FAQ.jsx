import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What brands of batteries do you sell?',
      answer: 'We are authorized dealers for all leading brands including Exide, Amaron, V-Guard, Luminous, Microtek, HISOL, and Numeric. We only sell genuine products with full warranty support.',
    },
    {
      question: 'Do you provide installation services?',
      answer: 'Yes, we provide professional installation services for all batteries and UPS systems. Our trained technicians ensure proper installation and testing at your location.',
    },
    {
      question: 'What is the warranty period for batteries?',
      answer: 'Warranty periods vary by brand and product type. Typically, two-wheeler batteries come with 2-3 years warranty, car batteries with 3-4 years, and UPS batteries with 2 years warranty. We handle all warranty claims.',
    },
    {
      question: 'Do you offer home delivery?',
      answer: 'Yes, we offer home delivery and installation services within Erode and surrounding areas. Contact us for delivery options and charges for your location.',
    },
    {
      question: 'How do I choose the right battery for my vehicle?',
      answer: 'Our expert team will help you choose the right battery based on your vehicle model, usage pattern, and budget. Just call us or visit our store with your vehicle details.',
    },
    {
      question: 'Do you sell stabilizers for home appliances?',
      answer: 'Yes, we sell V-Guard stabilizers for all home appliances including TV, refrigerator, AC, and washing machine. We also offer servo stabilizers for industrial use.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-2 tracking-wider">
            FAQ
          </h2>
          <div className="mb-6">
            <span className="text-gold font-montserrat font-medium text-base md:text-lg uppercase tracking-wider">Frequently Asked Questions</span>
          </div>
          <p className="font-montserrat text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-gold hover:bg-navy hover:border-transparent transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-poppins font-semibold text-navy group-hover:text-white transition-colors duration-300 text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-gold group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="font-montserrat text-navy/80 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;



