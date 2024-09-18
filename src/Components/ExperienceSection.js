import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="py-10 mt-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 md:mb-16 text-[#2E353D]">
          <span className="text-[#06627C]">Krachtdak Heeft Ervaring</span> Met Montage Op
          Afwijkende Type Daken
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Each card */}
          {[
            { title: 'Stalen Dakpan Panelen', img: 'exp1.png' },
            { title: 'Carport', img: 'exp2.png' },
            { title: 'Schuin Bitumen Dak', img: 'exp3.png' },
            { title: 'Inschuif Systeem', img: 'exp4.png' },
            { title: 'Stalen Dakpan Panelen', img: 'exp5.png' },
            { title: 'Stalen Dakpan Panelen', img: 'exp6.png' },
            { title: 'Inschuif Systeem', img: 'exp7.png' },
            { title: 'Stalen Dakpan Panelen', img: 'exp8.png' },
            { title: 'Stalen Dakpan Panelen', img: 'exp9.png' },
            // Add more items as needed
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-4 shadow-md rounded-lg ${idx % 2 === 0 ? 'bg-[#E9F1F3]' : 'bg-[#06627C40]'}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum fiskdpejkur pusere. Sperade lasode alt gobigen, povidat difbafel.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
