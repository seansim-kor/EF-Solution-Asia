import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; role: string; imgSrc: string; }> = ({ quote, name, role, imgSrc }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
        <img src={imgSrc} alt={name} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-brand-green-light/50" />
        <p className="text-brand-gray italic mb-6">"{quote}"</p>
        <p className="font-bold text-brand-green-dark">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-brand-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase">Real-World Impact</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl">Trusted by Growers Across Asia</p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    <TestimonialCard 
                        quote="We saw a 42% yield increase in our Annam rice paddies after switching. The cost savings on fertilizer were just a bonus. It's a revolutionary product."
                        name="Minh Nguyen"
                        role="Rice Farmer, Vietnam"
                        imgSrc="/avatar-farmer-vietnam.jpg"
                    />
                    <TestimonialCard 
                        quote="Our cotton quality has never been better. The soil health has visibly improved, and we've cut our chemical fertilizer usage by more than half. I highly recommend it."
                        name="Li Wei"
                        role="Cotton Producer, Xinjiang, China"
                        imgSrc="/avatar-producer-china.jpg"
                    />
                    <TestimonialCard 
                        quote="As a large-scale palm oil producer, efficiency and sustainability are key. EF Solution delivers on both. Our trees are healthier, and our production costs are down 50%."
                        name="Ahmad bin Ishak"
                        role="Plantation Manager, Indonesia"
                        imgSrc="/avatar-manager-indonesia.jpg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;