"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

type SliderItem = {
  icon: string;
  description: string;
  imageSrc: string;
};

type SliderProps = {
  slides: SliderItem[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Carousel>
      <CarouselContent className="">
        {slides.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-between bg-[#F1F1F1] p-20 lg:gap-10"
          >
            <div className="flex flex-col gap-10 lg:w-[50%]">
              <img src={item.icon} alt="icon" width={70} height={70} />
              <p className="text-[#687588] text-lg">{item.description}</p>
              <Link href="/" className="flex items-center gap-2">
                <p className="text-blue-600 font-semibold">Learn more </p>
                <Image src="/learn.svg" alt="icon" width={25} height={25} />
              </Link>
            </div>
            <img src={item.imageSrc} alt="image" width={500} height={500} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
