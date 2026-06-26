import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-gold/10 rounded-full mb-4">
            <span className="text-primary-gold font-montserrat font-medium text-sm">FAQ</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-montserrat text-paragraph text-base max-w-2xl mx-auto">
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
              className="bg-background rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-poppins font-semibold text-heading text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-primary-gold" />
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
                      <p className="font-montserrat text-paragraph text-sm leading-relaxed">
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
