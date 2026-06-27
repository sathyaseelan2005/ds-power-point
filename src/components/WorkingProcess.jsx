import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Settings, Headphones, ArrowDown, ArrowRight } from 'lucide-react';

const WorkingProcess = () => {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Call Us',
      description: 'Reach out to us via phone or WhatsApp for your battery requirements.',
    },
    {
      icon: MessageSquare,
      number: '02',
      title: 'Get Expert Suggestion',
      description: 'Our team will recommend the best battery based on your needs and budget.',
    },
    {
      icon: Settings,
      number: '03',
      title: 'Battery Installation',
      description: 'Professional installation at your location with proper testing and setup.',
    },
    {
      icon: Headphones,
      number: '04',
      title: 'After Sales Support',
      description: 'Complete warranty support and maintenance services whenever you need.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-navy">
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
            <span className="text-gold font-montserrat font-medium text-sm">How It Works</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
            Our Working Process
          </h2>
          <p className="font-montserrat text-white/80 text-base max-w-2xl mx-auto">
            Simple and hassle-free process to get your power solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">


          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative"
              >
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowDown size={24} className="text-gold" />
                  </div>
                )}

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-8 w-8 -translate-y-1/2 justify-center z-10">
                    <ArrowRight size={28} className="text-gold" />
                  </div>
                )}

                <div className="bg-white rounded-2xl p-6 shadow-soft border border-gold text-center h-full">
                  {/* Number & Icon */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                      <step.icon size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-gold rounded-full shadow-soft flex items-center justify-center">
                      <span className="font-poppins font-bold text-sm text-gold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-poppins font-bold text-xl text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="font-montserrat text-navy/80 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
