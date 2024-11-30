import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`text-white fixed top-0 left-0 right-0 flex justify-between items-center h-16 px-6 lg:px-24 z-50 transition-colors duration-300 ${
      scrolled ? 'bg-blueish-80' : 'bg-transparent'
    }`}>
      <div className="flex items-center w-full justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Krachtdak" className="h-8" />
          </a>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-white focus:outline-none"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5868 2.6665H10.4134C5.56008 2.6665 2.66675 5.55984 2.66675 10.4132V21.5732C2.66675 26.4398 5.56008 29.3332 10.4134 29.3332H21.5734C26.4268 29.3332 29.3201 26.4398 29.3201 21.5865V10.4132C29.3334 5.55984 26.4401 2.6665 21.5868 2.6665ZM22.6667 22.9998H9.33342C8.78675 22.9998 8.33342 22.5465 8.33342 21.9998C8.33342 21.4532 8.78675 20.9998 9.33342 20.9998H22.6667C23.2134 20.9998 23.6667 21.4532 23.6667 21.9998C23.6667 22.5465 23.2134 22.9998 22.6667 22.9998ZM22.6667 16.9998H9.33342C8.78675 16.9998 8.33342 16.5465 8.33342 15.9998C8.33342 15.4532 8.78675 14.9998 9.33342 14.9998H22.6667C23.2134 14.9998 23.6667 15.4532 23.6667 15.9998C23.6667 16.5465 23.2134 16.9998 22.6667 16.9998ZM22.6667 10.9998H9.33342C8.78675 10.9998 8.33342 10.5465 8.33342 9.99984C8.33342 9.45317 8.78675 8.99984 9.33342 8.99984H22.6667C23.2134 8.99984 23.6667 9.45317 23.6667 9.99984C23.6667 10.5465 23.2134 10.9998 22.6667 10.9998Z" fill="white"/>
          </svg>
        </button>

        {/* Links and Contact Button */}
        <div className="hidden lg:flex items-center justify-between space-x-8">
          <ul className="flex space-x-8">
            <li><a href="/zonnepanelen" className="hover:text-orangeish-500">Zonnepanelen</a></li>
            <li><a href="/Autoladers" className="hover:text-orangeish-500">Autoladers</a></li>
            <li><a href="/Thuisbatterij" className="hover:text-orangeish-500">Thuisbatterij</a></li>
            <li><a href="/" className="hover:text-orangeish-500">Groepsaankoop</a></li>
            <li><a href="/" className="hover:text-orangeish-500">Zakelijk</a></li>
          </ul>
          <a href="#" className="bg-orangeish-500 hover:bg-orangeish-400 text-white px-4 py-2 rounded-lg font-semibold">
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-blueish-80 flex flex-col space-y-4 p-4">
          <ul className="space-y-4">
            <li><a href="/zonnepanelen" className="block text-white hover:text-orangeish-500">Zonnepanelen</a></li>
            <li><a href="/Autoladers" className="block text-white hover:text-orangeish-500">Autoladers</a></li>
            <li><a href="/" className="block text-white hover:text-orangeish-500">Thuisbatterij</a></li>
            <li><a href="/" className="block text-white hover:text-orangeish-500">Groepsaankoop</a></li>
            <li><a href="/" className="block text-white hover:text-orangeish-500">Zakelijk</a></li>
          </ul>
          <Link
  to="contactus"
  smooth={true}
  duration={100}
  className="bg-orangeish-500 hover:bg-orangeish-400 text-white px-4 py-2 rounded-lg font-semibold text-center"
>
  Contact Us
</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
