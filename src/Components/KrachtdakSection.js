import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importing FontAwesome check icon

const KrachtdakSection = () => {
  return (
    <div className="bg-blueish-50 text-white py-10 relative overflow-hidden">
      {/* Main container */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dit Is Krachtdak</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCheck className="text-yellow-500 w-5 h-5 mr-3" /> {/* Check icon */}
              Ervaring sinds 2009
            </li>
            <li className="flex items-center">
              <FaCheck className="text-yellow-500 w-5 h-5 mr-3" />
              Persoonlijke aandacht
            </li>
            <li className="flex items-center">
              <FaCheck className="text-yellow-500 w-5 h-5 mr-3" />
              InstallQ erkenning
            </li>
            <li className="flex items-center">
              <FaCheck className="text-yellow-500 w-5 h-5 mr-3" />
              Sterk in installatie op afwijkende type daken
            </li>
            <li className="flex items-center">
              <FaCheck className="text-yellow-500 w-5 h-5 mr-3" />
              Controle op geschiktheid meterkast
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            {/* Replace with actual badge image paths */}
            <img src="/image1.png" alt="Badge 1" className="h-12" />
            <img src="/badge1.png" alt="Badge 1" className="h-12" />
            <img src="/badge2.png" alt="Badge 2" className="h-12" />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/Rectangleimage.png"
            alt="Worker with Solar Panel"
            className="rounded-lg absolute z-20"
            style={{
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
              right: '-60px', // Position the image outside the div
              top: '50px',     // Adjust the top position as needed
              width: '500px'   // Set the image width
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default KrachtdakSection;
