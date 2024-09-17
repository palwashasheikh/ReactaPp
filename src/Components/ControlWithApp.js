import React from 'react';

const ControlWithApp = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          In Controle Met <span className="text-yellow-500">De App</span>
        </h2>

        {/* Main Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center md:space-x-16 overflow-hidden">
          
          {/* Left Text Box */}
          <div className="relative bg-blue-100 text-blue-900 p-8 border-l-4 border-blue-500 rounded-lg w-[300px] mb-8 md:mb-0">
            <p className="text-sm">
              Plan je laadsessie in en heb volledige controle over wanneer - en hoelang - je wilt opladen. Pas de instellingen voor het laden van je elektrische auto aan met onze handige planningsfunctie. Stel verschillende laadtijden in voor doordeweekse dagen en het weekend zodat dit past bij jouw routine, optimaliseer vervolgens voor minder kosten en meer gemak.
            </p>
            {/* Left Image Line - position relative to mobile image */}
            <img src="left.png" alt="Blue Line" className="absolute top-1/2 right-[-100px] w-32 h-32" />
          </div>

          {/* Mobile Image */}
          <div className="relative z-10">
            <img src="/iPhoneBG2-1-969x1536 1 (1).png" alt="App on mobile" className="max-w-xs md:max-w-md mx-auto" />
          </div>

          {/* Right Text Boxes */}
          <div className="flex flex-col space-y-4">
            <div className="relative bg-white p-4 border-l-4 border-yellow-400 rounded-lg shadow-lg w-[265px]">
              <p className="text-sm text-gray-600">Vergrendel de kabel via de app</p>
              {/* Right Image Line - position relative to mobile image */}
              <img src="right.png" alt="Yellow Line" className="absolute top-1/2 left-[-100px] w-32 h-32" />
            </div>

            <div className="relative bg-white p-4 border-l-4 border-yellow-400 rounded-lg shadow-lg w-[265px]">
              <p className="text-sm text-gray-600">Overzicht over je laadgeschiedenis via de app</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ControlWithApp;
