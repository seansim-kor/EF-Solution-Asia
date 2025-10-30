import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Technology from './components/Technology';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-off-white text-brand-gray font-sans">
      <Header />
      <main>
        <Hero />
        <MissionVision />
        <Technology />
        <Solutions />
        <CaseStudies />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default App;
