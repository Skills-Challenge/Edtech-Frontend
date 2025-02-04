import * as React from "react";
import { StepCard } from "./StepCard";
import { stepsData } from "@/data/data";
import SectionHeader from "./SectionHeader";

export const HomeGetStarted: React.FC = () => {
  return (
    <section className="bg-gray-50 py-[90px]">
      <div className="container">
        <SectionHeader heading="How to Get Started" />

        <div className="flex flex-col lg:flex-row gap-[22px] pt-[100px]">
          <div className="w-full lg:w-[39%] flex flex-col gap-6">
            {stepsData.slice(0, 2).map((step, index) => (
              <StepCard {...step} key={index} />
            ))}
          </div>
          <div className="w-full lg:w-[59%] flex flex-col gap-6">
            {stepsData.slice(2).map((step, index) => (
              <StepCard {...step} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
