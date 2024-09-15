import React from 'react';

const SolarPanelOptions = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Hoeveel Zonnepanelen Heb In Nodig
        </h2>
        <p className="text-gray-600  mb-12">
          Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen, povidat difbafel.
          Pseudofil spell stenev emedan förväntis. Ipsun fiskdpejkur pusere. Sperade
          lasode alt gobigen, povidat.
        </p>

        {/* Solar Panel Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Option 1 */}
          <div className="bg-[#06627C] text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#FFAB10]">8 Zonnepanelen</h3>
            <p className="mt-2">Tweepersoonshuishouden</p>
            <ul className="mt-4 space-y-2">
              <li>Opbrengst: 3,200 kWh</li>
              <li>Opbrengst: €1,280 per jaar</li>
            </ul>
          </div>

          {/* Option 2 */}
          <div className="bg-[#06627C] text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#FFAB10]">10 Zonnepanelen</h3>
            <p className="mt-2">Klein Gezin</p>
            <ul className="mt-4 space-y-2">
              <li>Opbrengst: 4,000 kWh</li>
              <li>Opbrengst: €1,600 per jaar</li>
            </ul>
          </div>

          {/* Option 3 */}
          <div className="bg-[#06627C] text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#FFAB10]">15 Zonnepanelen</h3>
            <p className="mt-2">Groot Gezin</p>
            <ul className="mt-4 space-y-2">
              <li>Opbrengst: 6,000 kWh</li>
              <li>Opbrengst: €2,400 per jaar</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white mt-12 py-8 px-6 max-w-xl mx-auto rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#06627C]">
            Welke Opleiding Past Bij Jou?
          </h3>
          <button className="mt-4 px-6 py-2 bg-[#FFAB10] text-white rounded-lg font-medium">
            Doe de test!
          </button>
          <p className="mt-2 text-[#2E353D]">Resultaat direct op je scherm</p>
        </div>
      </div>
    </section>
  );
};

export default SolarPanelOptions;
