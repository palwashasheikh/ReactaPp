import React from 'react';

const BatteryAdviceSection = () => {
  return (
    <div className="relative bg-[#06627C] py-10 flex flex-col items-center mb-12 w-full">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center sm:block md:hidden">
  Is een thuisbatterij <br /> interessant? Vraag <br /> advies aan Krachtdak!
</h1>

<h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center hidden md:block">
  Is een thuisbatterij interessant? Vraag <br /> advies aan Krachtdak!
</h1>

      

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl w-full px-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2  mt-[5.6rem]">
          <img src="/Energyadvice.png" alt="Thuisbatterij" className="rounded-lg shadow-lg w-full h-auto" /> {/* Replace with actual image path */}
        </div>

        {/* Text Section */}
        <div className="absolute md:bottom-[-96px] relative w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
            Is Een Thuisbatterij Interessant? Vraag Advies Aan Krachtdak!
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Met de komst van energie management, laadplannen en dynamische energiecontracten wordt de aanschaf van een thuisbatterij steeds interessanter. Zeker nu de salderingsregeling naar verwachting wordt afgebouwd.
          </p>
          <p className="text-gray-700 text-base md:text-lg mt-4">
            Wanneer de vergoeding voor terugleveren steeds lager wordt, is het opslaan van zonne-energie steeds aantrekkelijker. Je bent zo namelijk steeds minder afhankelijk van het elektriciteitsnet. Bovendien maken de stijgende energietarieven en de kabinetsplannen thuisaccu’s steeds interessanter.
          </p>
          <p className="text-gray-700 text-base md:text-lg mt-4">
            De keuze voor de juiste thuisbatterij is niet zomaar gemaakt. Thuisbatterijen zijn technisch complexe producten, en een keuze maken is moeilijk. Welke opslagcapaciteit past er bij jou? Wat voor merk voldoet aan mijn wensen? Waar k Groepen kast? 
          </p>
          <p className="text-gray-700 text-base md:text-lg mt-4">
            Met toevoegingen van een thuisaccu naast zonnepanelen zal de elektrische installatie in veel gevallen niet meer voldoen. Laat een thuisaccu daarom altijd alleen door een erkende installateur plaatsen en aansluiten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BatteryAdviceSection;
