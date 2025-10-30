import React from 'react';
import { BeakerIcon, DocumentTextIcon, ShieldCheckIcon } from './Icons';

interface BarProps {
  label: string;
  percentage: number;
  color: string;
}

const AbsorptionBar: React.FC<BarProps> = ({ label, percentage, color }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-1">
      <span className="text-base font-medium text-brand-gray">{label}</span>
      <span className={`text-sm font-bold ${color.replace('bg-', 'text-')}`}>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className={`${color} h-4 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">
            Innovative Core Technology
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl">
            The Nano-Colloidal Advantage
          </p>
          <p className="mt-4 max-w-3xl text-xl text-brand-gray lg:mx-auto">
            Our Organic-Inorganic Hybrid Technology is a paradigm shift in crop nutrition and soil health.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
             <div className="flex">
                <ShieldCheckIcon className="flex-shrink-0 h-8 w-8 text-brand-green-light" />
                <div className="ml-4">
                    <h4 className="text-lg font-bold text-brand-green-dark">Superior Absorption</h4>
                    <p className="mt-1 text-brand-gray">Unique organic and inorganic hybrid structural coupling enables crop nutrient absorption rates of 95% or higher.</p>
                </div>
            </div>
             <div className="flex">
                <DocumentTextIcon className="flex-shrink-0 h-8 w-8 text-brand-green-light" />
                <div className="ml-4">
                    <h4 className="text-lg font-bold text-brand-green-dark">Patented Soil Improvement</h4>
                    <p className="mt-1 text-brand-gray">Our technology for manufacturing ionized calcium solutions (Patent No. 10-1838075) fundamentally improves soil structure and health.</p>
                </div>
            </div>
             <div className="flex">
                <BeakerIcon className="flex-shrink-0 h-8 w-8 text-brand-green-light" />
                <div className="ml-4">
                    <h4 className="text-lg font-bold text-brand-green-dark">Advanced Formulation</h4>
                    <p className="mt-1 text-brand-gray">An eco-friendly, highly concentrated, water-soluble nano colloidal solution with a neutral pH of 6-7.</p>
                </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-brand-green-dark mb-6 text-center">Nutrient Absorption Comparison</h3>
            <div className="space-y-6">
              <AbsorptionBar label="Perfect Solution" percentage={95} color="bg-brand-green-light" />
              <AbsorptionBar label="Foreign Liquid Fertilizers" percentage={35} color="bg-yellow-500" />
              <AbsorptionBar label="Traditional Solid Fertilizers" percentage={20} color="bg-red-500" />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <a href="#" className="inline-block bg-brand-green text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-green-dark transition-all transform hover:scale-105 shadow-md">
                Download Technical White Paper (The 95% Difference)
            </a>
        </div>
      </div>
    </section>
  );
};

export default Technology;
