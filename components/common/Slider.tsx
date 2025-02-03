"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";




const Slider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Carousel>
        <CarouselContent className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#F1F1F1] p-10 lg:p-20 gap-6 lg:gap-10 w-full shrink-0"
            >
              <div className="flex flex-col gap-6 lg:gap-10 lg:w-[50%] text-center lg:text-left">
                <img src={item.icon} alt="icon" width={50} height={50} className="mx-auto lg:mx-0" />
                <p className="text-[#687588] text-sm lg:text-lg">{item.description}</p>
                <Link href="/" className="flex items-center gap-2 justify-center lg:justify-start">
                  <p className="text-blue-600 font-semibold">Learn more </p>
                  <Image src="/learn.svg" alt="icon" width={20} height={20} />
                </Link>
              </div>
              <img src={item.imageSrc} alt="image" width={300} height={300} className="w-full max-w-xs lg:max-w-md" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-blue-600 w-6" : "bg-gray-400 w-3"}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;