import React from 'react';
import { FaCheck } from 'react-icons/fa'; // FontAwesome icon

const SlimPlanSection = () => {
  return (
    <section className="py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-left mb-8 text-[#2E353D]">
  Een Slim Plan Van <span className="block md:inline text-[#06627C]">Krachtdak</span>
</h2>
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Each card */}
          {[
            "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen,",
            "Fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel.",
            "Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell",
            "Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell"
          ].map((text, idx) => (
            <div key={idx} className="flex items-center bg-white p-4 shadow-md rounded-lg text-gray-600">
              <img src="/tick.svg" alt="Tick" className="mr-2 md:mr-3 mt-0.5 md:mt-1" />
              <p className="text-[#2E353D] text-lg md:text-xl">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlimPlanSection;
