import React from 'react';

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
    <section className="relative bg-white py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-12 font-light">05 / PROCESS</p>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            NEXT STEPS
          </h2>
          <p className="text-gray-600 font-light">
            Estimated timeline: 3–5 weeks from approval
          </p>
        </div>

        <div className="space-y-px bg-black">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 border-l-2 border-black flex items-center justify-between"
            >
              <div className="flex items-center space-x-8">
                <span className="text-5xl font-bold text-gray-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-black font-light">{step}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-black p-10">
          <h3 className="text-black text-xl font-medium mb-8 uppercase tracking-wide">TERMS & CONDITIONS</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs font-light">PROPOSAL VALIDITY</p>
              <p className="text-black font-light">30 days from submission</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs font-light">PAYMENT TERMS</p>
              <p className="text-black font-light">50% upon approval / 50% upon delivery</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs font-light">ARTIST BONUSES</p>
              <p className="text-black font-light">Released after verified publication</p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs font-light">PLATFORM CREDITS</p>
              <p className="text-black font-light">Issued directly to participant accounts</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs font-light">USAGE RIGHTS</p>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Fuser retains marketing and communication usage rights for all content generated during the workshop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
