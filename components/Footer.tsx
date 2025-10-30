import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-green-dark text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Unlock Your Farm's Potential Today</h2>
            <p className="mt-4 text-lg text-brand-light-gray">Ready to see the difference? Get in touch with our specialists to discuss your needs and request a consultation.</p>
            <div className="mt-8">
                <a href="mailto:seansim.kor@gmail.com" className="inline-block bg-brand-green-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-green transition-all transform hover:scale-105 shadow-lg">
                    Request a Consultation
                </a>
            </div>
        </div>
        
        <div className="border-t border-gray-700 pt-12">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                 <h2 className="text-3xl font-bold">EF Solution Asia</h2>
                <p className="text-gray-300 text-base">
                  Leading the future of agriculture with high-efficiency, sustainable farm solutions.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                    <ul className="mt-4 space-y-4">
                      <li>
                        <p className="text-base text-gray-300">Sean Sim</p>
                        <a href="mailto:seansim.kor@gmail.com" className="text-base text-brand-green-light hover:text-white">seansim.kor@gmail.com</a>
                      </li>
                      <li>
                        <a href="tel:+60172018149" className="text-base text-brand-green-light hover:text-white">+60 17 201 8149</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Office</h3>
                    <p className="mt-4 text-base text-gray-300">
                      NO 7, JALAN JADE HILLS 10/4,<br/>
                      JADE HILLS 43000 KAJANG,<br/>
                      SELANGOR, MALAYSIA
                    </p>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-1 md:gap-8">
                   <div>
                    <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navigation</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#problem" className="text-base text-gray-300 hover:text-white">The Challenge</a></li>
                        <li><a href="#technology" className="text-base text-gray-300 hover:text-white">How It Works</a></li>
                        <li><a href="#solutions" className="text-base text-gray-300 hover:text-white">Solutions</a></li>
                        <li><a href="#proof" className="text-base text-gray-300 hover:text-white">Results</a></li>
                    </ul>
                   </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} EF Solution Asia Sdn. Bhd. All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
