// pages/QuestionsGrid.js
import React from 'react';
import Card from '../Components/Cards'; // Import the Card component

const QuestionsGrid = () => {
  const questions = [
    {
      title: "Wat Zijn Micro-Omvormers",
      description: "Lorem ipsum fisikdspiury pusere. Spereda losade aft gobigen, pavoriat difibel...",
      linkText: "Lees verder: Wat is een goed zonnepaneel?",
      linkUrl: "#"
    },
    {
      title: "Wat Zijn Micro-Omvormers",
      description: "Lorem ipsum fisikdspiury pusere. Spereda losade aft gobigen, pavoriat difibel...",
      linkText: "Lees verder: Wat is een goed zonnepaneel?",
      linkUrl: "#"
    },
    {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lorem ipsum fisikdspiury pusere. Spereda losade aft gobigen, pavoriat difibel...",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
      {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lorem ipsum fisikdspiury pusere. Spereda losade aft gobigen, pavoriat difibel...",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
      {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lorem ipsum fisikdspiury pusere. Spereda losade aft gobigen, pavoriat difibel...",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
      {
        title: "Wat Zijn Micro-Omvormers",
        description: "Lorem ipsum fisikdspiury pusere. Spereda losade aft gobigen, pavoriat difibel...",
        linkText: "Lees verder: Wat is een goed zonnepaneel?",
        linkUrl: "#"
      },
    // Add more items as needed
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Alle Vragen Over Zonnepanelen
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

export default QuestionsGrid;
