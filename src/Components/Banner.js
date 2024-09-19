import React from 'react';

const Banner = () => {
  return (
    <div className="text-white">
      <div className="w-full mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between bg-blueish-80 py-20 md:py-40">
        {/* Text Section */}
        <div className="md:w-[500px] mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl sm:text-3xl lg:text-6xl font-bold md:!leading-[74px]">
            <span className='text-orangeish-500'>Slimme Energie Oplossingen</span> Met <br /> Een Maximale Opbrengst
          </h1>
        </div>

        {/* Icon Section */}
        <div className="md:w-[450px] bg-white bg-opacity-10 rounded-lg p-6">
          <ul className="space-y-4 text-lg font-normal">
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
    </div>
  );
};

export default Banner;
