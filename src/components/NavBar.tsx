
import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo variant={isScrolled ? 'default' : 'white'} />
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`font-medium transition-colors hover:text-space-blue ${
                      isScrolled ? 'text-space-dark' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://www.linkedin.com/in/jodinetheron/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all border-2 button-glow ${
              isScrolled
                ? 'bg-space-blue text-white border-space-blue hover:bg-space-blue/90'
                : 'bg-transparent text-white border-white/30 hover:border-white'
            }`}
          >
            <Linkedin size={16} /> Let's Connect
          </a>
          
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className={isScrolled ? 'text-space-dark' : 'text-white'} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-space-dark z-50 flex flex-col">
          <div className="container mx-auto px-4 py-5">
            <div className="flex justify-between items-center">
              <Logo variant="white" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="text-white" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 pb-20">
            <ul className="flex flex-col space-y-8 text-center">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white text-2xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-8">
                <a
                  href="https://www.linkedin.com/in/jodinetheron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium bg-space-blue text-white border-2 border-space-blue hover:bg-space-blue/90 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Linkedin size={18} /> Let's Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
