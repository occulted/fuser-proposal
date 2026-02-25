import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Investment = () => {
  const [showReduced, setShowReduced] = useState(false);

  const productionCosts = [
    { item: 'Venue rental', cost: 'USD 1,500' },
    { item: 'Photographer', cost: 'USD 500' },
    { item: 'Projector rental', cost: 'USD 180' },
    { item: 'Production assistant', cost: 'USD 200' },
    { item: 'Coffee & snacks', cost: 'USD 100' }
  ];

  const artistIncentives = [
    { item: 'Participation fee (6 artists × USD 100)', cost: 'USD 600' },
    { item: 'Platform credits (6 artists × USD 150)', cost: 'USD 900' },
    { item: 'Stories bonus (6 artists × USD 25)', cost: 'USD 150' },
    { item: 'Feed bonus (6 artists × USD 100)', cost: 'USD 600' }
  ];

  return (
    <section id="investment" className="relative bg-black py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-12 font-light">04 / INVESTMENT</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            TOTAL
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-gray-700 tracking-tight">
            INVESTMENT
          </h3>
        </div>

        <div className="space-y-px bg-white mb-16">
          {/* Production Costs */}
          <div className="bg-black border-l-2 border-white p-10">
            <h3 className="text-white text-sm font-medium mb-8 uppercase tracking-wide">PRODUCTION</h3>
            <div className="space-y-4">
              {productionCosts.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm font-light">{item.item}</span>
                  <span className="text-white font-light">{item.cost}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-6">
                <span className="text-white font-medium text-sm uppercase tracking-wide">Production Subtotal</span>
                <span className="text-white text-2xl font-bold">USD 2,480</span>
              </div>
            </div>
          </div>

          {/* Facilitator */}
          <div className="bg-black border-l-2 border-white p-10">
            <h3 className="text-white text-sm font-medium mb-8 uppercase tracking-wide">FACILITATOR</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm font-light">Workshop leadership, preparation, and artist curation</span>
              <span className="text-white text-2xl font-bold">USD 1,650</span>
            </div>
          </div>

          {/* Artist Incentives */}
          <div className="bg-black border-l-2 border-white p-10">
            <h3 className="text-white text-sm font-medium mb-8 uppercase tracking-wide">ARTIST INCENTIVES (6 ARTISTS)</h3>
            <div className="space-y-4">
              {artistIncentives.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm font-light">{item.item}</span>
                  <span className="text-white font-light">{item.cost}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-6">
                <span className="text-white font-medium text-sm uppercase tracking-wide">Incentives Subtotal</span>
                <span className="text-white text-2xl font-bold">USD 2,250</span>
              </div>
            </div>
          </div>
        </div>

        {/* Total Investment */}
        <div className="border-4 border-white p-12 mb-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-white text-2xl font-bold uppercase tracking-wide">TOTAL FULL INVESTMENT</span>
            <span className="text-white text-6xl font-bold">USD 6,380</span>
          </div>
          <p className="text-gray-400 text-sm font-light">
            Complete package including production, facilitation, and full social amplification bonuses.
          </p>
        </div>

        {/* Reduced Package Toggle */}
        <button 
          onClick={() => setShowReduced(!showReduced)}
          className="w-full bg-black border-2 border-white p-8 flex items-center justify-between"
        >
          <span className="text-white font-medium uppercase tracking-wide text-sm">OPTIONAL REDUCED PACKAGE</span>
          {showReduced ? 
            <ChevronUp className="text-white" size={20} /> : 
            <ChevronDown className="text-white" size={20} />
          }
        </button>

        {showReduced && (
          <div className="bg-black border-2 border-t-0 border-white p-8">
            <p className="text-gray-400 mb-6 font-light text-sm">Excluding social posting bonuses (Stories and Feed)</p>
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-medium uppercase tracking-wide">REDUCED PACKAGE TOTAL</span>
              <span className="text-white text-2xl font-bold">USD 5,630</span>
            </div>
          </div>
        )}

        {/* Payment Terms */}
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-white">
          <div className="bg-black border-l-2 border-white p-8">
            <h4 className="text-white font-medium mb-3 uppercase tracking-wide text-xs">PAYMENT TERMS</h4>
            <p className="text-gray-400 text-sm font-light">50% upon approval<br />50% upon delivery</p>
          </div>
          <div className="bg-black border-l-2 border-white p-8">
            <h4 className="text-white font-medium mb-3 uppercase tracking-wide text-xs">TIMELINE</h4>
            <p className="text-gray-400 text-sm font-light">3–5 weeks from approval</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
