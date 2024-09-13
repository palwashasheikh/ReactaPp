import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-teal-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Logo with white rectangle background */}
        <div className="p-2  flex items-center justify-between">
        <span className="text-2xl font-bold text-left">Krachtdak</span>
        <img src="/Vector.png" alt="Krachtdak Logo" className="bg-white h-6 w-6 object-right ml-2" /> {/* Replace with actual logo path */}
        </div>
          {/* Text next to logo */}
        </div>

        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-yellow-400">Zonnepanelen</a></li>
          <li><a href="/" className="hover:text-yellow-400">Autoladers</a></li>
          <li><a href="/" className="hover:text-yellow-400">Thuisbatterij</a></li>
          <li><a href="/" className="hover:text-yellow-400">Groepsaankoop</a></li>
          <li><a href="/" className="hover:text-yellow-400">Zakelijk</a></li>
        </ul>

        {/* Contact Button */}
        <a href="#" className="bg-yellow-400 text-teal-900 px-4 py-2 rounded-lg font-semibold">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
