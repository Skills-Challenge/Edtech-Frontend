"use client";

import { testimonialData as testimonials } from "@/data/data";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import SectionHeader from "../common/SectionHeader";
import { TestimonialCard } from "../common/TestimonialCard";

export const TestimonialSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
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
    <div className="flex overflow-hidden flex-col items-center pt-28 pb-16 bg-white container">
      <div className="flex flex-col w-full  max-md:max-w-full">
        <div className="flex gap-5 items-center w-full max-md:max-w-full">
          <SectionHeader
            heading="Users are in Love with Skills Challenges Program"
            subheading="See what our clients say about working with us. Their success speaks for our dedication and expertise. "
            maxWidth="695px"
            center={false}
          />
        </div>
        <div className="relative overflow-hidden mt-16 max-md:mt-10">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="gap-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard
                    {...testimonial}
                    isVisible={current === index + 1}
                    index={index}
                    currentSlide={current}
                    totalSlides={api?.scrollSnapList().length}
                  />
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
    </div>
  );
};
