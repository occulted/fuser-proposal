import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-white border-t-2 border-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 mb-8">
          <div>
            <span className="text-black text-sm font-medium tracking-wider uppercase">FUSER STUDIO WORKSHOP</span>
          </div>

          <div className="flex items-center space-x-8 text-xs text-gray-600 uppercase tracking-wider font-light">
            <span>SÃO PAULO</span>
            <span>—</span>
            <span>CURATED EDITION</span>
          </div>

          <div className="text-gray-600 text-xs uppercase tracking-wider font-light">
            © 2025 IKARO CAVALCANTE
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs font-light">
            PROPOSAL VALIDITY: 30 DAYS  |  TIMELINE: 3-5 WEEKS FROM APPROVAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
