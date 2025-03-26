
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Process />
      <CTA />
      <Footer />
      
      {/* Logo options link */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          to="/logo-options"
          className="bg-space-blue text-white px-4 py-2 rounded-md shadow-md hover:bg-space-blue/90 transition-colors text-sm"
        >
          View Logo Options
        </Link>
      </div>
    </div>
  );
};

export default Index;
