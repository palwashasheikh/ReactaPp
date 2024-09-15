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
      image: "/sliderimage.png",
      rating: 5,
      review: "Lorem ipsum tişpikdoler pusere. Sporeda laudo sit giblor, pavolat difibal.",
    },
    {
      name: "Vinegar Doppio 2",
      image: "/sliderimage.png",
      rating: 4,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        name: "Vinegar Doppio 2",
        image: "/sliderimage.png",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // 
      {
        name: "Vinegar Doppio 2",
        image: "/sliderimage.png",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // 
      {
        name: "Vinegar Doppio 2",
        image: "/sliderimage.png",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // 
      {
        name: "Vinegar Doppio 2",
        image: "/sliderimage.png",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      // 
      {
        name: "Vinegar Doppio 2",
        image: "/sliderimage.png",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Wat Klanten Zeggen Over Ons
        </h2>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="embla__slide w-full sm:w-1/4 p-4 flex-shrink-0"
              >
                <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">
                      {testimonial.name}
                    </h3>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((star, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.97 2.885a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118L10 14.348l-3.97 2.884c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L1.674 9.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 flex-grow">{testimonial.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
