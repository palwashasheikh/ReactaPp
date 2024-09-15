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
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Lees Meer Over</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {cards.map((card, index) => (
            <div key={index} className="bg-slate-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-sm font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a
                  href="#"
                  className="text-yellow-500 font-bold flex items-center"
                >
                  Lees verder{' '}
                  <span className="ml-2 text-yellow-500">&rarr;</span>
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
