import React from 'react';

const Context = () => {
  return (
    <section id="context" className="relative bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-12 font-light">01 / OVERVIEW</p>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-16 tracking-tight">
            CONTEXT &
            <br />
            PROPOSAL
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-black text-lg leading-relaxed font-light mb-6">
              Fuser expands its international presence through a curated AI workshop experience designed to connect platform innovation with leading artists operating at the intersection of AI, fashion, and contemporary art.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              This format prioritizes depth over scale. Six selected artists participate in an immersive, high-level session focused on advanced workflow exploration, platform experimentation, and strategic social amplification.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-l-2 border-black pl-8">
              <h3 className="text-black font-medium mb-4 tracking-wide uppercase text-sm">Strategic Positioning</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                The initiative is positioned not only as an educational activation, but as a structured content engine capable of generating high-quality artistic outputs, authentic platform integration, and long-term positioning within the São Paulo creative community.
              </p>
            </div>

            <div className="border-l-2 border-black pl-8">
              <h3 className="text-black font-medium mb-4 tracking-wide uppercase text-sm">Workshop Functions</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                The workshop operates simultaneously as a creative lab, a content production environment, and a strategic market expansion initiative.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black">
          <div className="bg-white p-8">
            <p className="text-black text-sm font-medium mb-2 uppercase tracking-wide">High-Quality Outputs</p>
            <p className="text-gray-600 text-xs font-light">Artistic works created using Fuser platform</p>
          </div>
          <div className="bg-white p-8">
            <p className="text-black text-sm font-medium mb-2 uppercase tracking-wide">Platform Integration</p>
            <p className="text-gray-600 text-xs font-light">Authentic integration within artists' ecosystems</p>
          </div>
          <div className="bg-white p-8">
            <p className="text-black text-sm font-medium mb-2 uppercase tracking-wide">Visual Documentation</p>
            <p className="text-gray-600 text-xs font-light">Professional photography and content capture</p>
          </div>
          <div className="bg-white p-8">
            <p className="text-black text-sm font-medium mb-2 uppercase tracking-wide">Social Visibility</p>
            <p className="text-gray-600 text-xs font-light">Coordinated amplification across platforms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Context;
