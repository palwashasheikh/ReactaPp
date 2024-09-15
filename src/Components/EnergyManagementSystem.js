import React from 'react';

const EnergyManagementSystem = () => {
  return (
    <section className="relative bg-[#06627C40] py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-start lg:space-x-10 space-y-6 lg:space-y-0 relative">
        
        {/* Mobile Image */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start relative lg:-ml-10 lg:-mt-[10.5rem]"> {/* Added relative positioning and negative margin */}
          <img
            src="/iPhoneBG2-1-969x1536 1.png" // Replace with actual image path
            alt="Mobile Display"
            className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-full lg:relative lg:-left-10" // Added lg:relative and lg:-left-10 for overlap effect
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3  py-12 px-5">
          {/* Title */}
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Energie Management Systeem
          </h2>

          {/* Accordion */}
            {/* First Accordion Item */}
            <div className="border-b ">
              <button
                className="flex justify-between w-full py-4 text-left text-[#2E353D] font-semibold focus:outline-none"
                aria-expanded="false"
              >
                Hoe Werkt Het Energie Management Systeem?
                <span className="ml-2"><svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.44 20.0667L14.1333 11.3733C15.16 10.3467 16.84 10.3467 17.8667 11.3733L26.56 20.0667" stroke="#2E353D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
              </button>
              <div className="mt-2 text-gray-600">
                <p>
                  Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen,
                  povidat difbafel. Pseudofil spell stenev emedan förväntis
                  kaskepat. Sum fiskdpejkur pusere. Sperade lasode alt gobigen,
                  povidat difbafel.
                </p>
              </div>
            </div>

            {/* Second Accordion Item */}
            <div className="border-b">
              <button
                className="flex justify-between w-full py-4 text-left text-gray-700 font-semibold focus:outline-none"
                aria-expanded="false"
              >
                Hoe Werkt Het Energie Management Systeem?
                <span className="ml-2"><svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.56 11.9333L17.8667 20.6267C16.84 21.6533 15.16 21.6533 14.1333 20.6267L5.44 11.9333" stroke="#2E353D" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
              </button>
              <div className="mt-2 ">
                <p>
                  Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen,
                  povidat difbafel. Pseudofil spell stenev emedan förväntis
                  kaskepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default EnergyManagementSystem;
