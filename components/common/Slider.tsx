"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SliderItem = {
  icon: React.ReactNode;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
};

type SliderProps = {
  slides: SliderItem[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Function to handle the slide change
  const handleSlideChange = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length); // Handles looping
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel */}
      <Carousel>
        <CarouselContent className="relative">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } transition-opacity duration-700 ease-in-out`}
            >
              <div className="relative flex flex-col items-center">
                <img
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black/50 p-4 rounded-lg text-white">
                  <div className="text-4xl">{slide.icon}</div>
                  <p className="mt-2 text-lg">{slide.description}</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons */}
        <CarouselPrevious
          onClick={() => handleSlideChange(currentSlide - 1)}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
        />
        <CarouselNext
          onClick={() => handleSlideChange(currentSlide + 1)}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 cursor-pointer"
        />
      </Carousel>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
