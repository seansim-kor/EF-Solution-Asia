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
    heading: 'Unlock the Full Potential of Every Acre.',
    subheading: 'Precision Agriculture. Maximum Yield.',
    paragraph: "Leverage our nano-colloidal technology to deliver nutrients with over 95% efficiency. Boost yields, cut costs, and build a sustainable future for your farm."
  },
  {
    heading: 'The Future of Farming is Here.',
    subheading: 'Intelligent Nutrition. Healthier Soil.',
    paragraph: "Move beyond conventional fertilizers. Our patented solution revitalizes soil, enhances crop immunity, and removes harmful residues for safer, higher-quality produce."
  },
  {
    heading: 'Drive Profitability and Sustainability.',
    subheading: 'Less Waste. More Growth.',
    paragraph: "Reduce fertilizer costs by 50% and increase yields by up to 40%. Join growers across Asia who are building more profitable and resilient farms with EF Solution."
  }
];

const videoSources = [
  'https://github.com/seansim-kor/EF-Solution-Asia/raw/main/main1.mp4',
  'https://github.com/seansim-kor/EF-Solution-Asia/raw/main/main2.mp4',
  'https://github.com/seansim-kor/EF-Solution-Asia/raw/main/main3.mp4',
];


const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center text-white bg-gray-800 overflow-hidden">
      <video
        key={currentVideoIndex}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        poster="https://images.unsplash.com/photo-1621926943445-5601d5bba696?q=80&w=2874&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover brightness-[1.2]"
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-brand-dark opacity-60"></div>
      
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
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-green-dark transition-all transform hover:scale-105"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;