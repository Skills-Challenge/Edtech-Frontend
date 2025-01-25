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
    <section className="flex flex-wrap md:flex-nowrap items-center justify-between gap-10 md:px-10 bg-white rounded-lg">
      <div className="w-full md:w-1/2 text-center md:text-left">
        {title && (
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            {title}
          </h1>
        )}
        {paragraph1 && (
          <p className="text-base md:text-lg text-gray-600 mb-4">
            {paragraph1}
          </p>
        )}
        {paragraph2 && (
          <p className="text-base md:text-lg text-gray-600 mb-4">
            {paragraph2}
          </p>
        )}
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
        )}
      </div>

      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        {media}
      </div>
    </section>
  );
};

export default ReusableHero;
