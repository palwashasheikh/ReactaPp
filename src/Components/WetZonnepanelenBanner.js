import React from "react";

const WetZonnepanelenBanner = () => {
  return (
    <div
      className="text-white py-20 md:py-40"
      style={{
        backgroundImage: 'url("/sungrow-emea-ceTSHQ0qars-unsplash 2.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 mx-auto text-center">
        <div className="flex items-center justify-center">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold md:!leading-[65px] whitespace-nowrap">
    Wat is een goed zonnepaneel?
  </h1>
</div>
          <p className="pt-6 flex items-center justify-center text-yellow-500">
            <span className="mr-2">&larr;</span> {/* Left arrow */}
            Terug naar zonnepanelen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WetZonnepanelenBanner;
