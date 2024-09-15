import React from 'react';
import { FaCheck } from 'react-icons/fa'; // FontAwesome icon

const SlimPlanSection = () => {
  return (
    <section className="py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-semibold  mt-4">
          Een Slim Plan Van <span className="text-blue-500">Krachtdak</span>
        </h2>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Each card */}
          {[
            "Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen.",
            "Fiskdpejkur pusere. Sperade lasode alt gobigen.",
            "Sperade lasode alt gobigen, povidat difbafel. Pseudofil spell.",
            "Sperade lasode att gobigen, povidat difbafel."
          ].map((text, idx) => (
            <div key={idx} className="flex items-start bg-white p-4 shadow-md rounded-lg">
              <FaCheck className="text-yellow-500 w-6 h-6 mr-3" />
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlimPlanSection;
