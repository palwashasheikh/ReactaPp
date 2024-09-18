import React from 'react';

const SolarPanelOptions = () => {
  return (
    <section className="py-16">
      <div className="mx-auto px-4 md:px-24">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-left mb-6">
          Hoeveel Zonnepanelen Heb In Nodig
        </h2>
        <p className="text-[#2E353D] mb-6 text-xl font-semibold">
          Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen, povidat difbafel.
          Pseudofil spell <br /> stenev emedan förväntis. Ipsun fiskdpejkur pusere. Sperade
          lasode alt gobigen, povidat.
        </p>

        {/* Solar Panel Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option 1 */}
          <div className="bg-[#06627C] text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#FFAB10] border-b-[1px] border-[#FFFFFF33] pb-3 mb-3">8 Zonnepanelen</h3>
            <p className="text-xl font-semibold">Tweepersoonshuishouden</p>
            <ul className="mt-4 space-y-2 list-disc pl-7">
              <li>Opbrengst: 3,200 kWh</li>
              <li>Opbrengst: €1,280 per jaar</li>
            </ul>
          </div>

          {/* Option 2 */}
          <div className="bg-[#06627C] text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#FFAB10] border-b-[1px] border-[#FFFFFF33] pb-3 mb-3">10 Zonnepanelen</h3>
            <p className="text-xl font-semibold">Klein Gezin</p>
            <ul className="mt-2 space-y-2 list-disc pl-7">
              <li>Opbrengst: 4,000 kWh</li>
              <li>Opbrengst: €1,600 per jaar</li>
            </ul>
          </div>

          {/* Option 3 */}
          <div className="bg-[#06627C] text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#FFAB10] border-b-[1px] border-[#FFFFFF33] pb-3 mb-3">15 Zonnepanelen</h3>
            <p className="text-xl font-semibold">Groot Gezin</p>
            <ul className="mt-2 space-y-2 list-disc pl-7">
              <li>Opbrengst: 6,000 kWh</li>
              <li>Opbrengst: €2,400 per jaar</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white mt-12 py-8 w-2/5 mx-auto rounded-lg shadow-md text-center flex flex-col space-y-6">
          <h3 className="text-3xl font-bold text-[#06627C]">
            Welke Opleiding Past Bij Jou?
          </h3>
          <button className="px-6 py-4 bg-[#FFAB10] text-white rounded-lg font-medium w-1/3 mx-auto">
            Doe de test!
          </button>
          <p className="text-[#2E353D] text-xl font-semibold">Resultaat direct op je scherm</p>
        </div>
      </div>
    </section>
  );
};

export default SolarPanelOptions;
