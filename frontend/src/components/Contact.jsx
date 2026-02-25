import React from 'react';
import { Instagram, Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-12 font-light">06 / CONNECT</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 font-light">
            Ready to bring this curated AI workshop experience to life? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white mb-16">
          {/* Instagram */}
          <a 
            href="https://instagram.com/occulted" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black border-2 border-white p-10 text-center"
          >
            <Instagram className="text-white mx-auto mb-6" size={32} />
            <p className="text-gray-500 text-xs uppercase tracking-wider font-light mb-2">INSTAGRAM</p>
            <p className="text-white text-lg font-light">@occulted</p>
          </a>

          {/* Email */}
          <div className="bg-black border-2 border-white p-10 text-center">
            <Mail className="text-white mx-auto mb-6" size={32} />
            <p className="text-gray-500 text-xs uppercase tracking-wider font-light mb-2">EMAIL</p>
            <p className="text-white text-lg font-light">ikrcvl@gmail.com</p>
          </div>

          {/* Website */}
          <a 
            href="https://occulted.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black border-2 border-white p-10 text-center"
          >
            <Globe className="text-white mx-auto mb-6" size={32} />
            <p className="text-gray-500 text-xs uppercase tracking-wider font-light mb-2">WEBSITE</p>
            <p className="text-white text-lg font-light">occulted.com.br</p>
          </a>
        </div>

        {/* Author Info */}
        <div className="text-center border-4 border-white py-16 px-8">
          <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider font-light">CURATED & LED BY</p>
          <h3 className="text-white text-3xl md:text-5xl font-bold mb-3 tracking-tight">IKARO CAVALCANTE</h3>
          <p className="text-gray-400 uppercase tracking-widest text-sm font-light">(OCCULTED)</p>
          <div className="h-px w-24 bg-white mx-auto my-6"></div>
          <p className="text-gray-400 text-sm font-light">Digital Artist & Curator</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
