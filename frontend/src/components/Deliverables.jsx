import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Deliverables = () => {
  const items = [
    {
      number: '01',
      title: 'Curated Experience',
      description: 'Private workshop for 6 selected artists aligned with AI, fashion, and contemporary art practices.'
    },
    {
      number: '02',
      title: 'Creative Outputs',
      description: 'Each participant develops original artwork using Fuser workflows during the session.'
    },
    {
      number: '03',
      title: 'Social Amplification Package',
      description: 'Structured incentive model including participation fee, platform credits, and bonuses for Stories and Feed publications.'
    },
    {
      number: '04',
      title: 'Visual Documentation',
      description: 'High-resolution photographic documentation delivered post-event for all participants and Fuser.'
    },
    {
      number: '05',
      title: 'Strategic Content Assets',
      description: 'Generated visual material suitable for Fuser marketing campaigns, case study publication, and community growth initiatives.'
    }
  ];

  return (
    <section id="deliverables" className="relative bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">03 / Components</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Deliverables
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Comprehensive package designed for maximum creative and strategic impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                  {item.number}
                </span>
                <CheckCircle2 className="text-gray-700 group-hover:text-white transition-colors" size={20} />
              </div>
              
              <h3 className="text-white text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black border border-gray-800 p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-gray-500 text-sm">Curated Artists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">3-4h</div>
              <div className="text-gray-500 text-sm">Workshop Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-500 text-sm">Usage Rights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
