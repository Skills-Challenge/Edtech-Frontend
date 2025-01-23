import React, { FC } from "react";
import { Button } from "./Button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { filterValue } from "../containers/ChallengesContainer";

type props = {
  title: filterValue;
  total: string;
  highlighted: boolean;
  setFilter: React.Dispatch<React.SetStateAction<filterValue>>;
};
const TabButton: FC<props> = ({ title, total, highlighted, setFilter }) => {
  return (
    <Button
      variant={"outline"}
      onClick={() => setFilter(title)}
      className={cn(
        "flex items-center gap-2 py-3 px-3 border",
        highlighted
          ? "bg-highlight border-active"
          : "border-border bg-[#F0F2F5]"
      )}
    >
      <Icon
        icon={"mage:file-3"}
        fontSize={24}
        className={cn(highlighted ? "text-primary" : "text-[#98A2B3]")}
      />
      <h2
        className={cn(
          "text-sm leading-5 font-medium capitalize",
          highlighted ? "text-[#101928]" : "text-[#344054]"
        )}
      >
        {title} Challenge
      </h2>
      <div
        className={cn(
          "h-[17px] w-[24px] rounded-full px-2 transition-colors duration-75",
          highlighted ? "bg-primary" : "bg-body"
        )}
      >
        <h2
          className={cn(
            "text-xs font-medium leading-4",
            highlighted ? "text-white" : "text-[#98A2B3]"
          )}
        >
          {total}
        </h2>
      </div>
    </Button>
  );
};

export default TabButton;
