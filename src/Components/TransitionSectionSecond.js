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
    <section className="bg-white pb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#2E353D]">
          Een Slimme Energie-Oplossing In <span className="text-[#06627C]">4 Stappen</span>
        </h2>
        <div className='flex flex-row justify-center items-start w-full px-4 md:px-24 space-x-6 min-h-[665px]'
          style={{
            backgroundImage: 'url("/line.png")',
            backgroundSize: '550px',
            backgroundPosition: '50% 115px',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='flex flex-col justify-between items-center w-full space-y-20 relative'>
            <div className='bg-blueish-80 rounded-xl flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 1</span>
              <span className='text-white text-2xl font-bold'>Voorbereiding</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Inventariseren van de mogelijkheden om zonnepanelen te leggen</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Controleren van de meterkast</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Bekijken van de mogelijkheden voor het kabeltraject van de zonnepanelen naar de meterkast</span>
            </div>
            <img src="/arrow-right.png" alt="Arrow Right" className="absolute top-[218.8px] right-[115px]" />
            <div className='bg-[#DAE8EC] rounded-xl flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 3</span>
              <span className='text-[#06627C] text-2xl font-bold'>Installatie</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Veilige installatie</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Robuust montagemateriaal</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Conform NEN-normering</span>
            </div>
          </div>
          <div className='flex flex-col justify-between items-center w-full space-y-20 self-end relative'>
            <img src="/arrow-left.png" alt="Arrow Left" className="absolute top-[11px] left-[100px]" />
            <div className='bg-[#DAE8EC] rounded-xl flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 2</span>
              <span className='text-[#06627C] text-2xl font-bold'>Plan</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Visualisatie van het legplan</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Opbrengst berekening</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Berekenen terugverdientijd</span>
            </div>
            <img src="/arrow-left.png" alt="Arrow Left" className="absolute top-[253.8px] left-[100px]" />
            <div className='bg-blueish-80 rounded-xl flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 4</span>
              <span className='text-white text-2xl font-bold'>Service</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Instellen van de opbrengst-monitoring</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Aanvragen van de BTW-teruggave</span>              
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransitionSectionSecond;
