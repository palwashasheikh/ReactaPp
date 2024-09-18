import React from 'react';

const ControlWithApp = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          In Controle Met <span className="text-yellow-500">De App</span>
        </h2>

        {/* Main Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center overflow-hidden">
          
          {/* Left Text Box */}
          <div className='relative flex flex-col justify-between items-center'>
            <img src='/left-t.png' alt='De App' className='absolute -top-[110px] -right-[110px]' />
            <div className="relative bg-[#06627C] text-white p-5 rounded-xl w-[355px] mb-8 md:mb-0 left-[95px]">
              <p className="text-base font-medium !leading-[25px]">
                Plan je laadsessie in en heb volledige controle over wanneer - en hoelang - je wilt opladen. Pas de instellingen voor het laden van je elektrische auto aan met onze handige planningsfunctie. Stel verschillende laadtijden in voor doordeweekse dagen en het weekend zodat dit past bij jouw routine, optimaliseer vervolgens voor minder kosten en meer gemak.
              </p>
            </div>
          </div>
          

          {/* Mobile Image */}
          <div className="relative z-10">
            <img src="/iPhoneBG2-1-969x1536 1 (1).png" alt="App on mobile" className="max-w-xs md:max-w-full mx-auto" />
          </div>

          {/* Right Text Boxes */}
          <div className="flex flex-col space-y-36 w-[355px] right-[80px] relative top-4">
            <img src='/right-t.png' alt='De App' className='absolute top-[80px] right-[110px]' />
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <p className="text-base font-semibold text-gray-600">Vergrendel de kabel via de app</p>
              {/* Right Image Line - position relative to mobile image */}              
            </div>

            <div className='relative flex flex-row'>
              <img src='/right-line.png' alt='De App' className='absolute -top-[75px] right-[100px]' />
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <p className="text-base font-semibold text-gray-600">Overzicht over je laadgeschiedenis via de app</p>
              </div>
            </div>            
          </div>

        </div>
      </div>
    </div>
  );
};

export default ControlWithApp;
