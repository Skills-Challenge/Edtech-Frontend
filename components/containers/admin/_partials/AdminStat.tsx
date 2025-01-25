import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { cn, displayNumbers } from "@/lib/utils";
import { IconButton } from "@/components/ui/IconButton";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropDown";
import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type props = {
  title: string;
  value: number;
  percentage: number;
};
const AdminStat: FC<props> = ({ title, value, percentage }) => {
  return (
    <div className="bg-white py-3 px-5 border border-border flex flex-col gap-4 rounded-2xl">
      <div className="flex justify-end">
        <Select defaultValue="this week">
          <SelectTrigger className="w-fit border-none focus-visible:ring-0 shadow-none py-1">
            <SelectValue
              placeholder="Select duration"
              className="text-xs font-normal text-[#98A2B3]"
            />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectLabel className="text-xs font-normal">filters</SelectLabel>
              <SelectItem className="text-xs font-normal" value="this week">
                this week
              </SelectItem>
              <SelectItem className="text-xs font-normal" value="last week">
                last week
              </SelectItem>
              <SelectItem className="text-xs font-normal" value="last 30 days">
                last 30 days
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
