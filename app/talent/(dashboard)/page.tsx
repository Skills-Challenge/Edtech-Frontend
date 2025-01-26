import WelcomeBanner from "@/components/common/WelcomeBanner";
import Dashboard from "@/components/sharedLayout/DashboardLayout";
import RecentChallengesContainer from "@/components/containers/RecentChallengesContainer";
import TalentStatsContainer from "@/components/containers/talent/TalentStatsContainer";
import React from "react";

const Page = () => {
  return (
    <Dashboard>
      <TalentStatsContainer />
    </Dashboard>
  );
};

export default Page;
