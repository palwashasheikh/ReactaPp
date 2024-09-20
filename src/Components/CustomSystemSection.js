import React from 'react';

const CustomSystemSection = () => {
  return (
    <div className="relative bg-slate-100 flex flex-col md:flex-row justify-between items-start pt-6 md:pt-20 pb-24 md:pb-[13rem] px-4 md:px-24">
      
      {/* Right Section with Text */}
      <div className="relative z-10 w-full md:w-1/2 md:pl-12 md:ml-[470px]"> 
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-black md:text-left text-center">
          Systeem <span className="text-orange-500">Op Maat</span>
        </h2>
        <p className="text-lg md:text-xl text-black mb-4 md:text-left">
          Lorem ipsum fiskdpejkur pusere. Sperade lasode att gobigen, povidat difbafel. Pseudofil spell stenov emedan förväntis keskapet.
        </p>
        <p className="text-lg md:text-xl text-black md:text-left">
          Sum fiskdpejkur pusere. Sperade lasode att gobigen, povidat difbafel. Pseudofil spell stenov emedan förväntis keskapet.
        </p>
      </div>

      {/* Left Section with Image */}
      <div className="relative w-full md:w-1/2 md:absolute md:left-[-100px] md:top-20 md:h-auto order-last md:order-first">
        <img src="/Rectangle4.png" alt="Systeem Op Maat" className="rounded-lg w-full h-auto max-w-full" />
      </div>

    </div>
  );
};

export default CustomSystemSection;
