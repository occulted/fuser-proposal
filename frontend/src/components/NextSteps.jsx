import React from 'react';
import { ArrowRight } from 'lucide-react';

const NextSteps = () => {
  const steps = [
    'Alignment call with Fuser team',
    'Confirmation of package format (Full or Reduced)',
    'Development of artist shortlist',
    'Venue and vendor booking',
    'Pre-event communication strategy',
    'Workshop execution',
    'Post-event reporting and asset delivery'
  ];

  return (
    <section className="relative bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">05 / Process</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Next Steps
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Estimated timeline: 3–5 weeks from approval
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group bg-black border border-gray-800 hover:border-white/20 p-6 transition-all duration-300 hover:bg-gray-900/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <span className="text-3xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white text-lg">{step}</span>
                </div>
                <ArrowRight className="text-gray-700 group-hover:text-white transition-colors" size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 p-8">
          <h3 className="text-white text-xl font-medium mb-6">Terms & Conditions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-gray-500 mb-2">Proposal validity</p>
              <p className="text-white">30 days from submission</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Payment terms</p>
              <p className="text-white">50% upon approval / 50% upon delivery</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Artist bonuses</p>
              <p className="text-white">Released after verified publication</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Platform credits</p>
              <p className="text-white">Issued directly to participant accounts</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 mb-2">Usage rights</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fuser retains marketing and communication usage rights for all content generated during the workshop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
