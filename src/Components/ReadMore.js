import React from 'react';

const ReadMoreSection = () => {
  const cards = [
    {
      title: 'Zonnepanelen',
      description: 'Veilig installatie Controle groepenkast Maximaal rendement',
      image: '/imager1.png',
    },
    {
      title: 'Autoladers',
      description: 'Betrouwbare installatie Beveiliging voor overbelasting Voorbereid op de toekomst',
      image: '/imager1.png',
    },
    {
      title: 'Thuisbatterij',
      description: 'Betrouwbare installatie Energie opslaan voor later Klaar voor de toekomst',
      image: '/imager1.png',
    },
    {
      title: 'Energiemanagement Systeem',
      description: 'Veilig installatie Controle groepenkast Maximaal rendement',
      image: '/imager1.png',
    },
  ];

  return (
    <div className="pt-8 md:pt-36">
      <div className="px-4 md:px-24 mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold md:mb-12 mb-4">Lees Meer Over</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-slate-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full object-cover rounded-lg p-2"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a
                  href="#"
                  className="text-orangeish-500 font-medium flex items-center justify-start text-lg"
                >
                  Lees verder{' '}
                  <img src="/arrow.svg" alt="Arrow" className="ml-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreSection;
