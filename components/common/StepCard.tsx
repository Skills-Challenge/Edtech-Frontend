import * as React from "react";
import { StepCardProps } from "./types";

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-10 w-full bg-white rounded-xl max-md:pl-5">
      <div className="flex items-start self-start">
        <div className="px-3.5 py-1.5 text-xs leading-5 text-white bg-blue-600 rounded-md">
          Step {stepNumber}
        </div>
        <div className="flex flex-col grow shrink-0 mt-4 text-black basis-0 w-fit">
          <div className="pt-8 pr-3.5 w-full text-xl font-bold tracking-tight leading-tight max-w-[376px]">
            {title}
          </div>
          <div className="pr-1 mt-4 w-full text-lg max-w-[376px]">
            {description}
          </div>
        </div>
      </div>
      {imageSrc && (
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt || ""}
          className="object-contain self-end mt-16 max-w-full aspect-[1.79] w-[263px] max-md:mt-10"
        />
      )}
    </div>
  );
};