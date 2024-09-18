import React from 'react';

const EnergyManagementSection = () => {
  return (
    <div className="py-10 md:py-16 flex justify-center items-center bg-white">
      {/* Content Container */}
      <div className="max-w-5xl px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6 leading-tight">
          Handelen In Energie Met Inteligent Energie Management Systeem
        </h2>

        {/* Paragraphs */}
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Optimaliseer jouw financiële voordeel door je thuisbatterij te koppelen aan de dynamische energiemarkt. Door slimme sturing op jouw thuisbatterij de beste mix van laden & ontladen bepaald.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Daarbij wordt rekening gehouden met de productie van je zonnepanelen, de totale stroom in- & verkoop van je huishouden, (groot)verbruikers in huis, de dimensionering van je thuisbatterij, de prijzen op de elektriciteitsmarkten, wanneer je regelmatig thuis bent en meer.
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-4">
          Wanneer op een later moment op de dag de energieprijzen hoger zijn, zal de thuisbatterij de overtollige opgeslagen energie tegen deze duurdere prijs weer verkopen. Zo verdien jij volledig automatisch geld met jouw dynamische energiemarktcontract. Geen dagelijks gedoe met instellingen en een app, maar gewoon simpel het algoritme zijn werk laten doen!
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          Het werkt dóók zonder zonnepanelen. Zo bespaar jij maximaal op je energierekening.
        </p>
      </div>
    </div>
  );
};

export default EnergyManagementSection;
