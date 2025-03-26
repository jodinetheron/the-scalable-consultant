
import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-md">
              Helping 6-figure B2B consultants simplify their tech stack, streamline processes, and implement effective automation and marketing strategies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-space-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-space-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-space-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-space-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
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
              <li className="text-gray-600">contact@scalableconsultant.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
              <li className="text-gray-600">123 Business Ave, Suite 456<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2023 The Scalable Consultant. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-space-blue text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-space-blue text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
