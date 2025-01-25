import { cn } from "@/lib/utils";
import React, { FC } from "react";

type props = {
  heading: string;
  subHeading?: string;
  center?:boolean
};
const ComponentHeader: FC<props> = ({ heading, subHeading,center=false }) => {
  return (
    <div className={cn("flex flex-col gap-0.5",center && "items-center gap-2")}>
      <h2 className={cn("text-2xl font-semibold",center && "text-center")}>{heading}</h2>
      {subHeading && <h3 className={cn("text-[#475367] text-base leading-[23.3px]",center && "text-center text-lg")}>{subHeading}</h3>}
    </div>
  );
};

export default ComponentHeader;
