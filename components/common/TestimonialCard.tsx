import * as React from 'react';
import { TestimonialCardProps } from './types';

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  role,
  location,
  isVisible,
  index = 0,
  currentSlide,
  totalSlides = 0
}) => {
  const getOpacity = () => {
    if (currentSlide === totalSlides - 1) {
      return index >= totalSlides - 3 ? 1 : 0.3;
    }
    return isVisible ? 1 : 0.3;
  };

  return (
    <div 
      className={`flex flex-col self-stretch px-9 py-7 my-auto bg-white rounded-xl border border-solid border-neutral-300 min-w-[537px] w-[537px] transition-all duration-500 ease-in-out transform`}
      style={{ opacity: getOpacity() }}
    >
      <div className="flex flex-col justify-center items-center px-14 py-28 bg-blue-600 rounded-2xl max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`Testimonial from ${name}`}
          className="object-contain -mb-5 aspect-square w-[67px] max-md:mb-2.5"
        />
      </div>
      <div className="flex gap-3.5 items-center self-start mt-6">
        <div className="flex shrink-0 self-stretch my-auto bg-blue-600 h-[55px] rounded-[55px] w-[55px]" />
        <div className="flex flex-col self-stretch my-auto w-[162px]">
          <div className="text-lg font-bold leading-snug text-emerald-900">
            {name}
          </div>
          <div className="text-base font-medium leading-7 text-neutral-500">
            {role}, {location}
          </div>
        </div>
      </div>
    </div>
  );
};