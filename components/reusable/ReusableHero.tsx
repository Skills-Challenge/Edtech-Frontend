"use client";

import { cn } from "@/lib/utils";
import React from "react";

type ReusableHeroProps = {
  media?: React.ReactNode;
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  colored?: boolean;
  width?: string;
  size?:number;
};

const ReusableHero: React.FC<ReusableHeroProps> = ({
  media,
  title,
  paragraph1,
  paragraph2,
  buttonText,
  onButtonClick,
  size,
  colored = true,
  width = "571px",
}) => {
  return (
    <section className="flex flex-wrap xlg:flex-nowrap flex-col xlg:flex-row items-center justify-between gap-10  bg-white rounded-lg">
      <div className="w-full xlg:w-1/2 text-center md:text-left">
        <div className={cn("flex flex-col gap-6")} style={{ maxWidth: width }}>
          {title && (
            <h1
              className={cn(
                "text-3xl font-bold",
                colored
                  ? " text-primary md:text-[44px] leading-[52.2px]"
                  : "text-black text-[32px] leading-9"
              ,size && "!leading-9")}
              style={{fontSize:size}}
            >
              {title}
            </h1>
          )}
          {paragraph1 && (
            <p className="text-base md:text-xl text-gray-600">{paragraph1}</p>
          )}
          {paragraph2 && (
            <p className="text-base md:text-xl text-gray-600">{paragraph2}</p>
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

      <div className="w-full xlg:w-1/2 flex justify-center mb-6 md:mb-0 overflow-hidden">
        {media}
      </div>
    </section>
  );
};

export default ReusableHero;
