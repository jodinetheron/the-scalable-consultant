
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import '../styles/custom-cursor.css';

const Index: React.FC = () => {
  // Custom cursor implementation
  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('rocket-cursor');
    document.body.appendChild(cursor);

    // Handle cursor movement
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      // Create flame trail
      const trail = document.createElement('div');
      trail.classList.add('flame-trail');
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);
      
      // Remove trail elements after animation completes
      setTimeout(() => {
        document.body.removeChild(trail);
      }, 800);
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Change cursor direction based on movement
    let lastX = 0;
    let lastY = 0;
    
    document.addEventListener('mousemove', (e) => {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        cursor.style.transform = `translate(-50%, -50%) rotate(${angle + 45}deg)`;
      }
      
      lastX = e.clientX;
      lastY = e.clientY;
    });
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
