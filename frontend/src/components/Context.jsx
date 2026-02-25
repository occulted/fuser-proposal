import React from 'react';

const Context = () => {
  return (
    <section id="context" className="relative bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">01 / Overview</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Context & Proposal
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed text-lg">
              Fuser expands its international presence through a curated AI workshop experience designed to connect platform innovation with leading artists operating at the intersection of AI, fashion, and contemporary art.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This format prioritizes <span className="text-white font-medium">depth over scale</span>. Six selected artists participate in an immersive, high-level session focused on advanced workflow exploration, platform experimentation, and strategic social amplification.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-800 pl-6">
              <h3 className="text-white font-medium mb-3">Strategic Positioning</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The initiative is positioned not only as an educational activation, but as a structured content engine capable of generating high-quality artistic outputs, authentic platform integration, and long-term positioning within the São Paulo creative community.
              </p>
            </div>

            <div className="border-l-2 border-gray-800 pl-6">
              <h3 className="text-white font-medium mb-3">Workshop Functions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The workshop operates simultaneously as a creative lab, a content production environment, and a strategic market expansion initiative.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <h4 className="text-white text-sm font-medium mb-2">High-Quality Outputs</h4>
            <p className="text-gray-500 text-xs">Artistic works created using Fuser platform</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <h4 className="text-white text-sm font-medium mb-2">Platform Integration</h4>
            <p className="text-gray-500 text-xs">Authentic integration within artists' ecosystems</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <h4 className="text-white text-sm font-medium mb-2">Visual Documentation</h4>
            <p className="text-gray-500 text-xs">Professional photography and content capture</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <h4 className="text-white text-sm font-medium mb-2">Social Visibility</h4>
            <p className="text-gray-500 text-xs">Coordinated amplification across platforms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;
