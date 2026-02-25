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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <ThreeBackground />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Project</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            FUSER AI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              CREATIVE
            </span>
            <br />
            WORKSHOP
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Curated Artists Edition
          </p>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            São Paulo Activation | US Market Standard Model
          </p>
        </div>

        <button 
          onClick={scrollToContent}
          className="mt-12 group inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300"
        >
          <span className="text-sm uppercase tracking-widest">Explore</span>
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
