// pages/QuestionsGrid.js
import React from 'react';
// import Card from './Cards'; // Import the Card component
import Card from '../Components/Cards'; // Import the Card component
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
   
    <div className="py-10 mb-12 px-5">
      <div className="px-4 md:px-24 ">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:text-left text-[#2E353D] text-center ">
        Meer over Het Energie               
        <span className="block md:inline"> Management Systeem </span>

          </h2>
        <div className="block md:hidden">
          <Slider {...settings}>
            {questions.map((question, index) => (
              <Card
                key={index}
                title={question.title}
                description={question.description}
                linkText={question.linkText}
                linkUrl={question.linkUrl}
              />
            ))}
          </Slider>
        </div>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
