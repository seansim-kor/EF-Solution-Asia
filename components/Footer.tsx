import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-green-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <h2 className="text-3xl font-bold">EF Solution Asia Sdn. Bhd.</h2>
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
                    <p className="text-base text-gray-300">Chongho Lee (Co-Founder)</p>
                    <a href="mailto:chongpdx@gmail.com" className="text-base text-brand-green-light hover:text-white">chongpdx@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Headquarters</h3>
                <p className="mt-4 text-base text-gray-300">
                  58, Pyeongdong-ro 913beon-gil,<br/>
                  Gwangsan-gu, Gwangju,<br/>
                  Republic of Korea
                </p>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Ready to Grow?</h3>
                <p className="mt-4 text-base text-gray-300">Let's discuss how our solutions can increase your yield and lower your costs.</p>
                <div className="mt-4">
                  <a href="#" className="inline-block bg-brand-green-light text-white px-6 py-3 rounded-md text-base font-medium hover:bg-brand-green">
                    Request a Quick Consultation
                  </a>
                </div>
                 {/* Placeholder for an inquiry form */}
               </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} EF Solution Asia Sdn. Bhd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
