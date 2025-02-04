import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StepCardProps } from "@/types/common";

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  imageSrc
}) => {
  return (
    <div className="flex overflow-hidden flex-col w-full bg-white rounded-xl h-full">
      <div className={cn(" px-7 pt-12 pb-16")}>
        <div className={cn("flex flex-col gap-[10px]")}>
          <div className="px-3.5 py-1.5 text-xs leading-5 text-white bg-blue-600 rounded-md w-fit">
            Step {stepNumber}
          </div>
          <div className="flex flex-col grow text-black pl-5 gap-4">
            <div className="w-full text-xl font-bold tracking-tight leading-tight max-w-[376px]">
              {title}
            </div>
            <div className="pr-1 w-full text-lg max-w-[376px]">
              {description}
            </div>
          </div>
        </div>
      </div>
      {imageSrc && (
        <Image
          loading="lazy"
          src={imageSrc}
          alt={"image"}
          className="hidden lg:block self-end"
        />
      )}
    </div>
  );
};
