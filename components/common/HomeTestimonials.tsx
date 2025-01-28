"use client"

import * as React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { DotIndicator } from './DotIndicator';
import { TestimonialSliderProps } from './types';

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = testimonials.length;
  const visibleCount = 3;

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= totalSlides ? 0 : next;
    });
  }, [totalSlides]);

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const isCardVisible = (index: number) => {
    if (currentSlide === totalSlides - 1) {
      return index >= totalSlides - visibleCount;
    }
    const visibleRange = Array.from({ length: visibleCount }, (_, i) => 
      (currentSlide + i) % totalSlides
    );
    return visibleRange.includes(index);
  };

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-16 bg-white max-md:px-5 max-md:pt-24">
      <div className="flex flex-col w-full max-w-[1237px] max-md:max-w-full">
        <div className="flex gap-5 justify-center items-center w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
            <h2 className="w-full text-4xl font-bold tracking-tight leading-10 text-slate-900 max-md:max-w-full">
              Users are in Love with Skills Challenges Program
            </h2>
            <p className="mt-3.5 text-lg leading-7 text-slate-500 max-md:max-w-full">
              See what our clients say about working with us. Their success
              speaks for our dedication and expertise.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden mt-16 max-md:mt-10">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (537 + 24)}px)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                {...testimonial}
                isVisible={isCardVisible(index)}
                index={index}
                currentSlide={currentSlide}
                totalSlides={totalSlides}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 items-center mt-24 max-md:mt-10">
        {testimonials.map((_, index) => (
          <DotIndicator
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};