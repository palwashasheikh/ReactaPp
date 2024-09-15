import React from "react";

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className={`embla__button embla__button--prev  ml-10 ${!enabled ? "opacity-50 cursor-not-allowed" : ""}`}
    onClick={onClick}
    disabled={!enabled}
    aria-label="Previous slide"
    style={{
      backgroundColor: "#06627C",
      color: "white",
      border: "none",
      width:"40px",
      height:"40px",
      fontSize: "18px",
      borderRadius: "50%",
      cursor: enabled ? "pointer" : "default",
    }}
  >
    &#60; {/* Less than symbol < */}
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className={`embla__button embla__button--next ${!enabled ? "opacity-50 cursor-not-allowed" : ""}`}
    onClick={onClick}
    disabled={!enabled}
    aria-label="Next slide"
    style={{
      background: "#FFAB10",
      color: "white",
      border: "none",
      width:"40px",
      height:"40px",
      fontSize: "18px",
      borderRadius: "50%",
      cursor: enabled ? "pointer" : "default",
    }}
  >
    &#62; {/* Greater than symbol > */}
  </button>
);
