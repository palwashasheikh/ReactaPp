import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Importing FontAwesome check icon

const KrachtdakSection = () => {
  return (
    <div className="bg-teal-900 text-white py-10">
      <div className="max-w-4xl  max-h-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
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
            <img src="/badge1.png" alt="Badge 1" className="h-12" />
            <img src="/badge2.png" alt="Badge 2" className="h-12" />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2">
          <img 
            src="/Rectangleimage.png" 
            alt="Worker with Solar Panel" 
            className="rounded-lg w-full h-auto" // 'h-auto' ensures the image maintains aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default KrachtdakSection;
