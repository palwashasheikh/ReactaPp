import React from 'react';

const TransitionSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section with Teal Background */}
      <div className="md:w-1/2 bg-slate-300  py-12 px-8">
        <h2 className="text-3xl font-bold mb-4 text-black-300">
          Krachtdak Neemt Je Mee <br /> In De <span className="text-yellow-400">Energietransitie</span>
        </h2>
        <p className="text-black-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Right Section with Light Gray Background */}
      <div className="md:w-1/2 bg-gray-100 py-12 px-8 flex items-center justify-center">
        <img src="/Rectangle.png" alt="Energy Transition" className="rounded-lg shadow-lg" /> {/* Replace with your actual image path */}
      </div>
    </div>
  );
};

export default TransitionSection;
