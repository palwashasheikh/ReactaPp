import React from 'react';

const ChargerInfo = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            <span className="text-yellow-500">Voordelig Laden</span> Met Een Laadpaal Thuis
          </h1>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Thuis betaal je een lagere prijs per kWh dan bij een publieke laadpaal. Als je deze stroom ook nog zelf produceert met je zonnepanelen, dan is dat nog eens extra voordelig.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed ml-2">
            Met onze laadoplossingen voor thuis is het tanken van je auto moeiteloos.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Plan je oplaadsessie met de app en je auto zal automatisch laden terwijl jij slaapt of aan het eten bent.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src="/zaptec_go_midnight-blue_TURNTABLE_v009_Midnight_Blue_1500px-1 1.png" // Replace with the actual image path
            alt="Charger"
            className="w-full h-auto"
          />
          {/* Info box overlay at the bottom right */}
          <div className="absolute bottom-[-1rem] right-19 w-[220px] h-[95px] mr-4  border border-yellow-400 rounded-lg p-2 shadow-lg">
            <p className="text-sm text-[#2E353D]">
                Thuis betaal je een lagere prijs per kWh dan bij een publieke laadpaal. Als je deze stroom ook nog zelf...
            </p>
            </div>
            {/* Small top-right info box */}
            <div className="absolute top-4 right-[-2rem] w-[220px] h-[95px] border border-yellow-400 rounded-lg  p-2 shadow-lg">
            <p className="text-sm text-[#2E353D]">
                Met onze laadoplossingen voor thuis is het tanken van je auto moeiteloos.
            </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ChargerInfo;
