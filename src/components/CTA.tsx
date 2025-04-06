
import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-space-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cosmos opacity-40"></div>
      <div className="absolute inset-0 bg-nebula opacity-70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Want to Reclaim 15+ Hours Weekly & Create <span className="text-gradient">Happier Clients?</span>
          </h2>
          <p className="text-white/80 md:text-lg mb-10 max-w-2xl mx-auto">
            Let me show you how to eliminate 80% of manual tasks while making your service feel more personal than ever.
          </p>
          
          <div className="glass p-8 rounded-2xl max-w-xl mx-auto">
            <div className="text-white mb-6">
              <p className="text-lg mb-4">
                "Jodine has remarkable insight and brings clarity to business planning. She knows how to ask the right questions and guided me in creating a business plan that's reasonable, clearly stated and totally do-able!"
              </p>
              <p className="font-medium">- Dea Irby</p>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/jodinetheron/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full px-6 py-4 rounded-lg bg-space-blue text-white font-medium hover:bg-space-blue/90 transition-all flex items-center justify-center gap-2 button-glow"
            >
              <Linkedin size={20} /> Let's Connect on LinkedIn <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
