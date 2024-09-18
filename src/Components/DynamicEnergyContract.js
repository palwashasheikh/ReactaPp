import React from 'react';

const DynamicEnergyContract = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 justify-between items-start py-6 md:py-14 pr-4 pl-4 md:pr-0 md:pl-24">
      {/* Left Section with Teal Background */}
      <div className="md:w-[670px] mb-6 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#06627C]">
          Slim Laden Met Een <br /> Dynamisch <br /> Energiecontract
        </h2>
        <div className='flex flex-col space-y-2 mb-8'>
          <span className='text-2xl text-[#2E353D] font-bold'>Dynamische prijzen</span>                
          <p className="text-black-300 text-xl">Heb je een dynamisch energiecontract?</p>
          <p className="text-black-300 text-xl">De slimme modus start het opladen wanneer de tarieven van jouw elektriciteitsleverancier het laagst zijn.</p>
        </div>
        
        <div className='flex flex-col space-y-2'>
          <span className='text-2xl text-[#2E353D] font-bold'>Laadsessie plannen</span>          
          <p className="text-black-300 text-xl">Stel je vertrektijd en de nodige lading in en de app zorgt ervoor dat je auto klaar is om te gaan.</p>
          <p className="text-black-300 text-xl">Veranderen de plannen? Schakel de Eco-modus dan eenvoudig uit.</p>
        </div>
      </div>

      {/* Right Section with Light Gray Background */}
      <div className="flex items-center justify-center md:justify-end">
        <img src="/Rectangle.png" alt="Energy Transition" className="w-full md:w-auto max-w-full h-auto" /> {/* Replace with your actual image path */}
      </div>
    </div>
  );
};

export default DynamicEnergyContract;
