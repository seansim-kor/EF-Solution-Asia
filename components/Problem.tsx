import React from 'react';
import { GlobeAltIcon, ArrowTrendingDownIcon, ExclamationTriangleIcon } from './Icons';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white text-center mb-2">{title}</h3>
        <p className="text-brand-light-gray text-center">{children}</p>
    </div>
);

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">The Challenge</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Modern Agriculture is at a Crossroads</p>
            <p className="mt-4 max-w-2xl text-xl text-brand-light-gray mx-auto">Inefficiencies, environmental pressures, and rising costs threaten global food security. A smarter approach is needed.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ProblemCard icon={<ArrowTrendingDownIcon className="h-12 w-12 text-brand-green-light" />} title="Yield Inefficiency">
                Conventional fertilizers have reached their limit, with up to 80% of nutrients never reaching the plant, leading to waste and stagnant yields.
            </ProblemCard>
            <ProblemCard icon={<GlobeAltIcon className="h-12 w-12 text-brand-green-light" />} title="Soil Degradation">
                Decades of chemical overuse have led to acidic, saline, and depleted soils that struggle to support healthy crops and are vulnerable to erosion.
            </ProblemCard>
            <ProblemCard icon={<ExclamationTriangleIcon className="h-12 w-12 text-brand-green-light" />} title="Environmental Concerns">
                Chemical runoff pollutes waterways, harms ecosystems, and leaves harmful residues on crops, impacting consumer health and safety.
            </ProblemCard>
        </div>
      </div>
    </section>
  );
};

export default Problem;
