import React, { useState, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isMobile 
    ? 'url("/vertical_line.png")'
    : 'url("/line.png")';

  const backgroundSize = isMobile ? 'contain' : '550px';
  const backgroundPosition = isMobile ? 'center' : '50% 115px';

  return (
    <section className="bg-white pb-24 mt-16 md:mt-0">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#2E353D]">
          Een Slimme Energie-Oplossing In <span className="text-[#06627C]">4 Stappen</span>
        </h2>
        <div className='flex md:flex-row flex-col justify-center items-start w-full px-4 md:px-24 space-x-6 min-h-[665px]'
          style={{
            backgroundImage,
            backgroundSize,
            backgroundPosition,
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='flex flex-col justify-between items-center w-full space-y-8 md:space-y-20 relative'>
            <div className='bg-blueish-80 rounded-xl flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 1</span>
              <span className='text-white text-2xl font-bold'>Voorbereiding</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Inventariseren van de mogelijkheden om zonnepanelen te leggen</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Controleren van de meterkast</span>
              <span className='text-xl text-white font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Bekijken van de mogelijkheden voor het kabeltraject van de zonnepanelen naar de meterkast</span>
            </div>
            <img src="/arrow-right.png" alt="Arrow Right" className="absolute top-[218.8px] right-[115px] hidden md:block" />
            <div className='bg-[#DAE8EC] rounded-xl hidden md:flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 3</span>
              <span className='text-[#06627C] text-2xl font-bold'>Installatie</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Veilige installatie</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Robuust montagemateriaal</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Conform NEN-normering</span>
            </div>
            <img src="/down-arrow.png" alt="Arrow Down" className="flex items-center justify-center md:hidden" />
            <div className='bg-[#DAE8EC] rounded-xl md:hidden flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 2</span>
              <span className='text-[#06627C] text-2xl font-bold'>Plan</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Visualisatie van het legplan</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Opbrengst berekening</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Berekenen terugverdientijd</span>
            </div>
          </div>
          <div className='flex flex-col justify-between items-center w-full space-y-8 md:space-y-20 self-end relative'>
            <img src="/arrow-left.png" alt="Arrow Left" className="absolute top-[11px] left-[100px] hidden md:block" />
            <img src="/down-arrow.png" alt="Arrow Down" className="flex items-center justify-center md:hidden" />
            <div className='bg-[#DAE8EC] rounded-xl flex md:hidden flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 3</span>
              <span className='text-[#06627C] text-2xl font-bold'>Installatie</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Veilige installatie</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Robuust montagemateriaal</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Conform NEN-normering</span>
            </div>
            <div className='bg-[#DAE8EC] rounded-xl hidden md:flex flex-col w-full space-y-2 py-6 px-8'>
              <span className='text-orangeish-500 text-2xl font-bold'>Step 2</span>
              <span className='text-[#06627C] text-2xl font-bold'>Plan</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Visualisatie van het legplan</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Opbrengst berekening</span>
              <span className='text-xl text-[#06627C] font-normal flex flex-row justify-start items-start'><img src="/dot.png" alt="dot" className='mr-2.5 mt-2' />Berekenen terugverdientijd</span>
            </div>
            <img src="/arrow-left.png" alt="Arrow Left" className="absolute top-[253.8px] left-[100px] hidden md:block" />
            <img src="/down-arrow.png" alt="Arrow Down" className="flex items-center justify-center md:hidden" />
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
