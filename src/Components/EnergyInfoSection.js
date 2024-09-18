import React from 'react';

const EnergyInfoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-6 mb-12">
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
        {/* First Card */}
        <div className="bg-[#06627C] text-white p-8 rounded-lg shadow-lg w-full md:w-[570px]">
          <h3 className="text-xl font-bold mb-4">Dynamisch Energiecontract</h3>
          <p className="text-base">
            Optimaliseer je rendement van een dynamisch energiecontract. Voorkom terugleveren tegen een lage energieprijs en laad de accu extra op bij lage energietarieven. Zo profiteer je maximaal van je eigen groene stroom en de goedkoopste energieprijs.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-[#06627C] text-white p-8 rounded-lg shadow-lg w-full md:w-[570px]">
          <h3 className="text-xl font-bold mb-4">Meer Beschikbaar Vermogen</h3>
          <p className="text-base">
            Huishoudens worden steeds meer elektrisch. Als tegelijk bijvoorbeeld een autolader, kookplaat en warmtepomp worden ingeschakeld kan dat meer vermogen vragen dan de huisaansluiting kan leveren. De beschikbare energie in de accu geeft dan extra vermogen.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="w-full flex justify-center">
        {/* Third Card */}
        <div className="bg-[#06627C] text-white p-6 rounded-lg shadow-lg w-full md:w-[1160px]">
          <h3 className="text-xl font-bold mb-4">
            Voorkomen Van Uitvallende Omvormers Door Hoge Netspanning
          </h3>
          <p className="text-base">
            Zonnepanelen zijn in Nederland zo’n groot succes dat het energienet het op sommige momenten niet kan bijbenen. Er wordt dan zoveel energie teruggeleverd dat de netspanning oploopt en de omvormer verplicht uitschakelt. Door op dat moment de thuisaccu in te schakelen voorkom je energieverlies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyInfoSection;
