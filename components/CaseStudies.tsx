import React from 'react';
import { ChartBarIcon } from './Icons';

const StatCard: React.FC<{ value: string; label: string; description: string }> = ({ value, label, description }) => (
    <div className="bg-white shadow-lg p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 border border-gray-200">
        <p className="text-5xl font-extrabold text-brand-green-light">{value}</p>
        <p className="mt-2 text-xl font-bold text-brand-green-dark">{label}</p>
        <p className="mt-2 text-brand-gray">{description}</p>
    </div>
);

const CaseStudies: React.FC = () => {
    return (
        <section id="proof" className="py-20 bg-brand-off-white text-brand-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">
                        Global Proof & Case Studies
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl">
                        Verified Performance: Delivering Results
                    </p>
                </div>
                
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <StatCard value="25-40%" label="Yield Increase" description="Average increase across various crops and regions." />
                    <StatCard value="50%" label="Cost Reduction" description="Savings compared to conventional chemical fertilizers." />
                    <StatCard value="95%+" label="Nutrient Absorption" description="Ensuring maximum efficiency and minimal waste." />
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center text-brand-green-dark mb-10">Success Stories Across Asia</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-brand-green-dark">China: Cotton & Rice</h4>
                            <p className="mt-2 text-brand-gray">Proven results show a 40% yield increase in Xinjiang cotton and a 30% increase in Heilongjiang rice.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-brand-green-dark">Vietnam: Annam Rice</h4>
                            <p className="mt-2 text-brand-gray">Demonstrated an exceptional 42% yield increase, boosting local farmer income significantly.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-brand-green-dark">Palm Oil Plantations</h4>
                            <p className="mt-2 text-brand-gray">Successful application in Myanmar & Indonesia, enhancing tree immunity, improving soil, and cutting production costs by 50%.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a href="#" className="inline-flex items-center bg-white text-brand-green-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-md border border-gray-200">
                        <ChartBarIcon className="h-5 w-5 mr-3" />
                        View Detailed Field Test Reports
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;