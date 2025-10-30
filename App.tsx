import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import MissionVision from './components/MissionVision';
import Technology from './components/Technology';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light-gray font-sans">
      <Header />
      <main>
        <Hero />
        <Problem />
        <MissionVision />
        <Technology />
        <Solutions />
        <CaseStudies />
        <Testimonials />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default App;