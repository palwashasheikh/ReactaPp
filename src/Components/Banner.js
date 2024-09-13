import React from 'react';

const Banner = () => {
  return (
    <div className="bg-teal-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Slimme Energie Oplossingen Met <br /> Een Maximale Opbrengst
          </h1>
        </div>

        {/* Icon Section */}
        <div className="md:w-1/3 bg-white bg-opacity-10 rounded-lg p-6">
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/Capa_1.png" alt="solar panel" className="w-6 h-6" /> {/* Replace with actual icon paths */}
              </div>
              Zonnepanelen Installaties
            </li>
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/Layer_1.png" alt="charger" className="w-6 h-6" /> {/* Replace with actual icon paths */}
              </div>
              Autoladers
            </li>
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/Line Expand.png" alt="battery" className="w-6 h-6" /> {/* Replace with actual icon paths */}
              </div>
              Thuisbatterij
            </li>
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/icons.png" alt="energy management" className="w-6 h-6" /> {/* Replace with actual icon paths */}
              </div>
              Energiemanagement Systeem
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
