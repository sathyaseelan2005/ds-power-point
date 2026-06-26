import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Brands />
      <Services />
      <WhyChooseUs />
      <WorkingProcess />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
