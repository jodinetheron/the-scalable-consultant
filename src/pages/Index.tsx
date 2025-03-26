
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
      
      {/* Admin link to logo options, can be removed later */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          to="/logo-options"
          className="text-xs text-gray-400 hover:text-space-blue transition-colors"
        >
          View Logo Options
        </Link>
      </div>
    </div>
  );
};

export default Index;
