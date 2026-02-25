import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xl font-bold tracking-tight">FUSER</span>
            <span className="text-gray-600 text-sm">AI Workshop</span>
          </div>

          <div className="flex items-center space-x-8 text-sm text-gray-500">
            <span>São Paulo Activation</span>
            <span className="hidden md:inline">•</span>
            <span>Curated Artists Edition</span>
          </div>

          <div className="text-gray-500 text-sm">
            © 2025 Fuser. All rights reserved.
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-xs">
            Proposal validity: 30 days | Timeline: 3-5 weeks from approval
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
