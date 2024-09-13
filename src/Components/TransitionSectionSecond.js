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

        <div className="relative">

          {/* Step 1 */}
          <div className="relative">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Step 1: Voorbereiding</h3>
              <ul className="list-disc list-inside text-gray-600">
                {steps[0].description.map((desc, index) => (
                  <li key={index} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>

            {/* Line from Step 1 to Step 2 */}
            <div className="absolute top-1/2 left-full w-8 h-0.5 bg-teal-600"></div>
            <div className="absolute top-1/2 left-[calc(100%+1rem)] transform translate-y-[-50%] w-6 h-6 bg-yellow-500 flex items-center justify-center rounded-full">
              <span className="text-white text-xs">→</span>
            </div>
            <div className="absolute top-1/2 left-[calc(100%+1.5rem)] w-12 h-0.5 bg-teal-600"></div>
          </div>

          {/* Step 2 */}
          <div className="relative mt-12 ml-48">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Step 2: Plan</h3>
              <ul className="list-disc list-inside text-gray-600">
                {steps[1].description.map((desc, index) => (
                  <li key={index} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>

            {/* Line from Step 2 to Step 3 */}
            <div className="absolute top-full left-1/2 w-0.5 h-16 bg-teal-600"></div>
            <div className="absolute top-[calc(100%+4rem)] left-0 w-6 h-6 bg-yellow-500 flex items-center justify-center rounded-full">
              <span className="text-white text-xs">←</span>
            </div>
            <div className="absolute top-[calc(100%+4rem)] left-[-1.5rem] w-12 h-0.5 bg-teal-600"></div>
          </div>

          {/* Step 3 */}
          <div className="relative mt-12 mr-48">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Step 3: Installatie</h3>
              <ul className="list-disc list-inside text-gray-600">
                {steps[2].description.map((desc, index) => (
                  <li key={index} className="mb-2">{desc}</li>
                ))}
              </ul>
            </div>

            {/* Line from Step 3 to Step 4 */}
            <div className="absolute top-1/2 left-full w-8 h-0.5 bg-teal-600"></div>
            <div className="absolute top-1/2 left-[calc(100%+1rem)] transform translate-y-[-50%] w-6 h-6 bg-yellow-500 flex items-center justify-center rounded-full">
              <span className="text-white text-xs">→</span>
            </div>
            <div className="absolute top-1/2 left-[calc(100%+1.5rem)] w-12 h-0.5 bg-teal-600"></div>
          </div>

          {/* Step 4 */}
          <div className="relative mt-12 ml-48">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md w-[570px]">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">Step 4: Service</h3>
              <ul className="list-disc list-inside text-gray-600">
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
