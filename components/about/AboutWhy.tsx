import React from "react";
import SectionHeader from "../common/SectionHeader";
import ReusableGrid from "../reusable/ReusableGrid";
import { solveProblemsData } from "@/constants/data";

const AboutWhy = () => {
  return (
    <div className="py-16 bg-[#F9FAFB]">
      <div className="pb-[75px]">
        <SectionHeader heading="Why we are solving this problem" />
      </div>
      <div className="container">
        <ReusableGrid columns={2} rows={2} items={solveProblemsData} />
      </div>
    </div>
  );
};

export default AboutWhy;
