import React from "react";

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className={`embla__button embla__button--prev  ml-10 ${!enabled ? "opacity-50 cursor-not-allowed" : ""}`}
    onClick={onClick}
    disabled={!enabled}
    aria-label="Previous slide"
    style={{      
      border: "none",
      width:"70px",
      height:"70px",            
      cursor: enabled ? "pointer" : "default",
    }}
  >
    <img src="/arrow-circle-left.png" alt="Arrow" className="" />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className={`embla__button embla__button--next ${!enabled ? "opacity-50 cursor-not-allowed" : ""}`}
    onClick={onClick}
    disabled={!enabled}
    aria-label="Next slide"
    style={{          
      border: "none",
      width:"70px",
      height:"70px",
      cursor: enabled ? "pointer" : "default",
    }}
  >
    <img src="/arrow-circle-right.png" alt="Arrow" className="" />
  </button>
);
