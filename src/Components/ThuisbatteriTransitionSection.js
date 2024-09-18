import React from 'react';

const ThuisbatteriTransitionSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 justify-between items-start py-8 md:py-16 px-6 md:px-[15rem] mb-12 gap-6 md:gap-8"> {/* Added gap class */}
      {/* Left Section */}
      <div className="md:w-[450px] mb-6 md:mb-0"> {/* Reduced width */}
        <h2 className="text-1xl md:text-4xl font-bold mb-4 text-[#FFAB10]">
          Onafhankelijkheid <span className="text-black"> Met
            <br /> Een Thuisaccu</span>
        </h2>
        {/* New Section Added */}
        <p className="text-[#2E353D] mb-6 text-lg md:text-xl font-medium">
          Bij grote prijsschommelingen of nieuwe heffingen ben je met een thuisbatterij goed voorbereid.
        </p>
        <p className="text-gray-700 mb-4 text-lg md:text-xl">
          Een thuisbatterij (ook wel thuisaccu) wordt overdag volgeladen met zonne-energie die je niet direct verbruikt. De opgeslagen energie kun je 's avonds en 's ochtends gebruiken als stroomvoorziening wanneer je zonnepanelen niet genoeg energie zelf opwekken.
        </p>
        <p className="text-gray-700 mb-4 text-lg md:text-xl">
          Hierdoor hoef je minder energie van het net af te halen en maak je dus veel meer gebruik van je eigen zonne-energie. Door het niet terugleveren ontlast je het energienet en vergroot je je energie onafhankelijkheid.
        </p>
        <p className="text-gray-700 text-lg md:text-xl">
          Om onaangename verrassingen door stijgende energieprijzen en terugleverheffingen te voorkomen, biedt een thuisbatterij uitkomst.
        </p>
      </div>

      {/* Right Section with Responsive Image */}
      <div className="flex justify-center items-center w-full md:w-auto">
        <img 
          src="/Closeup.png" 
          alt="Energy Transition" 
          className="w-full h-auto md:w-[400px] md:h-[500px] object-cover rounded-lg shadow-lg" 
        /> {/* Reduced image size */}
      </div>
    </div>
  );
};

export default ThuisbatteriTransitionSection;
