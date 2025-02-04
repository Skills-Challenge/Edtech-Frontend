import React, { FC } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type props = {
  index: number;
  current: number;
  api: CarouselApi;
  item: string;
};
const SkillsCard: FC<props> = ({ index, current, api, item }) => {
  return (
    <div
      className={cn(
        `flex items-center cursor-pointer py-[14px] px-6 transition-transform transform hover:scale-15 duration-150`,
        index === current - 1
          ? "bg-primary text-white rounded-md"
          : "text-[#687588] bg-[#F1F1F1] rounded-md"
      )}
      onClick={() => api?.scrollTo(index)}
    >
      <span className={`text-sm sm:text-base md:text-lg`}>{item}</span>
    </div>
  );
};

export default SkillsCard;
