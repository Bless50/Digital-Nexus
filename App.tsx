import React from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </Layout>
  );
}