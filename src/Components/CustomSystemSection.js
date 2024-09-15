import React from 'react';

const CustomSystemSection = () => {
  return (
    <section className="bg-gray-100 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image that is out of the main div */}
        <div className="lg:w-1/2 w-full relative lg:mr-8"> {/* Added margin on right for spacing */}
          <img 
            src="Rectangle4.png" 
            alt="System Image" 
            className="w-full h-auto lg:absolute lg:-top-6 lg:left-[12rem] lg:w-[380px] shadow-lg"
            style={{ zIndex: 10 }}
          />
        </div>

        {/* Text content on the right */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl font-semibold text-gray-800 lg:ml-0"> {/* Added margin-left for alignment */}
            Systeem <span className="text-yellow-400">Op Maat</span>
          </h2>
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
