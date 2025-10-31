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

  // Handle auto-slide with video duration
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videoSources.map((src, index) => (
          <video
            key={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-3xl">
          {heroContents.map((content, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {content.heading}
              </h1>
              <p className="text-2xl md:text-3xl mb-6 font-light">
                {content.subheading}
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                {content.paragraph}
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroContents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
