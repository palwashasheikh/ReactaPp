import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./EmblaButtons"; // Custom arrow buttons

const TestimonialsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const testimonials = [
    {
      name: "Vinegar Doppio",
      image: "/slider1.png",
      rating: 5,
      review: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov",
    },
    {
      name: "Vinegar Doppio",
      image: "/slider2.png",
      rating: 4,
      review: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov",
    },
    {
        name: "Vinegar Doppio",
        image: "/slider3.png",
        rating: 4,
        review: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov",
      },
      // 
      {
        name: "Vinegar Doppio",
        image: "/slider4.png",
        rating: 4,
        review: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov",
      },
      // 
      {
        name: "Vinegar Doppio",
        image: "/slider4.png",
        rating: 4,
        review: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov",
      },
      // 
      {
        name: "Vinegar Doppio",
        image: "/sliderimage.png",
        rating: 4,
        review: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov",
      },
      // 
      {
        name: "Vinegar Doppio",
        image: "/sliderimage.png",
        rating: 4,
        review: "Lörem ipsum fiskpedikyr pusere. Sperade lasade att gobigen, pavidat difåbel. Pseudofili spell stenov",
      },
      // 
      
    // Add more testimonials as needed
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="py-12">
      <div className="">
        <h2 className="text-2xl md:text-5xl font-bold mb-8 text-left text-[#2E353D] pl-4 md:pl-24">
          Wat Klanten Zeggen Over Ons
        </h2>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="embla__slide w-full sm:w-1/4 p-4 flex-shrink-0"
              >
                <div className="bg-white rounded-lg shadow-lg h-full flex flex-col p-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="py-6 text-left flex-1 flex flex-col">
                    <div className="flex justify-start mb-2">
                      <img src="/star.png" alt="Star" className="" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {testimonial.name}
                    </h3>
                    
                    <p className="text-gray-600 flex-grow">{testimonial.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:justify-end mt-6 space-x-3 mr-4 md:mr-24 justify-center">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
