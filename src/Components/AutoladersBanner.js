import React from 'react';

const AutoladersBanner = () => {
  return (
    <div
      className="bg-teal-900 text-white py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/sungrow-emea-ceTSHQ0qars-unsplash.png")',
        minHeight: '80vh',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Slim Laden Met <br /> Krachtdak
          </h1>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <span className="text-yellow-500 mr-3">✔️</span> Betrouwbare installatie
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-3">✔️</span> Controle groepen kast
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-3">✔️</span> Voorbereid op de toekomst!
            </li>
          </ul>
        </div>

        {/* Icon Section */}
        <div className="md:w-1/3 bg-white bg-opacity-10 rounded-lg p-6">
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/Capa_1.png" alt="solar panel" className="w-6 h-6" />
              </div>
              Zonnepanelen Installaties
            </li>
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/Layer_1.png" alt="charger" className="w-6 h-6" />
              </div>
              Autoladers
            </li>
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/Line Expand.png" alt="battery" className="w-6 h-6" />
              </div>
              Thuisbatterij
            </li>
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full p-3 mr-4">
                <img src="/icons.png" alt="energy management" className="w-6 h-6" />
              </div>
              Energiemanagement Systeem
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
    </div>
  );
};

export default AutoladersBanner;
