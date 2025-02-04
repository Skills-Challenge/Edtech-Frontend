import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { boolean } from "zod";

type props = {
  heading: string;
  subheading?: string;
  center?: boolean;
  maxWidth?: string;
  start?:boolean
};
const SectionHeader: FC<props> = ({
  heading,
  subheading,
  center = true,
  maxWidth,
  start=false,
}) => {
  return (
    <div
      className={cn("flex flex-col gap-6",center && "mx-auto")}
      style={{maxWidth:maxWidth}}
    >
      <h2
        className={cn(
          "text-[40px] leading-[48px] text-headings font-bold",
          center && "text-center"
        )}
      >
        {heading}
      </h2>
      <p
        className={cn(
          "text-lg font-normal leading-[27px] text-subheading",
          center && "text-center"
        )}
      >
        {subheading}
      </p>
    </div>
  );
};

export default SectionHeader;
