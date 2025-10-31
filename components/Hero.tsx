import React, { useState, useEffect, useRef } from 'react';

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

// For best web compatibility, the video should be in .mp4 format.
const videoSource = '/EF_Asia_MV1.mp4';


const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Effect for cycling through text content
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTextFading(true); // Start text fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
        setIsTextFading(false); // Start text fade-in after content update
      }, 500); // This duration should match the text fade-out transition duration
    }, 7000); // Change content every 7 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  
  // Effect to programmatically play the video to bypass browser autoplay policies
  useEffect(() => {
    videoRef.current?.play().catch(error => {
      // Autoplay was prevented. This is common in browsers.
      // The video will be silent and should still play if muted.
      console.error("Video autoplay was prevented:", error);
    });
  }, []); // Run only once on component mount

  const { heading, subheading, paragraph } = heroContents[currentIndex];

  return (
    <section id="hero" className="relative h-screen flex items-center text-white bg-gray-800 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[1.2]"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-brand-dark opacity-60"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <div className="min-h-[400px] md:min-h-[450px]">
            <div key={currentIndex}>
              <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight transition-opacity duration-500 ${isTextFading ? 'opacity-0' : 'opacity-100 delay-100'}`}>
                {heading}
              </h1>
              <p className={`text-3xl md:text-4xl font-bold text-brand-green-light mb-8 transition-opacity duration-500 ${isTextFading ? 'opacity-0' : 'opacity-100 delay-200'}`}>
                {subheading}
              </p>
              <p className={`max-w-3xl text-lg text-gray-200 mb-12 transition-opacity duration-500 ${isTextFading ? 'opacity-0' : 'opacity-100 delay-300'}`}>
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