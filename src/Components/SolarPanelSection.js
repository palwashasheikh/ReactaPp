import React from 'react';

const SolarPanelSection = () => {
  return (
    <section className="py-16 bg-[#06627C] relative mt-20 mb-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 w-full text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 !leading-[60px]">Hoogwaardige Zonnepanelen</h2>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-white flex flex-row justify-start items-center"><img src="/dot.png" alt="dot" className='mr-2.5' />HOOG VERMOGEN</h3>
            <p className="mt-2 ml-6">
              De zonnepanelen van Krachtdak hebben een hoog vermogen. Wij gebruiken het nieuwste type zonnepanelen met een
              uitstekende prijs/prestatie verhouding.
            </p>
            <a href="/" className="text-[#FFAB10] ml-6 mt-2 flex justify-start items-center text-lg">Lees verder: Wat is een goed zonnepaneel? <img src="/arrow.svg" alt="Arrow" className="ml-5" /></a>
          </div>

          <div>            
            <h3 className="text-2xl font-semibold text-white flex flex-row justify-start items-center"><img src="/dot.png" alt="dot" className='mr-2.5' />LANGDURIGE GARANTIES</h3>
            <p className="mt-2 ml-6">
              Betrouwbaarheid en goede garantieregelingen zijn van groot belang. Krachtdak werkt daarom uitsluitend met de
              grootste en meest solide fabrikanten ter wereld.
            </p>
            <a href="/" className="text-[#FFAB10] mt-2 flex justify-start items-center text-lg ml-6">Lees verder: Wat is een goed merk zonnepanelen? <img src="/arrow.svg" alt="Arrow" className="ml-5" /></a>            
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 w-full relative min-h-[445px]">
          <img 
            src="panou-solar-ja-solar.png" // Replace this with the actual image path
            alt="Zonnepaneel"
            className="w-full h-auto object-contain absolute"
            style={{ 
              transform: 'rotateY(0deg)', 
              perspective: '1000px',
              bottom: '0', // Moves the image out of the div on top
              zIndex: 10
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default SolarPanelSection;
