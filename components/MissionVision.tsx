import React from 'react';
import { LeafIcon } from './Icons';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">
            Our Commitment
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl">
            Sustainable Stewardship
          </p>
          <p className="mt-4 max-w-2xl text-xl text-brand-gray lg:mx-auto">
            EF Solution is committed to building the foundation for sustainable agriculture and food security for generations to come.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green-light text-white">
                  <LeafIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-brand-green-dark">Respect for Nature</h3>
                <p className="mt-2 text-base text-brand-gray">
                  We respect the natural world, curbing the reckless use of agricultural chemicals and excessive chemical fertilizers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green-light text-white">
                    <LeafIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-brand-green-dark">Soil Purification</h3>
                <p className="mt-2 text-base text-brand-gray">
                  We strive to purify contaminated soil, restoring its health and vitality for future crops.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-green-light text-white">
                  <LeafIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-brand-green-dark">Farmer Prosperity</h3>
                <p className="mt-2 text-base text-brand-gray">
                  We aim to enhance the quality of life and income for farmers by creating highly enriched fertilizers suitable for all forms of agriculture.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
              <img className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" alt="Hands holding a small plant, symbolizing respect for nature"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;