import React from 'react';

const Production = () => {
  const specifications = [
    {
      title: 'VISUAL ENVIRONMENT',
      description: 'Gallery space with controlled lighting, projection setup, and immersive layout suitable for AI-based visual demonstrations.'
    },
    {
      title: 'GUIDED INTERACTION',
      description: 'Advanced workflow session led by Ikaro Cavalcante (occulted), including platform deep dive, prompt engineering methodology, and real-time creation sessions.',
      details: [
        'Platform deep dive',
        'Prompt engineering methodology',
        'AI and artistic authorship integration',
        'Real-time creation session',
        'Individual artist mentoring'
      ]
    },
    {
      title: 'PROFESSIONAL DOCUMENTATION',
      description: '3–4 hours of photography coverage with edited image delivery for Fuser and participating artists.',
      details: [
        'Commercial usage rights for brand communication'
      ]
    },
    {
      title: 'SOCIAL STRATEGY',
      description: 'Structured incentive system designed to stimulate Instagram Stories and Feed posts featuring workshop outputs.',
      details: [
        'Instagram Stories tagging Fuser',
        'Feed posts with workshop outputs',
        'Coordinated posting window'
      ]
    },
    {
      title: 'TECHNICAL INFRASTRUCTURE',
      description: 'Professional projector rental, production assistant, and basic hospitality including coffee and light catering.'
    }
  ];

  return (
    <section id="production" className="relative bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-12 font-light">02 / SPECIFICATIONS</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            PRODUCTION
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-gray-700 tracking-tight">
            SPECIFICATIONS
          </h3>
        </div>

        <div className="space-y-px bg-white">
          {specifications.map((spec, index) => (
            <div 
              key={index}
              className="bg-black p-10 border-l-2 border-white"
            >
              <h3 className="text-white text-sm font-medium mb-4 uppercase tracking-wide">{spec.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light mb-4">{spec.description}</p>
              {spec.details && (
                <ul className="space-y-2 mt-6">
                  {spec.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-500 text-sm flex items-start space-x-3 font-light">
                      <span className="text-white mt-1.5">+</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-white p-10">
          <p className="text-gray-500 text-xs uppercase tracking-wider font-light mb-3">WORKSHOP LEADER</p>
          <p className="text-white text-lg font-light">
            <span className="font-medium">Ikaro Cavalcante (occulted)</span> leads the session with expertise in AI workflow optimization, prompt engineering, and artistic integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Production;
