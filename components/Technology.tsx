import React from 'react';
import { BeakerIcon, ShieldCheckIcon, SparklesIcon } from './Icons';

const HowItWorksStep: React.FC<{ icon: React.ReactNode; step: string; title: string; children: React.ReactNode }> = ({ icon, step, title, children }) => (
    <div className="flex">
        <div className="flex-shrink-0 mr-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-green-light text-white">
                {icon}
            </div>
        </div>
        <div>
            <p className="text-sm font-bold text-brand-green-light tracking-wider uppercase">{step}</p>
            <h4 className="text-xl font-bold text-brand-green-dark mt-1">{title}</h4>
            <p className="mt-2 text-brand-gray">{children}</p>
        </div>
    </div>
);


const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-20 bg-brand-off-white text-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl">
            A 3-Step Revolution in Crop Nutrition
          </p>
          <p className="mt-4 max-w-3xl text-xl text-brand-gray lg:mx-auto">
            Our patented technology simplifies application while maximizing nutrient uptake and soil health.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
                <HowItWorksStep
                    icon={<BeakerIcon className="h-8 w-8"/>}
                    step="Step 1"
                    title="Nano-Colloidal Formulation"
                >
                    Our liquid solution is engineered at a nano level, creating ultra-small particles that are instantly water-soluble for easy application via any irrigation or spray system.
                </HowItWorksStep>
                <HowItWorksStep
                    icon={<ShieldCheckIcon className="h-8 w-8"/>}
                    step="Step 2"
                    title="Hyper-Efficient Absorption"
                >
                    The nano-sized nutrients bypass conventional absorption barriers, allowing crops to absorb over 95% of the nutrition directly through leaves and roots for rapid growth.
                </HowItWorksStep>
                 <HowItWorksStep
                    icon={<SparklesIcon className="h-8 w-8"/>}
                    step="Step 3"
                    title="Soil Revitalization"
                >
                    Unlike chemical fertilizers that degrade soil, our formula neutralizes pH, resolves salinity, and improves soil structure, creating a healthier foundation for future crops.
                </HowItWorksStep>
            </div>
            <div>
                <img className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1579532582937-16c108930bf0?q=80&w=2574&auto=format&fit=crop" alt="Scientist examining a plant in a high-tech lab" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;