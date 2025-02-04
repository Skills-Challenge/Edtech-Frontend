import { LucideIcon } from "lucide-react";
import React, { FC } from "react";

type props = {
  Icon: LucideIcon;
  title: string;
  desc: string;
};
const WhatWeOfferCard: FC<props> = ({ Icon, title, desc }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="p-5 bg-primary rounded-[5px] text-white w-fit">
        <Icon fontSize={24} />
      </div>
      <h2 className="text-base text-text_dark leading-[19px] font-bold">
        {title}
      </h2>
      <p className="text-sm font-normal text-[#687588]">{desc}</p>
    </div>
  );
};

export default WhatWeOfferCard;
