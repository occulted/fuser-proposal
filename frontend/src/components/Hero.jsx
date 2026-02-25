import React from 'react';
import { ArrowDown } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById('context');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <ThreeBackground />
      
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto py-32">
        <div className="mb-16">
          <p className="text-black text-xs uppercase tracking-[0.3em] mb-8 font-light">PROJECT</p>
          <h1 className="text-5xl md:text-7xl lg:text-[120px] font-bold text-black mb-12 leading-[0.9] tracking-tight">
            FUSER STUDIO
            <br />
            CREATIVE
            <br />
            WORKSHOP
          </h1>
          <div className="h-px w-32 bg-black mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-black font-light mb-4 tracking-wide">
            Curated Artist Edition
          </p>
          <p className="text-sm text-gray-600 uppercase tracking-[0.2em] font-light">
            by Ikaro Cavalcante (occulted)
          </p>
          <p className="text-xs text-gray-500 mt-4 uppercase tracking-wider font-light">
            Brazil / São Paulo Activation
          </p>
        </div>

        <button 
          onClick={scrollToContent}
          className="mt-16 inline-flex items-center space-x-3 text-black"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-light">SCROLL TO EXPLORE</span>
          <ArrowDown size={16} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
