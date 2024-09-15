import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Voorbereiding',
    description: [
      'Inventariseren van de mogelijkheden om zonnepanelen te leggen',
      'Controleren van de meterkast',
      'Bekijken van de mogelijkheden voor het kabeltraject',
    ],
  },
  {
    id: 2,
    title: 'Plan',
    description: [
      'Visualisatie van het legplan',
      'Opbrengst berekening',
      'Berekenen terugverdientijd',
    ],
  },
  {
    id: 3,
    title: 'Installatie',
    description: [
      'Veilige installatie',
      'Robuust montagemateriaal',
      'Conform NEN-normering',
    ],
  },
  {
    id: 4,
    title: 'Service',
    description: [
      'Installeren van de opbrengst-monitoring',
      'Aanvragen van de BTW-teruggave',
    ],
  },
];

const TransitionSectionSecond = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Een Slimme Energie-Oplossing In <span className="text-teal-600">4 Stappen</span>
        </h2>

        <div className="relative flex flex-col">

          {/* Step 1 */}
          <div className="relative">
            <div className="p-4 bg-[#0E7C8F] text-white rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold mb-4">Step 1: Voorbereiding</h3>
              <ul className="list-disc list-inside">
                {steps[0].description.map((desc, index) => (
                  <li key={index} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>

            {/* Horizontal line with arrow */}
            <div className="absolute top-1/2 left-full w-[40px] h-0.5 bg-[#72B2C6]"></div>
            <div className="absolute top-1/2 left-[calc(100%+40px)] w-6 h-6 bg-[#F6A501] flex items-center justify-center rounded-full">
              <span className="text-white text-xs">→</span>
            </div>
            <div className="absolute top-1/2 left-[calc(100%+55px)] w-[100px] h-0.5 bg-[#72B2C6]"></div>
          </div>

          {/* Step 2 */}
          <div className="relative mt-16 ml-[160px]">
            <div className="p-4 bg-[#CDEAF2] text-gray-600 rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold text-[#F6A501] mb-4">Step 2: Plan</h3>
              <ul className="list-disc list-inside">
                {steps[1].description.map((desc, index) => (
                  <li key={index} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>

            {/* Vertical line with arrow */}
            <div className="absolute top-full left-1/2 w-0.5 h-[40px] bg-[#72B2C6]"></div>
            <div className="absolute top-[calc(100%+40px)] left-[-30px] w-6 h-6 bg-[#F6A501] flex items-center justify-center rounded-full">
              <span className="text-white text-xs">←</span>
            </div>
            <div className="absolute top-[calc(100%+40px)] left-[-60px] w-[120px] h-0.5 bg-[#72B2C6]"></div>
          </div>

          {/* Step 3 */}
          <div className="relative mt-16 mr-[160px]">
            <div className="p-4 bg-[#F2F5F7] text-gray-600 rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold text-[#0E7C8F] mb-4">Step 3: Installatie</h3>
              <ul className="list-disc list-inside">
                {steps[2].description.map((desc, index) => (
                  <li key={index} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>

            {/* Horizontal line with arrow */}
            <div className="absolute top-1/2 left-full w-[40px] h-0.5 bg-[#72B2C6]"></div>
            <div className="absolute top-1/2 left-[calc(100%+40px)] w-6 h-6 bg-[#F6A501] flex items-center justify-center rounded-full">
              <span className="text-white text-xs">→</span>
            </div>
            <div className="absolute top-1/2 left-[calc(100%+55px)] w-[100px] h-0.5 bg-[#72B2C6]"></div>
          </div>

          {/* Step 4 */}
          <div className="relative mt-16 ml-[160px]">
            <div className="p-4 bg-[#0E7C8F] text-white rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold mb-4">Step 4: Service</h3>
              <ul className="list-disc list-inside">
                {steps[3].description.map((desc, index) => (
                  <li key={index} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransitionSectionSecond;
