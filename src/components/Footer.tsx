
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-md">
              Helping founders simplify their tech stack, streamline processes, and implement effective automation and marketing strategies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-space-blue transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-space-blue transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-600 hover:text-space-blue transition-colors">Our Process</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-space-blue transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-space-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a href="mailto:support@thescalableconsultant.com" className="hover:text-space-blue transition-colors">
                  support@thescalableconsultant.com
                </a>
              </li>
              <li className="text-gray-600">
                <a href="https://api.whatsapp.com/send/?phone=2640813800076&text=Can+you+tell+me+more+about+how+to+reclaim+15%2B+hours+weekly+%26+create+happier+clients%3F&type=phone_number&app_absent=0" 
                   className="hover:text-space-blue transition-colors"
                   target="_blank" 
                   rel="noopener noreferrer">
                  +264 81 380 0076
                </a>
              </li>
              <li className="text-gray-600">
                Regent Street East, Mount Lawley<br />
                WA 6050, Australia
              </li>
              <li className="text-gray-600">
                ABN 44 819 427 569
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 The Scalable Consultant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
