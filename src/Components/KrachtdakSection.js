import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importing FontAwesome check icon

const KrachtdakSection = () => {
  return (
    <div className="bg-blueish-50 text-white py-10 md:py-20 relative pl-4 md:pl-24">
      {/* Main container */}
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-5xl font-bold mb-10 md:mb-28">Dit Is Krachtdak</h2>
          <ul className="space-y-4 mb-5">
            <li className="flex items-center text-lg md:text-xl">
              <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />
              Ervaring sinds 2009
            </li>
            <li className="flex items-center text-lg md:text-xl">
              <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />
              Persoonlijke aandacht
            </li>
            <li className="flex items-center text-lg md:text-xl">
              <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />
              InstallQ erkenning
            </li>
            <li className="flex items-center text-lg md:text-xl">
              <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />
              Sterk in installatie op afwijkende type daken
            </li>
            <li className="flex items-center text-lg md:text-xl">
              <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />
              Controle op geschiktheid meterkast
            </li>
          </ul>
          <div className="flex flex-wrap justify-start items-center space-x-4 mt-6">
            {/* Replace with actual badge image paths */}
            <img src="/image1.png" alt="Badge 1" className="h-12 md:h-16 mb-2" />
            <img src="/badge1.png" alt="Badge 1" className="h-10 md:h-14 mb-2" />
            <img src="/badge2.png" alt="Badge 2" className="h-10 md:h-14 mb-2" />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative md:absolute md:right-[-40px] md:top-[-20px] top-16">
          <img
            src="/Dit-is-Krachtdak.png"
            alt="Worker with Solar Panel"
            className="w-[90%] sm:w-[75%] md:w-[500px] mx-auto"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default KrachtdakSection;
