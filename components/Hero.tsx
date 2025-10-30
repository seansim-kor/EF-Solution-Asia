import React, { useState, useEffect } from 'react';

// Define the structure for our hero content
interface HeroContent {
  heading: string;
  subheading: string;
  paragraph: string;
}

// Array of content to cycle through
const heroContents: HeroContent[] = [
  {
    heading: 'Cultivating a Greener Future, Together.',
    subheading: 'High-Performance Agriculture. Sustainable Results.',
    paragraph: "Discover how EF Solution Asia's advanced nano-technology revitalizes soil, boosts yields by up to 40%, and reduces fertilizer costs by 50%—pioneering a new era of eco-friendly farming."
  },
  {
    heading: 'Revolutionizing Soil Health.',
    subheading: 'Nano-Colloidal Technology. Maximum Absorption.',
    paragraph: "Our patented Organic-Inorganic Hybrid Technology ensures over 95% nutrient absorption, fundamentally improving soil structure and paving the way for healthier, more resilient crops."
  },
  {
    heading: 'Economic Growth Through Eco-Innovation.',
    subheading: 'Increase Yields. Decrease Costs.',
    paragraph: "Partner with us to unlock your farm's full potential. Verified case studies show a 25-40% yield increase while cutting conventional fertilizer costs in half."
  },
  {
    heading: "'Perfect Solution': Innovative Liquid Fertilizer",
    subheading: "The All-in-One Answer for Modern Farming.",
    paragraph: "Our flagship product delivers comprehensive nutrition, conditions soil, and enhances crop immunity, all in one highly-concentrated, eco-friendly formula. Simplify your process, maximize your results."
  }
];


const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
        setIsFading(false); // Start fade-in after content update
      }, 500); // This duration should match the fade-out transition duration
    }, 7000); // Change content every 7 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const { heading, subheading, paragraph } = heroContents[currentIndex];

  return (
    <section id="hero" className="relative h-screen flex items-center text-white bg-gray-800 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto-format&fit=crop"
        alt="Lush green rice paddies bordering a dense, healthy forest, representing sustainable agriculture"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-green-dark opacity-60"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <div className="min-h-[400px] md:min-h-[450px]">
            <div key={currentIndex}>
              <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100 delay-100'}`}>
                {heading}
              </h1>
              <p className={`text-3xl md:text-4xl font-bold text-brand-green-light mb-8 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100 delay-200'}`}>
                {subheading}
              </p>
              <p className={`max-w-3xl text-lg text-gray-200 mb-12 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100 delay-300'}`}>
                {paragraph}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <a
              href="#solutions"
              className="w-full sm:w-auto bg-brand-green-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-green transition-all transform hover:scale-105 shadow-lg"
            >
              Explore High-Efficiency Solutions
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-green-dark transition-all transform hover:scale-105"
            >
              Inquire About Regional Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;