import React from 'react';

const Deliverables = () => {
  const items = [
    {
      number: '01',
      title: 'CURATED EXPERIENCE',
      description: 'Private workshop for 6 selected artists aligned with AI, fashion, and contemporary art practices.'
    },
    {
      number: '02',
      title: 'CREATIVE OUTPUTS',
      description: 'Each participant develops original artwork using Fuser workflows during the session.'
    },
    {
      number: '03',
      title: 'SOCIAL AMPLIFICATION PACKAGE',
      description: 'Structured incentive model including participation fee, platform credits, and bonuses for Stories and Feed publications.'
    },
    {
      number: '04',
      title: 'VISUAL DOCUMENTATION',
      description: 'High-resolution photographic documentation delivered post-event for all participants and Fuser.'
    },
    {
      number: '05',
      title: 'STRATEGIC CONTENT ASSETS',
      description: 'Generated visual material suitable for Fuser marketing campaigns, case study publication, and community growth initiatives.'
    }
  ];

  return (
    <section id="deliverables" className="relative bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-12 font-light">03 / COMPONENTS</p>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            DELIVERABLES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-black mb-16">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-10 border-l-2 border-black"
            >
              <div className="mb-6">
                <span className="text-6xl font-bold text-gray-200">
                  {item.number}
                </span>
              </div>
              
              <h3 className="text-black text-sm font-medium mb-4 uppercase tracking-wide">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
          
          {/* Empty cell for grid balance */}
          <div className="bg-white p-10 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-black">
          <div className="bg-white p-10 text-center">
            <div className="text-6xl font-bold text-black mb-3">6</div>
            <div className="text-gray-600 text-xs uppercase tracking-wider font-light">CURATED ARTISTS</div>
          </div>
          <div className="bg-white p-10 text-center">
            <div className="text-6xl font-bold text-black mb-3">3–4h</div>
            <div className="text-gray-600 text-xs uppercase tracking-wider font-light">WORKSHOP DURATION</div>
          </div>
          <div className="bg-white p-10 text-center">
            <div className="text-6xl font-bold text-black mb-3">100%</div>
            <div className="text-gray-600 text-xs uppercase tracking-wider font-light">USAGE RIGHTS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
