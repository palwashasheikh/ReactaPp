import React from 'react';

const SafeLoadbalancing = () => {
  return (
    <div className='flex flex-col justify-between items-center py-16 bg-[#06627C] relative min-h-[635px] mb-24'>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">Veilig laden met Load balancing</h2>
        <div className='flex flex-row px-4 md:px-24 absolute mt-24 space-x-5 max-w-7xl'>
            <img src="/loadbal.png" alt='Veilig laden met Load balancing' className='w-[50%]' />
            <div className='grid grid-rows-2 space-y-5'>
                <div className='bg-white rounded-2xl flex flex-col justify-center items-start p-5 space-y-4 shadow-md'>
                    <span className='text-2xl font-bold text-[#2E353D]'>Load balancing</span>
                    <p className='text-[#2E353D] text-lg font-semibold'>Een laadpaal heeft veel vermogen nodig. Daardoor is er minder vermogen over in huis voor andere apparaten. Load balancing zorgt er voor dat het laadtempo van de auto in lijn wordt gebracht met het totale stroomverbruik. Daardoor valt de hoofdzekering niet uit.</p>
                </div>
                <div className='bg-white rounded-2xl flex flex-col justify-center items-start p-5 space-y-4 shadow-md'>
                    <span className='text-2xl font-bold text-[#2E353D]'>Veiligheid voorop</span>
                    <p className='text-[#2E353D] text-lg font-semibold'>Onze oplossingen worden zorgvuldig gekozen om deze veiligheid te waarborgen. We doen geen concessies in kwaliteit en kiezen voor de meest geavanceerde veiligheidsfuncties.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SafeLoadbalancing;
