import React from 'react';

const ControlWithApp = () => {
  return (
    <div className="bg-white py-20">
      <div className="min-w-7xl mx-auto px-7 flex flex-col items-center">
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
            {/* Left Arrow Line Image */}
            <img src="left.png" alt="Arrow Line" className="absolute top-1/2 left-full transform -translate-y-1/2 w-[100px]" />
          </div>

          {/* Mobile Image */}
          <div className="relative z-10">
            <img src="/iPhoneBG2-1-969x1536 1 (1).png" alt="App on mobile" className="max-w-xs md:max-w-md mx-auto" />
          </div>

          {/* Right Text Boxes */}
          <div className="relative flex flex-col space-y-4">
            <div className="relative bg-white p-4 border-l-4 border-yellow-500 rounded-lg shadow-lg w-[265px]">
              <p className="text-sm text-gray-600">Vergrendel de kabel via de app</p>
              {/* Right Arrow Line Image */}
              <img src="right.png" alt="Arrow Line" className="absolute top-1/2 right-full transform -translate-y-1/2 w-[100px]" />
            </div>
            <div className="relative bg-white p-4 border-l-4 border-yellow-500 rounded-lg shadow-lg w-[265px]">
              <p className="text-sm text-gray-600">Overzicht over je laadgeschiedenis via de app</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ControlWithApp;
