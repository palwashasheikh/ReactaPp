import React from 'react';

const ZonnepanelenBanner = () => {
  return (
    <div className="text-white py-20 md:py-40"
    style={{ backgroundImage: 'url("/sungrow-emea-ceTSHQ0qars-unsplash 2.png")', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
          

    >
      {/* Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold md:!leading-[65px]">
        Verduurzaam  Je <br /> Dak Met Zonne- Energie
        </h1>
        <p className='pt-6'>Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, <br /> pavidat difåbel. Pseudofili spell stenov emedan förväntis.</p>
      </div>

      {/* Icon Section */}
      <div className="md:w-[450px] bg-white bg-opacity-10 rounded-lg p-6">
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
            <li className="flex items-center shadow-slate-50	">
              <div className="bg-amber-500 rounded-full mr-4 p-1.5 w-12 h-12 flex justify-center items-center shadow-slate-50	">
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

export default ZonnepanelenBanner;
