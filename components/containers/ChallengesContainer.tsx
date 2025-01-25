"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import TabButton from "../ui/TabButton";
import { Button } from "../ui/Button";
import { Icon } from "@iconify/react";
import { Plus } from "lucide-react";
import ChallengeCard from "../common/ChallengeCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type filterValue = "all" | "completed" | "open" | "ongoing";

const ChallengesContainer = () => {
  const [filter, setFilter] = useState<filterValue>("all");
  const pathname = usePathname();
  return (
    <div>
      {/* tabs container */}
      <div className="py-[18px] flex items-center justify-between border-b border-b-border">
        <div className="flex items-center gap-3 flex-1">
          <TabButton
            setFilter={setFilter}
            title="all"
            total="0"
            highlighted={filter === "all"}
          />
          <TabButton
            setFilter={setFilter}
            title="completed"
            total="0"
            highlighted={filter === "completed"}
          />
          <TabButton
            setFilter={setFilter}
            title="ongoing"
            total="0"
            highlighted={filter === "ongoing"}
          />
          <TabButton
            setFilter={setFilter}
            title="open"
            total="0"
            highlighted={filter === "open"}
          />
        </div>
        <div className="flex items-center">
          <Button className="rounded-lg py-4 px-[18px]">
            <Link
              href={`${pathname}/create-challenge`}
              className="flex items-center"
            >
              <Plus fontSize={24} color="white" />
              <h2 className="text-base font-medium leading-[23px] text-white">
                Create New Challenge
              </h2>
            </Link>
          </Button>
        </div>
      </div>
      {/* challenges container */}
      <div className="grid grid-cols-3 gap-[26px] pt-[18px]">
        {[...Array(6)].map((_, idx) => (
          <ChallengeCard
            key={idx}
            title="Design a Dashboard for SokoFund for a Fintech Product"
            status="open"
            skills={["UI/UX Design", "User Research", "User Research"]}
            seniorityLevels={["Junior", "Intermediate", "Senior"]}
            timeline="10 days"
          />
        ))}
      </div>
      {/* pagination buttons */}
      <div className="flex items-center justify-between mt-[68px] px-[70px]">
        {/* previous button */}
        <Button className="py-2 px-5 bg-white rounded-md shadow-sm w-[95px]">
          <h2 className="text-sm font-normal leading-[20px] text-[#98A2B3]">
            Previous
          </h2>
        </Button>
        {/* nextbutton */}
        <Button className="py-2 px-8 rounded-md shadow-sm w-[95px]">
          <h2 className="text-sm font-normal leading-[20px] text-white">
            Next
          </h2>
        </Button>
      </div>
    </div>
  );
};

export default ChallengesContainer;
