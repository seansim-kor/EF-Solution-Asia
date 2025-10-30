import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg shadow-md border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-white">
              EF Solution Asia
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-brand-light-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="hidden md:block">
             <a href="#contact" className="bg-brand-green-light text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-green transition-shadow shadow-sm hover:shadow-md">
                Request a Consultation
              </a>
          </div>
          {/* Mobile menu button can be added here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;