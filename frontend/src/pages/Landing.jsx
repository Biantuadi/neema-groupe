import React from 'react';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import About from '../components/landing/About';
import Team from '../components/landing/Team';
import Testimonials from '../components/landing/Testimonials';
import Contact from '../components/landing/Contact';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
