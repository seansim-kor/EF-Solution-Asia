import React from 'react';
import { HeartIcon } from './Icons';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">
            Eco-Commitment
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl">
            Responsible Agriculture for Soil and People
          </p>
          <p className="mt-4 text-xl text-brand-gray">
            Our products are engineered to be as safe for the environment as they are effective for your crops.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <HeartIcon className="flex-shrink-0 h-6 w-6 text-brand-green-light" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-brand-green-dark">Environmentally Neutral</h4>
                <p className="text-brand-gray">With a neutral pH of 6-7, our solution poses no harm to water, soil, or human health, minimizing environmental pollution.</p>
              </div>
            </li>
            <li className="flex items-start">
               <HeartIcon className="flex-shrink-0 h-6 w-6 text-brand-green-light" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-brand-green-dark">Verified Safety</h4>
                <p className="text-brand-gray">Harmful heavy metals (Cr, Cd, Pb, Hg, As) are 'Not Detected' as verified by AT Analysis Center reports, ensuring your land and produce remain pure.</p>
              </div>
            </li>
          </ul>
          <div className="mt-10">
              <a href="#" className="inline-block bg-brand-green-light text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-green transition-all transform hover:scale-105 shadow-md">
                Join Our Sustainable Partnership Program
              </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
            <img className="rounded-lg shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1974&auto=format&fit=crop" alt="A person holding a healthy potted plant, representing eco-friendly agriculture" />
        </div>
      </div>
    </section>
  );
};

export default Sustainability;