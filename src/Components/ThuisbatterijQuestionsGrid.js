// pages/QuestionsGrid.js
import React from 'react';
import Card from './Cards'; // Import the Card component

const ThuisbatterijQuestionsGrid = () => {
  const questions = [
    {
      title: "Wat Zijn Micro-Omvormers",
      description: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet. Sum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel.",
      linkText: "Lees verder: Wat is een goed zonnepaneel?",
      linkUrl: "#"
    },
    {
      title: "Wat Zijn Micro-Omvormers",
      description: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet. Sum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel.",
      linkText: "Lees verder: Wat is een goed zonnepaneel?",
      linkUrl: "#"
    },
    {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet. Sum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel.",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
      {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet. Sum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel.",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
      {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet. Sum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel.",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
      {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov emedan förväntis keskapet. Sum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel.",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
    // Add more items as needed
  ];

  return (
    <div className="py-10 mb-12 ">
      <div className="px-4 md:px-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-left text-[#2E353D]">
        Meer over het Energie Management Systeem
                </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {questions.map((question, index) => (
            <Card
              key={index}
              title={question.title}
              description={question.description}
              linkText={question.linkText}
              linkUrl={question.linkUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThuisbatterijQuestionsGrid;
