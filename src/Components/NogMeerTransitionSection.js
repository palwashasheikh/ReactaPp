import React from 'react';

const NogMeerTransitionSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 justify-between items-start py-6 md:py-14 pr-4 pl-4 md:pr-0 md:pl-24">
      {/* Left Section with Teal Background */}
      <div className="md:w-[670px] mb-6 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#06627C]">
        Nog meer voordelen van  <br /> een thuisbatterij 
        </h2>
        <p className="text-[#2E353D] mb-6 text-lg md:text-xl font-bold ">
        Gebruik met een thuisaccu de goedkoopste <br/> energieprijzen.
                </p>
        <p className="text-[#2E353D] mb-2 md:mb-2 md:pr-8 text-xl justify-center">
        Bij een dynamisch energiecontract is er geen vaste energieprijs, maar de prijs verschilt van uur tot uur. Het contract is gekoppeld aan de prijzen op de energiemarkt.
        Door de de thuisaccu te laden op uren met de laagste prijzen en te ontladen op de duurste momenten, maak je gebruik van de prijsverschillen. Op deze manier kan een accu zonder zonnepanelen voordeel opleveren. Wanneer de energieprijzen negatief zijn, krijg je hier zelfs geld voor!
          </p>
       
      </div>

      {/* Right Section with Light Gray Background */}
      <div className="flex  md:justify-end justify-end mr-[-14px] ">
        <img src="/Nogmeer.png" alt="Energy Transition" className="w-full md:w-auto max-w-full h-auto justify-end" /> {/* Replace with your actual image path */}
      </div>
    </div>
  );
};

export default NogMeerTransitionSection;
