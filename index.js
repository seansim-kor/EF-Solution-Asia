import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const LeafIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
  )
);

const BeakerIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.443 2.216a2 2 0 002.103 1.542a4.5 4.5 0 002.121-.355a4.5 4.5 0 002.121.355a4.5 4.5 0 002.121-.355a4.5 4.5 0 002.121.355a2 2 0 002.103-1.542l.443-2.216a2 2 0 00-.547-1.806z" })
  )
);

const SparklesIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l-2 2-2.828-2.828a1 1 0 010-1.414L7.464 7.464A1 1 0 018.88 7.172L18 10m-5-5l2 2m-2-2l-2 2" })
  )
);

const ScaleIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" })
  )
);

const ShieldCheckIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9-3.461 9 3.461A12.02 12.02 0 0020.618 5.984z" })
  )
);

const TrashIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" })
  )
);

const CurrencyDollarIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.667a1 1 0 01.62-.928l1.192-.663a1 1 0 00.58-1.85V3.333a1 1 0 00-1.22-.988l-3.064.957a1 1 0 00-.78 1.258v1.667" })
  )
);

const ChartBarIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" })
  )
);

const HeartIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" })
  )
);

const GlobeAltIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0012 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253m18.148-4.506A11.953 11.953 0 0012 10.5" })
  )
);

const ArrowTrendingDownIcon = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 18L9 11.25l4.286 4.286a11.948 11.948 0 004.306-6.43l.776-2.898m0 0l3.182 5.511m-3.182-5.511l-5.511 3.182" })
  )
);

const ExclamationTriangleIcon = (props) => (
    React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" })
    )
);


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#problem', label: 'The Challenge' },
    { href: '#technology', label: 'How It Works' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#proof', label: 'Results' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  return (
    React.createElement('header', { className: `sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg shadow-md border-b border-gray-800' : 'bg-transparent'}` },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "flex items-center justify-between h-20" },
          React.createElement('div', { className: "flex-shrink-0" },
            React.createElement('a', { href: "#hero", className: "text-2xl font-bold text-white" },
              "EF Solution Asia"
            )
          ),
          React.createElement('nav', { className: "hidden md:block" },
            React.createElement('div', { className: "ml-10 flex items-baseline space-x-4" },
              navLinks.map((link) => (
                React.createElement('a',
                  {
                    key: link.href,
                    href: link.href,
                    className: "text-brand-light-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  },
                  link.label
                )
              ))
            )
          ),
          React.createElement('div', { className: "hidden md:block" },
             React.createElement('a', { href: "#contact", className: "bg-brand-green-light text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-green transition-shadow shadow-sm hover:shadow-md" },
                "Request a Consultation"
              )
          )
        )
      )
    )
  );
};

const heroContents = [
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

const videoSource = '/EF_Asia_MV1.mp4';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTextFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
        setIsTextFading(false);
      }, 500);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    videoRef.current?.play().catch(error => {
      console.error("Video autoplay was prevented:", error);
    });
  }, []);

  const { heading, subheading, paragraph } = heroContents[currentIndex];

  return (
    React.createElement('section', { id: "hero", className: "relative h-screen flex items-center text-white bg-gray-800 overflow-hidden" },
      React.createElement('video',
        {
          ref: videoRef,
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          className: "absolute inset-0 w-full h-full object-cover brightness-[1.2]"
        },
        React.createElement('source', { src: videoSource, type: "video/mp4" }),
        "Your browser does not support the video tag."
      ),
      React.createElement('div', { className: "absolute inset-0 bg-brand-dark opacity-60" }),
      
      React.createElement('div', { className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "max-w-3xl text-left" },
          React.createElement('div', { className: "min-h-[400px] md:min-h-[450px]" },
            React.createElement('div', { key: currentIndex },
              React.createElement('h1', { className: `text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight transition-opacity duration-500 ${isTextFading ? 'opacity-0' : 'opacity-100 delay-100'}` },
                heading
              ),
              React.createElement('p', { className: `text-3xl md:text-4xl font-bold text-brand-green-light mb-8 transition-opacity duration-500 ${isTextFading ? 'opacity-0' : 'opacity-100 delay-200'}` },
                subheading
              ),
              React.createElement('p', { className: `max-w-3xl text-lg text-gray-200 mb-12 transition-opacity duration-500 ${isTextFading ? 'opacity-0' : 'opacity-100 delay-300'}` },
                paragraph
              )
            )
          ),
          
          React.createElement('div', { className: "flex flex-col sm:flex-row items-center justify-start gap-4" },
            React.createElement('a',
              {
                href: "#solutions",
                className: "w-full sm:w-auto bg-brand-green-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-green transition-all transform hover:scale-105 shadow-lg"
              },
              "Explore Solutions"
            ),
            React.createElement('a',
              {
                href: "#contact",
                className: "w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-green-dark transition-all transform hover:scale-105"
              },
              "Request a Consultation"
            )
          )
        )
      )
    )
  );
};

const ProblemCard = ({ icon, title, children }) => (
    React.createElement('div', { className: "bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors" },
        React.createElement('div', { className: "flex justify-center mb-4" }, icon),
        React.createElement('h3', { className: "text-xl font-bold text-white text-center mb-2" }, title),
        React.createElement('p', { className: "text-brand-light-gray text-center" }, children)
    )
);

const Problem = () => {
  return (
    React.createElement('section', { id: "problem", className: "py-20 bg-brand-dark" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "text-center" },
            React.createElement('h2', { className: "text-base text-brand-green-light font-semibold tracking-wide uppercase" }, "The Challenge"),
            React.createElement('p', { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl" }, "Modern Agriculture is at a Crossroads"),
            React.createElement('p', { className: "mt-4 max-w-2xl text-xl text-brand-light-gray mx-auto" }, "Inefficiencies, environmental pressures, and rising costs threaten global food security. A smarter approach is needed.")
        ),
        React.createElement('div', { className: "mt-16 grid gap-8 md:grid-cols-3" },
            React.createElement(ProblemCard, { icon: React.createElement(ArrowTrendingDownIcon, { className: "h-12 w-12 text-brand-green-light" }), title: "Yield Inefficiency" },
                "Conventional fertilizers have reached their limit, with up to 80% of nutrients never reaching the plant, leading to waste and stagnant yields."
            ),
            React.createElement(ProblemCard, { icon: React.createElement(GlobeAltIcon, { className: "h-12 w-12 text-brand-green-light" }), title: "Soil Degradation" },
                "Decades of chemical overuse have led to acidic, saline, and depleted soils that struggle to support healthy crops and are vulnerable to erosion."
            ),
            React.createElement(ProblemCard, { icon: React.createElement(ExclamationTriangleIcon, { className: "h-12 w-12 text-brand-green-light" }), title: "Environmental Concerns" },
                "Chemical runoff pollutes waterways, harms ecosystems, and leaves harmful residues on crops, impacting consumer health and safety."
            )
        )
      )
    )
  );
};

const MissionVision = () => {
  return (
    React.createElement('section', { id: "mission", className: "py-20 bg-white" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "lg:text-center" },
          React.createElement('h2', { className: "text-base text-brand-green-light font-semibold tracking-wide uppercase" }, "Our Commitment"),
          React.createElement('p', { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl" }, "Sustainable Stewardship"),
          React.createElement('p', { className: "mt-4 max-w-2xl text-xl text-brand-gray lg:mx-auto" }, "EF Solution is committed to building the foundation for sustainable agriculture and food security for generations to come.")
        ),
        React.createElement('div', { className: "mt-12 grid gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 items-center" },
          React.createElement('div', { className: "space-y-8" },
            React.createElement('div', { className: "flex items-start" },
              React.createElement('div', { className: "flex-shrink-0" },
                React.createElement('div', { className: "flex items-center justify-center h-12 w-12 rounded-md bg-brand-green-light text-white" },
                  React.createElement(LeafIcon, { className: "h-6 w-6" })
                )
              ),
              React.createElement('div', { className: "ml-4" },
                React.createElement('h3', { className: "text-lg leading-6 font-medium text-brand-green-dark" }, "Respect for Nature"),
                React.createElement('p', { className: "mt-2 text-base text-brand-gray" }, "We respect the natural world, curbing the reckless use of agricultural chemicals and excessive chemical fertilizers.")
              )
            ),
            React.createElement('div', { className: "flex items-start" },
              React.createElement('div', { className: "flex-shrink-0" },
                React.createElement('div', { className: "flex items-center justify-center h-12 w-12 rounded-md bg-brand-green-light text-white" },
                    React.createElement(LeafIcon, { className: "h-6 w-6" })
                )
              ),
              React.createElement('div', { className: "ml-4" },
                React.createElement('h3', { className: "text-lg leading-6 font-medium text-brand-green-dark" }, "Soil Purification"),
                React.createElement('p', { className: "mt-2 text-base text-brand-gray" }, "We strive to purify contaminated soil, restoring its health and vitality for future crops.")
              )
            ),
            React.createElement('div', { className: "flex items-start" },
              React.createElement('div', { className: "flex-shrink-0" },
                React.createElement('div', { className: "flex items-center justify-center h-12 w-12 rounded-md bg-brand-green-light text-white" },
                  React.createElement(LeafIcon, { className: "h-6 w-6" })
                )
              ),
              React.createElement('div', { className: "ml-4" },
                React.createElement('h3', { className: "text-lg leading-6 font-medium text-brand-green-dark" }, "Farmer Prosperity"),
                React.createElement('p', { className: "mt-2 text-base text-brand-gray" }, "We aim to enhance the quality of life and income for farmers by creating highly enriched fertilizers suitable for all forms of agriculture.")
              )
            )
          ),
          React.createElement('div', { className: "mt-10 lg:mt-0" },
              React.createElement('img', { className: "rounded-lg shadow-xl", src: "/farmer-in-field.jpg", alt: "A farmer standing in a lush, healthy field, symbolizing prosperity and sustainable agriculture" })
          )
        )
      )
    )
  );
};

const HowItWorksStep = ({ icon, step, title, children }) => (
    React.createElement('div', { className: "flex" },
        React.createElement('div', { className: "flex-shrink-0 mr-6" },
            React.createElement('div', { className: "flex items-center justify-center h-16 w-16 rounded-full bg-brand-green-light text-white" },
                icon
            )
        ),
        React.createElement('div', {},
            React.createElement('p', { className: "text-sm font-bold text-brand-green-light tracking-wider uppercase" }, step),
            React.createElement('h4', { className: "text-xl font-bold text-brand-green-dark mt-1" }, title),
            React.createElement('p', { className: "mt-2 text-brand-gray" }, children)
        )
    )
);

const Technology = () => {
  return (
    React.createElement('section', { id: "technology", className: "py-20 bg-brand-off-white text-brand-gray" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "lg:text-center" },
          React.createElement('h2', { className: "text-base text-brand-green-light font-semibold tracking-wide uppercase" }, "How It Works"),
          React.createElement('p', { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl" }, "A 3-Step Revolution in Crop Nutrition"),
          React.createElement('p', { className: "mt-4 max-w-3xl text-xl text-brand-gray lg:mx-auto" }, "Our patented technology simplifies application while maximizing nutrient uptake and soil health.")
        ),
        
        React.createElement('div', { className: "mt-16 grid md:grid-cols-2 gap-12 items-center" },
            React.createElement('div', { className: "space-y-12" },
                React.createElement(HowItWorksStep,
                    {
                        icon: React.createElement(BeakerIcon, { className: "h-8 w-8" }),
                        step: "Step 1",
                        title: "Nano-Colloidal Formulation"
                    },
                    "Our liquid solution is engineered at a nano level, creating ultra-small particles that are instantly water-soluble for easy application via any irrigation or spray system."
                ),
                React.createElement(HowItWorksStep,
                    {
                        icon: React.createElement(ShieldCheckIcon, { className: "h-8 w-8" }),
                        step: "Step 2",
                        title: "Hyper-Efficient Absorption"
                    },
                    "The nano-sized nutrients bypass conventional absorption barriers, allowing crops to absorb over 95% of the nutrition directly through leaves and roots for rapid growth."
                ),
                 React.createElement(HowItWorksStep,
                    {
                        icon: React.createElement(SparklesIcon, { className: "h-8 w-8" }),
                        step: "Step 3",
                        title: "Soil Revitalization"
                    },
                    "Unlike chemical fertilizers that degrade soil, our formula neutralizes pH, resolves salinity, and improves soil structure, creating a healthier foundation for future crops."
                )
            ),
            React.createElement('div', {},
                React.createElement('img', { className: "rounded-lg shadow-xl", src: "/scientist-with-plant.jpg", alt: "Scientist examining a plant in a high-tech lab" })
            )
        )
      )
    )
  );
};

const FeatureCard = ({ icon, title, children }) => (
  React.createElement('div', { className: "bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors duration-300" },
    React.createElement('div', { className: "flex items-center mb-4" },
      React.createElement('div', { className: "flex-shrink-0 h-10 w-10 text-brand-green-light" }, icon),
      React.createElement('h3', { className: "ml-4 text-xl font-bold text-white" }, title)
    ),
    React.createElement('p', { className: "text-brand-light-gray" }, children)
  )
);

const Solutions = () => {
  return (
    React.createElement('section', { id: "solutions", className: "py-20 bg-brand-dark" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "text-center" },
          React.createElement('h2', { className: "text-base text-brand-green-light font-semibold tracking-wide uppercase" }, "Multi-Functional Solutions"),
          React.createElement('p', { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl" }, "An All-in-One Platform for Farm Health"),
          React.createElement('p', { className: "mt-4 max-w-2xl text-xl text-brand-light-gray mx-auto" }, "\"Perfect Solution\" is more than a fertilizer; it's an integrated agent that addresses your farm's complete needs.")
        ),
        React.createElement('div', { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" },
          React.createElement(FeatureCard, { icon: React.createElement(SparklesIcon), title: "Compound Fertilizer" }, "Contains 13 concentrated plant growth factors (N, P, K, Ca, Mg, B, S, etc.) for comprehensive nutrition."),
          React.createElement(FeatureCard, { icon: React.createElement(ScaleIcon), title: "Powerful Soil Conditioner" }, "Neutralizes acidic/alkaline soil and resolves salinity accumulation and salt stress in just one day."),
          React.createElement(FeatureCard, { icon: React.createElement(ShieldCheckIcon), title: "Enhanced Crop Immunity" }, "Improves quality (sugar content, size, freshness) and provides sterilizing/pesticide effects."),
          React.createElement(FeatureCard, { icon: React.createElement(TrashIcon), title: "Pesticide Residue Removal" }, "Efficiently removes over 99% of harmful pesticide residues from crops, ensuring safer produce."),
          React.createElement(FeatureCard, { icon: React.createElement(CurrencyDollarIcon), title: "Economic Advantage" }, "High concentration allows 1L to cover 5,000 sq. meters, saving 50% of conventional chemical fertilizer costs."),
          React.createElement(FeatureCard, { icon: React.createElement(HeartIcon), title: "Eco-Friendly & Water Soluble" }, "Our nano-colloidal formula is highly water-soluble for easy application and environmentally neutral.")
        )
      )
    )
  );
};

const StatCard = ({ value, label, description }) => (
    React.createElement('div', { className: "bg-white shadow-lg p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 border border-gray-200" },
        React.createElement('p', { className: "text-5xl font-extrabold text-brand-green-light" }, value),
        React.createElement('p', { className: "mt-2 text-xl font-bold text-brand-green-dark" }, label),
        React.createElement('p', { className: "mt-2 text-brand-gray" }, description)
    )
);

const CaseStudies = () => {
    return (
        React.createElement('section', { id: "proof", className: "py-20 bg-brand-off-white text-brand-gray" },
            React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement('div', { className: "text-center" },
                    React.createElement('h2', { className: "text-base text-brand-green-light font-semibold tracking-wide uppercase" }, "Global Proof & Case Studies"),
                    React.createElement('p', { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl" }, "Verified Performance: Delivering Results")
                ),
                React.createElement('div', { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" },
                    React.createElement(StatCard, { value: "25-40%", label: "Yield Increase", description: "Average increase across various crops and regions." }),
                    React.createElement(StatCard, { value: "50%", label: "Cost Reduction", description: "Savings compared to conventional chemical fertilizers." }),
                    React.createElement(StatCard, { value: "95%+", label: "Nutrient Absorption", description: "Ensuring maximum efficiency and minimal waste." })
                ),
                React.createElement('div', { className: "mt-20" },
                    React.createElement('h3', { className: "text-2xl font-bold text-center text-brand-green-dark mb-10" }, "Success Stories Across Asia"),
                    React.createElement('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" },
                        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow-md" },
                            React.createElement('h4', { className: "font-bold text-lg text-brand-green-dark" }, "China: Cotton & Rice"),
                            React.createElement('p', { className: "mt-2 text-brand-gray" }, "Proven results show a 40% yield increase in Xinjiang cotton and a 30% increase in Heilongjiang rice.")
                        ),
                        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow-md" },
                            React.createElement('h4', { className: "font-bold text-lg text-brand-green-dark" }, "Vietnam: Annam Rice"),
                            React.createElement('p', { className: "mt-2 text-brand-gray" }, "Demonstrated an exceptional 42% yield increase, boosting local farmer income significantly.")
                        ),
                        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow-md" },
                            React.createElement('h4', { className: "font-bold text-lg text-brand-green-dark" }, "Palm Oil Plantations"),
                            React.createElement('p', { className: "mt-2 text-brand-gray" }, "Successful application in Myanmar & Indonesia, enhancing tree immunity, improving soil, and cutting production costs by 50%.")
                        )
                    )
                ),
                React.createElement('div', { className: "mt-16 text-center" },
                    React.createElement('a', { href: "#", className: "inline-flex items-center bg-white text-brand-green-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-md border border-gray-200" },
                        React.createElement(ChartBarIcon, { className: "h-5 w-5 mr-3" }),
                        "View Detailed Field Test Reports"
                    )
                )
            )
        )
    );
};

const TestimonialCard = ({ quote, name, role, imgSrc }) => (
    React.createElement('div', { className: "bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300" },
        React.createElement('img', { src: imgSrc, alt: name, className: "w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-brand-green-light/50" }),
        React.createElement('p', { className: "text-brand-gray italic mb-6" }, `"${quote}"`),
        React.createElement('p', { className: "font-bold text-brand-green-dark" }, name),
        React.createElement('p', { className: "text-sm text-gray-500" }, role)
    )
);

const Testimonials = () => {
    return (
        React.createElement('section', { id: "testimonials", className: "py-20 bg-brand-off-white" },
            React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
                React.createElement('div', { className: "text-center" },
                    React.createElement('h2', { className: "text-base text-brand-green-light font-semibold tracking-wide uppercase" }, "Real-World Impact"),
                    React.createElement('p', { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-green-dark sm:text-4xl" }, "Trusted by Growers Across Asia")
                ),
                React.createElement('div', { className: "mt-16 grid gap-8 md:grid-cols-3" },
                    React.createElement(TestimonialCard, 
                        {
                            quote: "We saw a 42% yield increase in our Annam rice paddies after switching. The cost savings on fertilizer were just a bonus. It's a revolutionary product.",
                            name: "Minh Nguyen",
                            role: "Rice Farmer, Vietnam",
                            imgSrc: "/avatar-farmer-vietnam.jpg"
                        }
                    ),
                    React.createElement(TestimonialCard, 
                        {
                            quote: "Our cotton quality has never been better. The soil health has visibly improved, and we've cut our chemical fertilizer usage by more than half. I highly recommend it.",
                            name: "Li Wei",
                            role: "Cotton Producer, Xinjiang, China",
                            imgSrc: "/avatar-producer-china.jpg"
                        }
                    ),
                    React.createElement(TestimonialCard, 
                        {
                            quote: "As a large-scale palm oil producer, efficiency and sustainability are key. EF Solution delivers on both. Our trees are healthier, and our production costs are down 50%.",
                            name: "Ahmad bin Ishak",
                            role: "Plantation Manager, Indonesia",
                            imgSrc: "/avatar-manager-indonesia.jpg"
                        }
                    )
                )
            )
        )
    );
};

const Sustainability = () => {
  return (
    React.createElement('section', { id: "sustainability", className: "py-20 bg-brand-dark" },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center" },
        React.createElement('div', { className: "order-2 md:order-1" },
          React.createElement('h2', { className: "text-base text-brand-green-light font-semibold tracking-wide uppercase" }, "Eco-Commitment"),
          React.createElement('p', { className: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl" }, "Agriculture for a Healthier Planet"),
          React.createElement('p', { className: "mt-4 text-xl text-brand-light-gray" }, "Our products are engineered to be as safe for the environment as they are effective for your crops."),
          React.createElement('ul', { className: "mt-8 space-y-6" },
            React.createElement('li', { className: "flex items-start" },
              React.createElement(HeartIcon, { className: "flex-shrink-0 h-6 w-6 text-brand-green-light" }),
              React.createElement('div', { className: "ml-4" },
                React.createElement('h4', { className: "text-lg font-medium text-white" }, "Environmentally Neutral"),
                React.createElement('p', { className: "text-brand-light-gray" }, "With a neutral pH of 6-7, our solution poses no harm to water, soil, or human health, minimizing environmental pollution.")
              )
            ),
            React.createElement('li', { className: "flex items-start" },
               React.createElement(HeartIcon, { className: "flex-shrink-0 h-6 w-6 text-brand-green-light" }),
              React.createElement('div', { className: "ml-4" },
                React.createElement('h4', { className: "text-lg font-medium text-white" }, "Verified Safety"),
                React.createElement('p', { className: "text-brand-light-gray" }, "Harmful heavy metals are 'Not Detected' as verified by AT Analysis Center reports, ensuring your land and produce remain pure.")
              )
            )
          ),
          React.createElement('div', { className: "mt-10" },
              React.createElement('a', { href: "#contact", className: "inline-block bg-brand-green-light text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-green transition-all transform hover:scale-105 shadow-md" }, "Join Our Sustainable Partnership")
          )
        ),
        React.createElement('div', { className: "order-1 md:order-2" },
            React.createElement('img', { className: "rounded-lg shadow-xl w-full h-auto object-cover", src: "/hands-holding-soil.jpg", alt: "A person's hands holding rich soil with a small green sprout growing" })
        )
      )
    )
  );
};

const Footer = () => {
  return (
    React.createElement('footer', { id: "contact", className: "bg-brand-green-dark text-white" },
      React.createElement('div', { className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8" },
        React.createElement('div', { className: "max-w-4xl mx-auto text-center mb-16" },
            React.createElement('h2', { className: "text-3xl md:text-4xl font-extrabold text-white" }, "Unlock Your Farm's Potential Today"),
            React.createElement('p', { className: "mt-4 text-lg text-brand-light-gray" }, "Ready to see the difference? Get in touch with our specialists to discuss your needs and request a consultation."),
            React.createElement('div', { className: "mt-8" },
                React.createElement('a', { href: "mailto:seansim.kor@gmail.com", className: "inline-block bg-brand-green-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-green transition-all transform hover:scale-105 shadow-lg" }, "Request a Consultation")
            )
        ),
        React.createElement('div', { className: "border-t border-gray-700 pt-12" },
            React.createElement('div', { className: "xl:grid xl:grid-cols-3 xl:gap-8" },
              React.createElement('div', { className: "space-y-8 xl:col-span-1" },
                 React.createElement('h2', { className: "text-3xl font-bold" }, "EF Solution Asia"),
                React.createElement('p', { className: "text-gray-300 text-base" }, "Leading the future of agriculture with high-efficiency, sustainable farm solutions.")
              ),
              React.createElement('div', { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2" },
                React.createElement('div', { className: "md:grid md:grid-cols-2 md:gap-8" },
                  React.createElement('div', {},
                    React.createElement('h3', { className: "text-sm font-semibold text-gray-200 tracking-wider uppercase" }, "Contact"),
                    React.createElement('ul', { className: "mt-4 space-y-4" },
                      React.createElement('li', {},
                        React.createElement('p', { className: "text-base text-gray-300" }, "Sean Sim"),
                        React.createElement('a', { href: "mailto:seansim.kor@gmail.com", className: "text-base text-brand-green-light hover:text-white" }, "seansim.kor@gmail.com")
                      ),
                      React.createElement('li', {},
                        React.createElement('a', { href: "tel:+60172018149", className: "text-base text-brand-green-light hover:text-white" }, "+60 17 201 8149")
                      )
                    )
                  ),
                  React.createElement('div', { className: "mt-12 md:mt-0" },
                    React.createElement('h3', { className: "text-sm font-semibold text-gray-200 tracking-wider uppercase" }, "Office"),
                    React.createElement('p', { className: "mt-4 text-base text-gray-300" }, "NO 7, JALAN JADE HILLS 10/4,", React.createElement('br'), "JADE HILLS 43000 KAJANG,", React.createElement('br'), "SELANGOR, MALAYSIA")
                  )
                ),
                React.createElement('div', { className: "md:grid md:grid-cols-1 md:gap-8" },
                   React.createElement('div', {},
                    React.createElement('h3', { className: "text-sm font-semibold text-gray-200 tracking-wider uppercase" }, "Navigation"),
                    React.createElement('ul', { className: "mt-4 space-y-2" },
                        React.createElement('li', {}, React.createElement('a', { href: "#problem", className: "text-base text-gray-300 hover:text-white" }, "The Challenge")),
                        React.createElement('li', {}, React.createElement('a', { href: "#technology", className: "text-base text-gray-300 hover:text-white" }, "How It Works")),
                        React.createElement('li', {}, React.createElement('a', { href: "#solutions", className: "text-base text-gray-300 hover:text-white" }, "Solutions")),
                        React.createElement('li', {}, React.createElement('a', { href: "#proof", className: "text-base text-gray-300 hover:text-white" }, "Results"))
                    )
                   )
                )
              )
            ),
            React.createElement('div', { className: "mt-12 border-t border-gray-700 pt-8" },
              React.createElement('p', { className: "text-base text-gray-400 xl:text-center" }, `© ${new Date().getFullYear()} EF Solution Asia Sdn. Bhd. All rights reserved.`)
            )
        )
      )
    )
  );
};

const App = () => {
  return (
    React.createElement('div', { className: "bg-brand-dark text-brand-light-gray font-sans" },
      React.createElement(Header, null),
      React.createElement('main', null,
        React.createElement(Hero, null),
        React.createElement(Problem, null),
        React.createElement(MissionVision, null),
        React.createElement(Technology, null),
        React.createElement(Solutions, null),
        React.createElement(CaseStudies, null),
        React.createElement(Testimonials, null),
        React.createElement(Sustainability, null)
      ),
      React.createElement(Footer, null)
    )
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App, null)
  )
);
