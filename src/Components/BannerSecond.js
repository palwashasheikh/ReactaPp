import React from 'react';

const BannerSecond = () => {
  return (
    <section className="flex flex-col md:flex-row bg-white justify-between items-start py-6 md:py-20 px-4 md:pr-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Images */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mb-6 md:mb-0 w-full md:w-[730px]">
            <img src="/Rectangle 15.png" alt="" className="w-full md:w-auto" />
            <img src="/Rectangle 16.png" alt="" className="w-full md:w-auto" />
          </div>
          
          {/* Right Text */}
          <div className="text-left ml-5 md:ml-20">
            <h1 className="text-2xl md:text-5xl font-bold !leading-[36px] md:!leading-[54px] text-[#2E353D]">
              Krachtdak Adviseert En <br/> Installeert Betrouwbare En<br/>
              <span className="text-blueish-80">Veilige Energie-Oplossingen</span>
            </h1>
            <ul className="mt-6 md:mt-8 space-y-4 md:space-y-5 text-gray-600">
              <li className="flex items-start text-lg md:text-xl">
                <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />
                Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet.
              </li>
              <li className="flex items-start text-lg md:text-xl">
                <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />                
                Fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet.
              </li>
              <li className="flex items-start text-lg md:text-xl">
                <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-1 md:mt-2" />                
                Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
