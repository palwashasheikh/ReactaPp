import React from 'react';

const BusinessCharging = () => {
  return (
    <div className='flex flex-col justify-between items-center py-16 bg-white relative md:mb-0 mb-[30rem]'>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-[#2E353D] text-center">Zakelijk Laden</h2>

        {/* Main container that adjusts based on screen size */}
        <div className='flex flex-col md:flex-row px-4 md:px-24 space-y-5 md:space-y-0 md:space-x-5 max-w-6xl max-h-[790px]'>
            {/* Left Column */}
            <div className='grid grid-cols-1 space-y-5 w-full'>
                {/* Text Block */}
                <div className='bg-[#06627C] rounded-2xl flex flex-col justify-center items-start p-5 space-y-4 shadow-md order-1 md:order-1'>
                    <span className='text-2xl font-bold text-white'>Transacties factureren</span>
                    <p className='text-white text-lg font-medium'>
                      Een laadpaal heeft veel vermogen nodig. Daardoor is er minder vermogen over in huis voor andere apparaten. 
                      Load balancing zorgt er voor dat het laadtempo van de auto in lijn wordt gebracht met het totale stroomverbruik. 
                      Daardoor valt de hoofdzekering niet uit.
                    </p>
                </div>

                {/* Image */}
                <img src="/zl-02.png" alt='Veilig laden met Load balancing' className='w-full object-cover order-3 md:order-2' />
            </div>            
            {/* Right Column */}
            <div className='grid grid-cols-1 space-y-5 w-full'>
                {/* Image */}
                <img src="/zl-01.png" alt='Veilig laden met Load balancing' className='w-full object-cover order-2 md:order-1' />

                {/* Text Block 1 */}
                <div className='bg-white rounded-2xl flex flex-col justify-center items-start p-5 space-y-4 shadow-md order-4 md:order-2'>
                    <span className='text-2xl font-bold text-[#2E353D]'>Flexibel opschaalbaar</span>
                    <p className='text-[#2E353D] text-lg font-semibold'>
                      Onze zakelijke laadopstellingen zijn flexibel opschaalbaar tot meer dan 1000 laders.
                    </p>
                </div>

                {/* Text Block 2 */}
                <div className='bg-white rounded-2xl flex flex-col justify-center items-start p-5 space-y-4 shadow-md order-5 md:order-3'>
                    <span className='text-2xl font-bold text-[#2E353D]'>Fase-balancering</span>
                    <p className='text-[#2E353D] text-lg font-semibold'>
                      Door geavanceerde technologie wordt het beschikbare vermogen zo over de laders verdeeld dat alle gekoppelde 
                      auto's zo efficiënt mogelijk laden zonder overbelasting te veroorzaken.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BusinessCharging;
