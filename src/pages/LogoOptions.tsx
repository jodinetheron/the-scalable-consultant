
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { ArrowLeft } from 'lucide-react';

const LogoOptions = () => {
  const logoStyles = ['orbital', 'constellation', 'galaxy', 'trajectory'];
  const colorVariants = ['default', 'dark', 'white'];
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center mb-8 text-space-blue hover:text-space-blue/80 transition-colors"
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-display font-bold mb-8">Logo Options for The Scalable Consultant</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {logoStyles.map((style) => (
            <div key={style} className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="font-display text-xl mb-4 capitalize">{style} Style</h2>
              
              <div className="space-y-8">
                <div className="p-6 bg-white rounded-md">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Default Color</h3>
                  <Logo logoStyle={style as any} variant="default" />
                </div>
                
                <div className="p-6 bg-white rounded-md">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Dark Color</h3>
                  <Logo logoStyle={style as any} variant="dark" />
                </div>
                
                <div className="p-6 bg-space-dark rounded-md">
                  <h3 className="text-sm font-medium text-gray-300 mb-4">White Color (on dark)</h3>
                  <Logo logoStyle={style as any} variant="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoOptions;
