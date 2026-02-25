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
    <section id="investment" className="relative bg-gradient-to-b from-black via-gray-900/20 to-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">04 / Investment</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Total Investment
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Curated Workshop — Full Package
          </p>
        </div>

        <div className="space-y-8">
          {/* Production Costs */}
          <div className="bg-black border border-gray-800 p-8">
            <h3 className="text-white text-xl font-medium mb-6">Production</h3>
            <div className="space-y-4">
              {productionCosts.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-900">
                  <span className="text-gray-400 text-sm">{item.item}</span>
                  <span className="text-white font-medium">{item.cost}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-4">
                <span className="text-white font-medium">Production Subtotal</span>
                <span className="text-white text-xl font-bold">USD 2,480</span>
              </div>
            </div>
          </div>

          {/* Facilitator */}
          <div className="bg-black border border-gray-800 p-8">
            <h3 className="text-white text-xl font-medium mb-6">Facilitator</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Workshop leadership, preparation, and artist curation</span>
              <span className="text-white text-xl font-bold">USD 1,650</span>
            </div>
          </div>

          {/* Artist Incentives */}
          <div className="bg-black border border-gray-800 p-8">
            <h3 className="text-white text-xl font-medium mb-6">Artist Incentives (6 Artists)</h3>
            <div className="space-y-4">
              {artistIncentives.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-900">
                  <span className="text-gray-400 text-sm">{item.item}</span>
                  <span className="text-white font-medium">{item.cost}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-4">
                <span className="text-white font-medium">Incentives Subtotal</span>
                <span className="text-white text-xl font-bold">USD 2,250</span>
              </div>
            </div>
          </div>

          {/* Total Investment */}
          <div className="bg-gradient-to-br from-white/10 to-transparent border-2 border-white/20 p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-2xl font-bold">TOTAL FULL INVESTMENT</span>
              <span className="text-white text-4xl font-bold">USD 6,380</span>
            </div>
            <p className="text-gray-400 text-sm">
              Complete package including production, facilitation, and full social amplification bonuses.
            </p>
          </div>

          {/* Reduced Package Toggle */}
          <button 
            onClick={() => setShowReduced(!showReduced)}
            className="w-full bg-black border border-gray-800 p-6 hover:border-gray-600 transition-colors flex items-center justify-between group"
          >
            <span className="text-white font-medium">Optional Reduced Package</span>
            {showReduced ? 
              <ChevronUp className="text-gray-500 group-hover:text-white transition-colors" size={20} /> : 
              <ChevronDown className="text-gray-500 group-hover:text-white transition-colors" size={20} />
            }
          </button>

          {showReduced && (
            <div className="bg-black border border-gray-800 p-8 animate-accordion-down">
              <p className="text-gray-400 mb-4">Excluding social posting bonuses (Stories and Feed)</p>
              <div className="flex items-center justify-between">
                <span className="text-white text-xl font-medium">Reduced Package Total</span>
                <span className="text-white text-3xl font-bold">USD 5,630</span>
              </div>
            </div>
          )}
        </div>

        {/* Payment Terms */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-black border border-gray-800 p-6">
            <h4 className="text-white font-medium mb-2">Payment Terms</h4>
            <p className="text-gray-400 text-sm">50% upon approval<br />50% upon delivery</p>
          </div>
          <div className="bg-black border border-gray-800 p-6">
            <h4 className="text-white font-medium mb-2">Timeline</h4>
            <p className="text-gray-400 text-sm">3–5 weeks from approval</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
