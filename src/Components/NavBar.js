import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white py-4" 
    style={{ backgroundImage: 'url("/sungrow-emea-ceTSHQ0qars-unsplash 2.png")' }}

    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="p-2 flex items-center justify-between">
            <span className="text-2xl font-bold text-left">Krachtdak</span>
            <img src="/Vector.png" alt="Krachtdak Logo" className="bg-white h-6 w-6 object-right ml-2" />
          </div>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Links Section (hidden on small screens and visible on large screens) */}
        <ul className={`lg:flex lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
          <li><a href="/zonnepanelen" className="hover:text-yellow-400 block lg:inline-block">Zonnepanelen</a></li>
          <li><a href="/Autoladers" className="hover:text-yellow-400 block lg:inline-block">Autoladers</a></li>
          <li><a href="/" className="hover:text-yellow-400 block lg:inline-block">Thuisbatterij</a></li>
          <li><a href="/" className="hover:text-yellow-400 block lg:inline-block">Groepsaankoop</a></li>
          <li><a href="/" className="hover:text-yellow-400 block lg:inline-block">Zakelijk</a></li>
        </ul>

        {/* Contact Button */}
        <a href="#" className="hidden lg:block bg-yellow-400 text-teal-900 px-4 py-2 rounded-lg font-semibold">
          Contact Us
        </a>
      </div>

      {/* Contact Button for small screens (in the dropdown menu) */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <a href="/" className="block bg-yellow-400 text-teal-900 px-4 py-2 rounded-lg font-semibold text-center">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
