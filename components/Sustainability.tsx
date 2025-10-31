import React from 'react';
import { HeartIcon } from './Icons';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">
            Eco-Commitment
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Agriculture for a Healthier Planet
          </p>
          <p className="mt-4 text-xl text-brand-light-gray">
            Our products are engineered to be as safe for the environment as they are effective for your crops.
          </p>
          <ul className="mt-8 space-y-6">
            <li className="flex items-start">
              <HeartIcon className="flex-shrink-0 h-6 w-6 text-brand-green-light" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-white">Environmentally Neutral</h4>
                <p className="text-brand-light-gray">With a neutral pH of 6-7, our solution poses no harm to water, soil, or human health, minimizing environmental pollution.</p>
              </div>
            </li>
            <li className="flex items-start">
               <HeartIcon className="flex-shrink-0 h-6 w-6 text-brand-green-light" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-white">Verified Safety</h4>
                <p className="text-brand-light-gray">Harmful heavy metals are 'Not Detected' as verified by AT Analysis Center reports, ensuring your land and produce remain pure.</p>
              </div>
            </li>
          </ul>
          <div className="mt-10">
              <a href="#contact" className="inline-block bg-brand-green-light text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-green transition-all transform hover:scale-105 shadow-md">
                Join Our Sustainable Partnership
              </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
            <img className="rounded-lg shadow-xl w-full h-auto object-cover" src="/hands-holding-soil.jpg" alt="A person's hands holding rich soil with a small green sprout growing" />
        </div>
      </div>
    </section>
  );
};

export default Sustainability;