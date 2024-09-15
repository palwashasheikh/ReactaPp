// src/Components/Banner.js
import React from 'react';

const BannerSecond = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Images */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <img src="/Rectangle 15.png" alt=""  className="w-32 h-auto rounded-lg"/>
            <img src="/Rectangle 16.png" alt="" className="w-32 h-auto rounded-lg"/>
          </div>
          
          {/* Right Text */}
          <div className="md:ml-14 text-left">
            <h1 className="text-3xl font-bold">
              Krachtdak Adviseert En Installeert Betrouwbare En{' '}
              <span className="text-teal-600">Veilige Energie-Oplossingen</span>
            </h1>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔</span>
                Lorem ipsum fiskepdikyr pusere.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔</span>
                Fiskepdikyr pusere. Sperade lasade att gobigen.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✔</span>
                Sperade lasade att gobigen, pavdiat difäbel.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
