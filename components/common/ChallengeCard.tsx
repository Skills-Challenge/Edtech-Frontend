import React, { FC } from "react";
import umuravaLogo from "@/public/umuravaLogo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

type props = {
  status: "open" | "closed";
  title: string;
  skills: string[];
  seniorityLevels: string[];
  timeline: string;
};
const ChallengeCard: FC<props> = ({
  status,
  title,
  timeline,
  skills,
  seniorityLevels,
}) => {
  return (
    <div className="py-5 px-4 bg-white border border-border rounded-xl flex flex-col gap-7">
      <div className="h-[198px] relative flex items-center justify-center rounded-xl bg-primary">
        {/* status */}
        <div
          className={cn(
            "py-1 px-[22.5px] rounded-full bg-teritiary absolute top-3 right-2"
          )}
        >          
          <h2 className="text-white font-medium text-sm capitalize">{status}</h2>
        </div>
        {/* umurava logo */}
        <Image src={umuravaLogo} alt="umuravalogo" />
      </div>
      {/* description */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[#101928] font-semibold leading-[25px]">{title}</h2>
        <div className="flex flex-col gap-3">
          {/* skills */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xs leading-[17px] font-semibold text-[#25272B]">
              skills required:
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {/* skills card */}
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="py-[3.4px] px-[6.5px] rounded-[9.25px] border border-primary"
                >
                  <h2 className="text-primary text-xs leading-[17px] text-center">
                    {skill}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {/* seniority */}
          <div className="flex items-center">
            <h2 className="text-xs leading-[17px] font-semibold text-[#25272B]">
              skills required:{" "}
              <span className="text-[#475367] text-xs font-normal capitalize">
                ({seniorityLevels.join(", ")})
              </span>
            </h2>
          </div>
          {/* timeline */}
          <div className="flex items-center">
            <h2 className="text-xs leading-[17px] font-semibold text-[#25272B]">
              skills required:
            </h2>
            <p className="text-[#475367] text-xs font-normal">{timeline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
