import { IconButton } from "@/components/ui/IconButton";
import { Icon } from "@iconify/react";
import React, { FC } from "react";

type props = {
  title: string;
  value: string;
};
const TalentStat: FC<props> = ({ title, value }) => {
  return (
    <div className="py-8 px-4 bg-white border border-[#E4E7EC] rounded-xl">
      <div className="flex items-center justify-between">
        {/* stat */}
        <div className="flex gap-2">
          <div className="w-[5px] bg-primary rounded-full" />
          <div className="flex flex-col">
            <h2 className="text-text font-normal text-base leading-5">
              {title}
            </h2>
            <h2 className="text-[19.3px] leading-[22.3px] font-semibold">
              {value}
            </h2>
          </div>
        </div>
        {/* icon */}
        <div>
          <IconButton variant={"lg"} className="bg-highlight">
            <Icon
              icon={"proicons:document"}
              fontSize={24}
              className="text-primary"
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TalentStat;
