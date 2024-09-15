import React from 'react';

const ZonnepanelenBanner = () => {
  return (
    <div className="bg-teal-900 text-white py-20"
    style={{ backgroundImage: 'url("/sungrow-emea-ceTSHQ0qars-unsplash 2.png")' }}
>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
          style={{ backgroundImage: 'url("/sungrow-emea-ceTSHQ0qars-unsplash 2.png")' }}

    >
      {/* Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Verduurzaam  Je Dak Met Zonne- <br />Energie
        </h1>
        <p className='pt-6'>Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis. </p>
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

export default ZonnepanelenBanner;
