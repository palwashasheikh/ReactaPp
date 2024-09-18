import React from 'react';

const CustomSystemSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 justify-start items-start pt-6 md:pt-20 pb-24 md:pb-28 pr-4 md:pr-24 relative">
      {/* Right Section with Light Gray Background */}
      <div className="flex items-start justify-center md:justify-start mr-12 relative w-1/3 h-1/2">
        <img src="/Rectangle4.png" alt="Systeem Op Maat" className="w-full md:w-auto max-w-full h-auto absolute" /> {/* Replace with your actual image path */}
      </div>
      {/* Left Section with Teal Background */}
      <div className="md:w-[670px] mb-6 md:mb-0">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black-300">
        Systeem <span className="text-orangeish-500">Op Maat</span>
      </h2>
      <p className="text-black-300 mb-2 md:mb-4 text-xl">Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen, povidat difbafel. Pseudofil spell stenev emedan förväntis keskapet.</p>
      <p className="text-black-300 text-xl">Sum fiskdpejkur pusere. Sperade lasode alt gobigen, povidat difbafel. Pseudofil spell stenev emedan förväntis keskapet.</p>
      </div>  
    </div>
  );
};

export default CustomSystemSection;
