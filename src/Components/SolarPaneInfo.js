import React from "react";

const SolarPanelInfo = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 max-w-5xl mx-auto">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Wat Is Een Goed Zonnepaneel?
      </h1>

      {/* Introductory Text */}
      <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
        Zonnepanelen kunnen op verschillende manieren met elkaar vergeleken worden. Het punt waar 
        een zonnepaneel vaak aangewezen is het Wattpiek vermogen. Maar wat is eigenlijk het Wattpiek 
        vermogen van een zonnepaneel en als je een paneel hebt met een hoog Wattpiek vermogen heb je 
        dan ook een goed paneel?
      </p>

      {/* Subsection 1 */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Wattpiek vermogen en standaard omstandigheden
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Het vermogen dat een paneel maximaal ontwikkeld onder standaard omstandigheden wordt het 
          Wattpiek vermogen van het paneel genoemd. Maar wat zijn dan die standaard omstandigheden? 
          Hiervoor worden zijn een aantal criteria vastgelegd. De invalshoek van het licht moet loodrecht zijn, 
          het licht moet een vermogen hebben van 1000 Watt, geen wind, en de lucht moet een bepaalde 
          samenstelling hebben. Onder deze omstandigheden en bij een temperatuur van 25 graden wordt 
          het vermogen in Wattpiek van het paneel gemeten. Doordat de omstandigheden gestandaardiseerd zijn, 
          wordt het mogelijk om verschillende soorten panelen te vergelijken.
        </p>
      </div>

      {/* Subsection 2 */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-7">
          Temperatuurgevoeligheid van zonnepanelen
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          De temperatuur van 25 graden is een belangrijke factor. Is deze een paar graden warmer of koeler 
          dan is de opbrengst kleiner of groter. Zonnecellen hebben namelijk de eigenschap gevoelig te zijn 
          voor temperatuur. Warmte beïnvloed de opbrengst negatief. Daar is een warme zomerdag dus ook 
          een ongunstig omstandigheid dan een koele zonnige dag in de lente. De mate waarin een zonnepaneel 
          is daarom eveneens een belangrijk punt om de kwaliteit van een zonnepaneel op te beoordelen.
        </p>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-7 mt-4">
        Afmeting van een zonnepaneel
                </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Het Wattpiek vermogen is het vermogen dat het paneel oplevert. Echter de afmetingen van zonnepanelen zijn niet gelijk. Een groter paneel zal meer opwekken. Om een goed vergelijk te maken moet het rendement per vierkante meter bekeken worden en moet dus het wattpiekvermogen per vierkante meter vergeleken worden. 
        </p>
        <p>
        Een groot paneel met veel Wattpiek vermogen en grotere afmetingen kan ook juist onhandig zijn om een passend legplan te maken voor de beschikbare ruimte op het dak.
        </p>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-4">
        Degradatie
                </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Het vermogen van een zonnepaneel blijft niet altijd hetzelfde. Dit neemt af als het zonnepaneel ouder wordt. De mate, waarin het vermogen afneemt (de degradatie), heeft dus invloed op de opbrengst van een zonnepaneel. Dat maakt ook degradatie een belangrijk kwaliteitsaspect. Hele goede zonnepanelen kennen een lage degradatie.     
           </p>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-4  ">
        Rendement bij lage lichtintensiteit
                </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        Een ander aspect waarmee een zonnepaneel zich kan onderscheiden is door goede 'low light' eigenschappen, het rendement blijft in stand bij lage lichtintensiteit           </p>
      </div>
    </div>
  );
};

export default SolarPanelInfo;
