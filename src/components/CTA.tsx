
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
            Ready to <span className="text-gradient">Scale Your Consulting</span> Business?
          </h2>
          <p className="text-white/80 md:text-lg mb-10 max-w-2xl mx-auto">
            Let's transform your processes, simplify your tech, and implement targeted automations that drive real growth for your consulting practice.
          </p>
          
          <div className="glass p-8 rounded-2xl max-w-xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-space-blue" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-space-blue" 
                    required
                  />
                </div>
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-space-blue" 
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your business..." 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-space-blue" 
                  required
                />
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 rounded-lg bg-space-blue text-white font-medium hover:bg-space-blue/90 transition-all flex items-center justify-center gap-2 button-glow"
                >
                  Get Started <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
