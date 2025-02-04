"use client";

import React from "react";

type ReusableHeroProps = {
  media?: React.ReactNode;
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const ReusableHero: React.FC<ReusableHeroProps> = ({
  media,
  title,
  paragraph1,
  paragraph2,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="flex flex-wrap md:flex-nowrap items-center justify-between gap-10  bg-white rounded-lg">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="max-w-[571px] flex flex-col gap-6">
          {title && (
            <h1 className="text-3xl md:text-[44px] leading-[52.2px] font-bold text-primary">
              {title}
            </h1>
          )}
          {paragraph1 && (
            <p className="text-base md:text-xl text-gray-600">
              {paragraph1}
            </p>
          )}
          {paragraph2 && (
            <p className="text-base md:text-xl text-gray-600">
              {paragraph2}
            </p>
          )}
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="px-[56px] py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        {media}
      </div>
    </section>
  );
};

export default ReusableHero;
