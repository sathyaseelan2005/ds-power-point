import { motion } from 'framer-motion';

const Brands = () => {
  const brands = [
    { name: 'Exide', status: 'Authorized Dealer', img: '/brands/exide.jpg' },
    { name: 'Amaron', status: 'Authorized Distributor', img: '/brands/amaron.jpg' },
    { name: 'V-Guard', status: 'Authorized Channel Partner', img: '/brands/v-guard.png' },
    { name: 'Luminous', status: 'Authorized Dealer', img: '/brands/luminous.png' },
    { name: 'Microtek', status: 'Authorized Dealer', img: '/brands/microtek.png' },
    { name: 'HISOL', status: 'Authorized Dealer', img: '/brands/hisol.png' },
    { name: 'Numeric', status: 'Authorized Channel Partner', img: '/brands/numeric.png' },
    { name: 'SF Sonic', status: 'Authorized Dealer', img: '/brands/sf-sonic.png' },
    { name: 'Invamaster', status: 'Authorized Dealer', img: '/brands/invamaster.jpg' },
  ];

  // Duplicate for seamless marquee
  const marqueeBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-6 lg:py-10 bg-navy overflow-hidden border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-2 tracking-wider">
            Brands
          </h2>
          <div className="mb-6">
            <span className="text-gold font-montserrat font-medium text-base md:text-lg uppercase tracking-wider">We Deal With</span>
          </div>
          <p className="font-montserrat text-white/90 text-lg max-w-2xl mx-auto">
            All leading brands available. We are proud to be authorized dealers and distributors for India's leading battery and power solution brands.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative hidden lg:block">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />

          {/* Marquee */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 120,
                  ease: 'linear',
                },
              }}
              className="flex gap-6"
            >
              {marqueeBrands.map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-card p-6 border border-gold hover:border-gold hover:shadow-card-hover transition-all duration-300 group"
                >
                  {/* Brand Logo */}
                  <div className="w-full h-24 bg-transparent rounded-xl flex items-center justify-center mb-4 p-2">
                    <img
                      src={brand.img}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Brand Name */}
                  <h3 className="font-poppins font-semibold text-lg text-navy text-center mb-2">
                    {brand.name}
                  </h3>


                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static Grid for Mobile */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:hidden">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-card p-4 border border-gold text-center"
            >
              <div className="w-full h-20 bg-transparent rounded-lg flex items-center justify-center mb-3 p-2">
                <img
                  src={brand.img}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h4 className="font-poppins font-medium text-sm text-navy mb-1">{brand.name}</h4>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;




