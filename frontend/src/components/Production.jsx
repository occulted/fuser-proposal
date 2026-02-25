import React from 'react';
import { Lightbulb, Camera, Users, Share2, Video, Sparkles } from 'lucide-react';

const Production = () => {
  const specifications = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Visual Environment',
      description: 'Gallery space with controlled lighting, projection setup, and immersive layout suitable for AI-based visual demonstrations.'
    },
    {
      icon: <Users size={24} />,
      title: 'Guided Interaction',
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
      icon: <Camera size={24} />,
      title: 'Professional Documentation',
      description: '3–4 hours of photography coverage with edited image delivery for Fuser and participating artists.',
      details: [
        'Commercial usage rights for brand communication'
      ]
    },
    {
      icon: <Share2 size={24} />,
      title: 'Social Strategy',
      description: 'Structured incentive system designed to stimulate Instagram Stories and Feed posts featuring workshop outputs.',
      details: [
        'Instagram Stories tagging Fuser',
        'Feed posts with workshop outputs',
        'Coordinated posting window'
      ]
    },
    {
      icon: <Video size={24} />,
      title: 'Technical Infrastructure',
      description: 'Professional projector rental, production assistant, and basic hospitality including coffee and light catering.'
    }
  ];

  return (
    <section id="production" className="relative bg-gradient-to-b from-black via-gray-900/30 to-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">02 / Specifications</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Production
            <br />
            <span className="text-gray-600">Specifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Comprehensive setup designed for immersive creative experience and professional content generation.
          </p>
        </div>

        <div className="space-y-6">
          {specifications.map((spec, index) => (
            <div 
              key={index}
              className="group bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300 p-8 hover:bg-gray-900/30"
            >
              <div className="flex items-start space-x-6">
                <div className="text-gray-500 group-hover:text-white transition-colors flex-shrink-0">
                  {spec.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-medium mb-3">{spec.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{spec.description}</p>
                  {spec.details && (
                    <ul className="space-y-2">
                      {spec.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-500 text-sm flex items-center space-x-2">
                          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-white/5 to-transparent border border-gray-800 p-8">
          <div className="flex items-start space-x-4">
            <Sparkles className="text-white flex-shrink-0" size={24} />
            <div>
              <h3 className="text-white text-lg font-medium mb-2">Workshop Leader</h3>
              <p className="text-gray-400 text-sm">
                <span className="text-white font-medium">Ikaro Cavalcante (occulted)</span> leads the session with expertise in AI workflow optimization, prompt engineering, and artistic integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
