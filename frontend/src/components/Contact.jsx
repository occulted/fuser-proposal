import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-black via-gray-900/30 to-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">06 / Connect</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to bring this curated AI workshop experience to life? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Instagram CTA */}
          <a 
            href="https://instagram.com/occulted" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-white/5 to-transparent border border-gray-800 hover:border-white/40 p-8 transition-all duration-300 hover:bg-white/5"
          >
            <div className="flex items-start justify-between mb-6">
              <Instagram className="text-white" size={32} />
              <span className="text-gray-500 group-hover:text-white transition-colors text-sm">Follow</span>
            </div>
            <h3 className="text-white text-2xl font-medium mb-2">@occulted</h3>
            <p className="text-gray-400 text-sm">Connect on Instagram</p>
          </a>

          {/* Contact Info */}
          <div className="bg-black border border-gray-800 p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <p className="text-white">contact@fuser.ai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-gray-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-500 text-sm mb-1">Location</p>
                  <p className="text-white">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black border border-gray-800 px-8 py-6">
            <p className="text-gray-500 text-sm mb-2">Curated & Led by</p>
            <h3 className="text-white text-2xl font-bold mb-1">Ikaro Cavalcante (occulted)</h3>
            <p className="text-gray-400 text-sm">Digital Artist & Curator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
