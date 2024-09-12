import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <nav className={`fixed top-0 w-full z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="size-12" src="icon.svg" alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Tentang Kami', 'Program', 'Kontak'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleScrollToSection(item === 'Tentang Kami' ? 'prologue' : '')}
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button href="#" className="text-gray-800 hover:bg-gray-200 px-5 py-2 rounded-md text-sm font-medium">Login</button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Sign Up</button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Tentang Kami', 'Program', 'Kontak'].map((item) => (
              <button
                key={item}
                onClick={() => handleScrollToSection(item === 'Tentang Kami' ? 'prologue' : '')}
                className="w-full text-left text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="py-6 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button href="#" className="w-full text-gray-800 hover:bg-gray-200 block px-4 py-2 rounded-md text-base font-medium">Login</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 w-full">Sign Up</button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <div className="flex justify-center space-x-6 mt-4">
                <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-900">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/gemapalapurworejo/" className="text-gray-600 hover:text-gray-900">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
