// components/Card.js
import React from 'react';

const Card = ({ title, description, linkText, linkUrl,imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
 {imageUrl && (
      <img src={imageUrl} alt={title} className="w-50 h-50 mb-4" />
    )}      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-[#2E353D] mb-4 text-xl font-semibold text-left">{description}</p>
      <a href={linkUrl} className="text-yellow-500 font-semibold flex flex-row justify-start items-center">
        {linkText} <img src="/arrow.svg" alt="Arrow Down" className="ml-3" />        
      </a>
    </div>
  );
};

export default Card;
