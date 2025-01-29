import React from "react";
import ComponentHeader from "../common/ComponentHeader";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import ChallengeCard from "../common/ChallengeCard";

const RecentChallengesContainer = () => {
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
        {[...Array(3)].map((_, idx) => (
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
    </div>
  );
};

export default RecentChallengesContainer;
