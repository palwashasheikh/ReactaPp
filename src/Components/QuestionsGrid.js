// pages/QuestionsGrid.js
import React from 'react';
import Slider from 'react-slick';
import Card from '../Components/Cards'; // Import the Card component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const QuestionsGrid = () => {
  const questions = [
    {
      title: "Wat Zijn Micro-Omvormers?",
      description: "Micro-omvormers werken per paneel om meer elektriciteit op te slaan via een aparte zonnepaneel-omvormer.",
      linkText: "Lees verder: Wat zijn micro-omvormers?",
      linkUrl: "#",
      imageUrl: "/tetimonial1.png" // Add path to the image/icon
    },
    {
      title: "Wat Zijn Optimizers?",
      description: "Optimizers helpen opbrengst verliezen te voorkomen die ontstaan door verschillende zonnesterktes.",
      linkText: "Lees verder: Wat zijn optimizers?",
      linkUrl: "#",
      imageUrl: "/tetimonial2.png"
    },
    {
      title: "Wat Is Een Goede Omvormer?",
      description: "Een goede omvormer moet een hoge kwaliteit product zijn, aangepast aan de energiebehoefte van jouw huishouden.",
      linkText: "Lees verder: Wat is een goede omvormer?",
      linkUrl: "#",
      imageUrl: "/tetimonial3.png"
    },
    {
      title: "Wat Is Een Goede Omvormer?",
      description: "Een goede omvormer moet een hoge kwaliteit product zijn, aangepast aan de energiebehoefte van jouw huishouden.",
      linkText: "Lees verder: Wat is een goede omvormer?",
      linkUrl: "#",
    },
    {
      title: "Wat Is Een Goede Omvormer?",
      description: "Een goede omvormer moet een hoge kwaliteit product zijn, aangepast aan de energiebehoefte van jouw huishouden.",
      linkText: "Lees verder: Wat is een goede omvormer?",
      linkUrl: "#",
    },
    {
      title: "Wat Is Een Goede Omvormer?",
      description: "Een goede omvormer moet een hoge kwaliteit product zijn, aangepast aan de energiebehoefte van jouw huishouden.",
      linkText: "Lees verder: Wat is een goede omvormer?",
      linkUrl: "#",
    },
    {
      title: "Wat Is Een Goede Omvormer?",
      description: "Een goede omvormer moet een hoge kwaliteit product zijn, aangepast aan de energiebehoefte van jouw huishouden.",
      linkText: "Lees verder: Wat is een goede omvormer?",
      linkUrl: "#",
    },
    // Add additional questions as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="px-4 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left text-[#2E353D] leading-snug">
          Alle Vragen Over <span className="block md:inline">Zonnepanelen</span>
        </h2>

        {/* Slider for mobile */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {questions.map((question, index) => (
              <Card
                key={index}
                title={question.title}
                description={question.description}
                linkText={question.linkText}
                linkUrl={question.linkUrl}
                imageUrl={question.imageUrl}
                className="p-6 bg-white rounded-lg shadow-md border-l-4 border-transparent hover:border-blue-500 transition-all duration-300"
              />
            ))}
          </Slider>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {questions.map((question, index) => (
            <Card
              key={index}
              title={question.title}
              description={question.description}
              linkText={question.linkText}
              linkUrl={question.linkUrl}
              imageUrl={question.imageUrl}
              className={`p-6 bg-white rounded-lg shadow-md border-2 ${
                index === 2 ? "border-blue-500" : "border-transparent"
              } hover:border-blue-500 transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsGrid;
