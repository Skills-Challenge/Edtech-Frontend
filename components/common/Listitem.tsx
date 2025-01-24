import React, { FC } from "react";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";

type props = {
  text: string;
  dot?: boolean;
};
const ListItem: FC<props> = ({ text, dot = false }) => {
  return (
    <p
      className={cn(
        "font-normal text-[#475367] leading-[23.2px] ",
        dot ? "pl-6" : ""
      )}
    >
      <span className={cn(dot && "list-item list-outside")}>{text}</span>
    </p>
  );
};

export default ListItem;
