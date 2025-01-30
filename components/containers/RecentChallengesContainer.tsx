"use client"

import React, { useEffect, useState } from "react";
import ComponentHeader from "../common/ComponentHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import ChallengeCard from "../common/ChallengeCard";
import { TChallenge } from "@/types/challenge";
import { getChallenges } from "@/lib/actions/challenge.action";
import { useAppSelector } from "@/store/store";

const RecentChallengesContainer = () => {
  const { challenges } = useAppSelector((state) => state.challenges);
  return (
    <div className="py-10">
      {/* header */}
      <div className="flex items-center justify-between">
        <ComponentHeader heading="Recent Challenges" />
        <Button className="" variant={"ghost"}>
          <Link href={""} className="flex items-center gap-3">
            View All
          </Link>
        </Button>
      </div>
      {/* recent challenges */}
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {challenges.slice(0,3).map((challenge) => (
          <ChallengeCard
          key={challenge._id}
          _id={challenge._id}
          title={challenge.title}
          status={challenge.status}
          skills={["UI/UX Design", "User Research", "User Research"]}
          seniorityLevels={["Junior", "Intermediate", "Senior"]}
          timeline={challenge.duration}
        />
        ))}
      </div>
    </div>
  );
};

export default RecentChallengesContainer;
