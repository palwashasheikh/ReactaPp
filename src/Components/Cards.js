// components/Card.js
import React from 'react';

const Card = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={linkUrl} className="text-yellow-500 font-semibold">
        {linkText} &rarr;
      </a>
    </div>
  );
};

export default Card;
