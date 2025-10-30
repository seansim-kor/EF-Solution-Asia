import React from 'react';
import { SparklesIcon, ScaleIcon, ShieldCheckIcon, TrashIcon, CurrencyDollarIcon, HeartIcon } from './Icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-300">
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 h-10 w-10 text-brand-green-light">{icon}</div>
      <h3 className="ml-4 text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-brand-light-gray">{children}</p>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">
            Multi-Functional Solutions
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            An All-in-One Platform for Farm Health
          </p>
          <p className="mt-4 max-w-2xl text-xl text-brand-light-gray mx-auto">
            "Perfect Solution" is more than a fertilizer; it's an integrated agent that addresses your farm's complete needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<SparklesIcon />} title="Compound Fertilizer">
            Contains 13 concentrated plant growth factors (N, P, K, Ca, Mg, B, S, etc.) for comprehensive nutrition.
          </FeatureCard>
          <FeatureCard icon={<ScaleIcon />} title="Powerful Soil Conditioner">
            Neutralizes acidic/alkaline soil and resolves salinity accumulation and salt stress in just one day.
          </FeatureCard>
          <FeatureCard icon={<ShieldCheckIcon />} title="Enhanced Crop Immunity">
            Improves quality (sugar content, size, freshness) and provides sterilizing/pesticide effects.
          </FeatureCard>
          <FeatureCard icon={<TrashIcon />} title="Pesticide Residue Removal">
            Efficiently removes over 99% of harmful pesticide residues from crops, ensuring safer produce.
          </FeatureCard>
          <FeatureCard icon={<CurrencyDollarIcon />} title="Economic Advantage">
            High concentration allows 1L to cover 5,000 sq. meters, saving 50% of conventional chemical fertilizer costs.
          </FeatureCard>
          <FeatureCard icon={<HeartIcon />} title="Eco-Friendly & Water Soluble">
            Our nano-colloidal formula is highly water-soluble for easy application and environmentally neutral.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Solutions;