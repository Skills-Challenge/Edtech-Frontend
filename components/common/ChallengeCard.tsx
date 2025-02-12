"use client";

import React, { FC } from "react";
import umuravaLogo from "@/public/umuravaLogo2.png";
import { cn, generateSlug } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState, useAppSelector } from "@/store/store";

type props = {
  _id: string;
  status: string;
  title: string;
  skills: string[];
  seniorityLevels: string[];
  timeline: string;
};
const ChallengeCard: FC<props> = ({
  _id,
  status,
  title,
  timeline,
  skills,
  seniorityLevels,
}) => {
  const isAuthenticated = useAppSelector(
    (state: AppState) => state.auth.isAuthenticated
  );
  const pathname = usePathname();
  const currentUser = pathname.split("/")[1];

  return (
    <div className="py-5 bg-white border border-border rounded-xl">
      {/* challenge image */}
      <div className="px-4 flex flex-col gap-7">
        <div className="h-[198px] relative flex items-center justify-center rounded-xl bg-primary">
          {/* status */}
          <div
            className={cn(
              "py-1 px-[22.5px] rounded-full bg-teritiary absolute top-3 right-2"
            )}
          >
            <h2 className="text-white font-medium text-sm capitalize">
              {status}
            </h2>
          </div>
          {/* umurava logo */}
          <Image src={umuravaLogo} alt="umuravalogo" />
        </div>
        {/* description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[18px] text-[#101928] font-semibold leading-[25px]">
            {title}
          </h2>
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
                    className="py-[3.4px] px-[6.5px] rounded-[9.25px] border border-primary flex flex-col justify-center"
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
                Experience:{" "}
                <span className="text-[#475367] text-xs font-normal capitalize">
                  ({seniorityLevels.join(", ")})
                </span>
              </h2>
            </div>
            {/* timeline */}
            <div className="flex items-center space-x-1">
              <h2 className="text-xs leading-[17px] font-semibold text-[#25272B]">
                Duration:
              </h2>
              <p className="text-[#475367] text-xs font-normal"> {timeline}</p>
            </div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="h-[1px] w-full bg-border mt-[18px] mb-3" />
      {/* View button */}
      <div className="px-5">
        <Button className="py-2 px-4">
          <Link
            href={
              isAuthenticated
                ? `/${currentUser}/challenges&hackathons/${generateSlug(
                    title,
                    `${_id}`
                  )}`
                : "/auth/login"
            }
          >
            <h2 className="text-sm font-semibold leading-[19px] text-white">
              View Challenge
            </h2>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ChallengeCard;
