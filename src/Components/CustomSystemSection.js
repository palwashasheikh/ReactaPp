import React from 'react';

const CustomSystemSection = () => {
  return (
    <section className="bg-gray-100 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Image that is out of the main div */}
        <div className="lg:w-1/2 w-full relative">
          <img 
            src="Rectangle3.png" 
            alt="System Image" 
            className="w-full h-auto lg:relative lg:-top-12 lg:-left-8"
          />
        </div>

        {/* Text content on the right */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl font-semibold text-gray-800">Systeem <span className="text-yellow-400">Op Maat</span></h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen, povidat difbafel. Pseudofil spell stenev emedan förväntis keskapet.
          </p>
          <p className="mt-4 text-gray-600">
            Sum fiskdpejkur pusere. Sperade lasode alt gobigen, povidat difbafel. Pseudofil spell stenev emedan förväntis keskapet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomSystemSection;
