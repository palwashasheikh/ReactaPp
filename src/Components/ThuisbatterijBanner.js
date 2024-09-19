import React from 'react';

const ThuisbatterijBanner = () => {
  return (
    <div
      className="text-white py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/fourth.png")',
        minHeight: '95vh',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 py-10">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Controle over je eigen energie met  <br /> een thuisaccu
          </h1>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center text-xl">
              <img src="/tick.svg" alt="Tick" class="mr-1 md:mr-2 mt-0.5 md:mt-1" /> Vergroot onafhankelijkheid van energieleveranciers.
            </li>
            <li className="flex items-center text-xl">
              <img src="/tick.svg" alt="Tick" class="mr-1 md:mr-2 mt-0.5 md:mt-1" /> Voorkom uitvallende omvormers door hoge netspanning.
            </li>
            <li className="flex items-center text-xl">
              <img src="/tick.svg" alt="Tick" class="mr-1 md:mr-2 mt-0.5 md:mt-1" />Gebruik de goedkoopste energie van een dynamisch energiecontract.
            </li>
          </ul>
        </div>

        {/* Icon Section */}
        <div className="md:w-[450px] bg-white bg-opacity-30 rounded-lg p-6">
          <ul className="space-y-4 text-lg font-normal">
            <li className="flex items-center opacity-50">
              <div className="bg-amber-500 rounded-full mr-4 p-1.5 w-12 h-12 flex justify-center items-center">
                <img src="/Capa_1.png" alt="solar panel" className="" />
              </div>
              Zonnepanelen Installaties
            </li>
            <li className="flex items-center opacity-50">
              <div className="bg-amber-500 rounded-full mr-4 p-1.5 w-12 h-12 flex justify-center items-center">
                <img src="/Layer_1.png" alt="charger" className="w-6 h-6" />
              </div>
              Autoladers
            </li>
            <li className="flex items-center">
              <div className="bg-amber-500 rounded-full mr-4 p-1.5 w-12 h-12 flex justify-center items-center">
                <img src="/Line Expand.png" alt="battery" className="" />
              </div>
              Thuisbatterij
            </li>
            <li className="flex items-center opacity-50">
              <div className="bg-amber-500 rounded-full mr-4 p-1.5 w-12 h-12 flex justify-center items-center">
                <img src="/icons.png" alt="energy management" className="w-6 h-6" />
              </div>
              Energiemanagement Systeem
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThuisbatterijBanner;
