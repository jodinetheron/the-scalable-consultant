import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createStars = () => {
      if (starsRef.current) {
        starsRef.current.innerHTML = '';
        const starCount = Math.floor(window.innerWidth / 10);
        
        for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.className = 'cosmic-dot';
          star.style.width = `${Math.random() * 3 + 1}px`;
          star.style.height = star.style.width;
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 3}s`;
          
          starsRef.current.appendChild(star);
        }
      }
    };
    
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-space-dark pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cosmos opacity-40"></div>
      <div className="absolute inset-0 bg-nebula opacity-70"></div>
      <div ref={starsRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Orbital Paths */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] orbital-path"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] orbital-path"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] orbital-path"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white/80 text-sm font-medium">Simplify. Automate. Scale.</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-tight animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
            We Transform Client Journeys into <span className="text-gradient">Growth Engines</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
            Results-driven onboarding, delivery systems & SOP automation that save you 15+ hours weekly. Helping businesses scale with confidence without losing the human touch.
          </p>
          
          <div className="animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
            <a 
              href="https://www.linkedin.com/in/jodinetheron/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-space-blue text-white font-medium hover:bg-space-blue/90 transition-all flex items-center gap-2 button-glow"
            >
              Let's Connect <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/60 hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
