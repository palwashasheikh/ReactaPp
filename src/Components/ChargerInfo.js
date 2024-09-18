import React from 'react';

const ChargerInfo = () => {
  return (
    <div className="bg-[#06627C]/15 py-20 px-4 md:px-24">
      <div className="w-full mx-auto px-6 flex flex-col md:flex-row items-start justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            <span className="text-yellow-500">Voordelig Laden</span> Met Een Laadpaal Thuis
          </h1>
          <p className="mt-6 leading-relaxed text-[#2E353D] font-semibold">
            Thuis betaal je een lagere prijs per kWh dan bij een publieke laadpaal. Als je deze stroom ook nog zelf produceert met je zonnepanelen, dan is dat nog eens extra voordelig.
          </p>
          <p className="mt-4 text-[#2E353D] font-semibold leading-relaxed">
            Met onze laadoplossingen voor thuis is het tanken van je auto moeiteloos.
          </p>
          <p className="mt-4 text-[#2E353D] font-semibold leading-relaxed">
            Plan je oplaadsessie met de app en je auto zal automatisch laden terwijl jij slaapt of aan het eten bent.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative mx-auto">
          <img
            src="/zaptec_go_midnight-blue_TURNTABLE_v009_Midnight_Blue_1500px-1 1.png" // Replace with the actual image path
            alt="Charger"
            className="w-[424px] h-auto mx-auto"
          />
          {/* Info box overlay at the bottom right */}
            <div className="absolute bottom-[-1rem] right-19 w-[250px] h-[95px] mr-4 border border-yellow-400 rounded-lg p-2 shadow-lg bg-white/5 backdrop-blur-md">
              <p className="text-[#2E353D] px-2">
                Thuis betaal je een lagere <br/> prijs per kWh dan bij een <br/> publieke laadpaal. Als je deze
              </p>
            </div>
            {/* Small top-right info box */}
            <div className="absolute top-4 right-[-2rem] w-[250px] h-[95px] border border-yellow-400 rounded-lg p-2 shadow-lg bg-white/5 backdrop-blur-md">
              <p className="text-[#2E353D]">
                Met onze laadoplossingen voor thuis is het tanken van je auto moeiteloos.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChargerInfo;
