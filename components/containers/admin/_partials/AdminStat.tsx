import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { cn, displayNumbers } from "@/lib/utils";
import { IconButton } from "@/components/ui/IconButton";

type props = {
  title: string;
  value: number;
  percentage: number;
};
const AdminStat: FC<props> = ({ title, value, percentage }) => {
  return (
    <div className="bg-white py-3 px-5 border border-border flex flex-col gap-6 rounded-2xl">
      <div className="flex justify-end">

      </div>
      <div className="flex items-center pb-8 gap-2">
        <IconButton variant={"lg"} className="bg-highlight">
          <Icon
            icon={"proicons:document"}
            fontSize={24}
            className="text-primary"
          />
        </IconButton>
        <div className="flex flex-col">
          <h2 className="text-text font-normal text-base leading344054-5">
            {title}
          </h2>
          <div className="flex items-center gap-[10px]">
            <h2 className="text-[#101928] font-semibold text-lg leading-[26px]">
              {displayNumbers(value)}
            </h2>
            <div
              className={cn(
                "flex items-center px-1 rounded-full",
                percentage > 0 ? "bg-[#E7F6EC]" : "bg-red-400/20"
              )}
            >
              <Icon
                icon={percentage > 0 ? "gg:arrow-up" : "gg:arrow-down"}
                fontSize={12}
                className={cn(percentage > 0 ? "text-primary" : "text-red-500")}
              />
              <h2
                className={cn(
                  "text-xs leading-4 font-medium",
                  percentage > 0 ? "text-primary" : "text-red-500"
                )}
              >
                {percentage}%
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStat;
