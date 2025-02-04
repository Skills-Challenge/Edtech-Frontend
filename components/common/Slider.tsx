"use client";

import React, { useEffect } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import learn from "@/public/learn.svg";
import SkillsCard from "./SkillsCard";
import { skillsData, slidesData } from "@/constants/data";

const Slider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex flex-col gap-[100px]">
      <div className="flex flex-col gap-4 max-w-[972px] mx-auto">
        <div className="flex gap-4 justify-center">
          {skillsData.slice(0, 2).map((item, index) => (
            <SkillsCard
              api={api}
              current={current}
              index={index}
              item={item}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {skillsData.slice(2).map((item, index) => (
            <SkillsCard
              api={api}
              current={current}
              index={index + 2} // Maintain correct index
              item={item}
              key={index + 2}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <Carousel
          setApi={setApi}
          className="bg-[#F1F1F1] rounded-xl overflow-hidden"
        >
          <CarouselContent className="gap-2">
            {slidesData.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-between bg-[#F1F1F1] rounded-xl p-20 lg:gap-10"
              >
                <div className="flex flex-col gap-10 lg:w-[50%]">
                  <Image src={item.icon} alt="icon" width={70} height={70} className="object-contain" />
                  <p className="text-[#687588] text-lg">{item.description}</p>
                  <Link href="/" className="flex items-center gap-2">
                    <p className="text-blue-600 font-semibold">Learn more </p>
                    <Image src={learn} alt="icon" />
                  </Link>
                </div>
                <Image src={item.imageSrc} alt="image" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="py-8 flex items-center justify-center gap-5">
          {[...Array(count)].map((_, idx) => (
            <div
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={cn(
                "w-[11px] h-[11px] rounded-full",
                current === idx + 1 ? "bg-primary" : "bg-[#D9D9D9]"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
