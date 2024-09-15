import React from 'react';

const SolarPanelSection = () => {
  return (
    <section className="py-16 bg-[#06627C] relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 w-full text-white">
          <h2 className="text-4xl font-semibold mb-4">Hoogwaardige Zonnepanelen</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-yellow-400">HOOG VERMOGEN</h3>
            <p className="mt-2">
              De zonnepanelen van Krachtdak hebben een hoog vermogen. Wij gebruiken het nieuwste type zonnepanelen met een
              uitstekende prijs/prestatie verhouding.
            </p>
            <a href="/" className="text-yellow-400 mt-2 block">Lees verder: Wat is een goed zonnepaneel? →</a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-yellow-400">LANGDURIGE GARANTIES</h3>
            <p className="mt-2">
              Betrouwbaarheid en goede garantieregelingen zijn van groot belang. Krachtdak werkt daarom uitsluitend met de
              grootste en meest solide fabrikanten ter wereld.
            </p>
            <a href="/" className="text-yellow-400 mt-2 block">Lees verder: Wat is een goed merk zonnepanelen? →</a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 w-full lg:mt-0 mt-8 relative">
          <img 
            src="solarpanel.png" // Replace this with the actual image path
            alt="Zonnepaneel"
            className="w-full h-auto object-contain shadow-lg relative"
            style={{ 
              transform: 'rotateY(0deg)', 
              perspective: '1000px',
              bottom: '120px', // Moves the image out of the div on top
              zIndex: 10
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default SolarPanelSection;
