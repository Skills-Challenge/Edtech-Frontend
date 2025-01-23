import React, { FC } from "react";

type props = {
  heading: string;
  subHeading?: string;
};
const ComponentHeader: FC<props> = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      {subHeading && <h3 className="text-[#475367] text-base leading-[23.3px]">{subHeading}</h3>}
    </div>
  );
};

export default ComponentHeader;
