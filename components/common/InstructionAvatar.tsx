import React from "react";
import { Icon } from "@iconify/react";
import ListHeader from "./ListHeader";
import ListItem from "./Listitem";

const InstructionAvatar = ({
  value,
  title,
  icon,
}: {
  value: string;
  title: string;
  icon?: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[49px] h-[49px] flex items-center justify-center rounded-full bg-highlight">
        <Icon
          icon={"basil:envelope-outline"}
          fontSize={24}
          className="text-primary"
        />
      </div>
      <div className="flex flex-col">
        <ListHeader text={value} />
        <ListItem text={title} />
      </div>
    </div>
  );
};

export default InstructionAvatar;
