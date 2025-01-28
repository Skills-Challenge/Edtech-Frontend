import * as React from "react";
import { StepCard } from "./StepCard";

const stepsData = [
  {
    stepNumber: 1,
    title: "Sign up on Umurava Platform",
    description: "Submit your completed project for evaluation",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9185c6ec48bd439790a80f61f41d1c1b993dd37288349de7618a63065ee8dae3?placeholderIfAbsent=true&apiKey=edf548e1318b457ebc4bcd0a8af84b35",
    imageAlt: "Sign up illustration"
  },
  {
    stepNumber: 2,
    title: "Browse Open Challenges",
    description: "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c09c157788b0c8772b4768980d3202e6f9ed6bcde5b9e224a334a190a6f3c7c?placeholderIfAbsent=true&apiKey=edf548e1318b457ebc4bcd0a8af84b35",
    imageAlt: "Browse challenges illustration"
  },
  {
    stepNumber: 3,
    title: "Register and Participate",
    description: "Sign up for the challenge and start working on the project."
  },
  {
    stepNumber: 4,
    title: "Submit your work",
    description: "Submit your completed project for evaluation"
  },
  {
    stepNumber: 5,
    title: "Receive Feedback and Recognition",
    description: "Get feedback on your work and celebrate your achievements"
  }
];

export const HomeGetStarted: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-wrap gap-24 justify-center items-center bg-gray-50 lg:p-32 md:p-24 p-10">
      <div className="flex z-0 flex-col grow shrink self-stretch my-auto text-4xl font-bold tracking-tight leading-tight min-w-[240px] text-slate-900 w-[448px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full text-center">How to Get Started</div>
      </div>
      <div className="flex z-0 flex-wrap grow shrink gap-6 items-start self-stretch my-auto min-w-[240px] w-[1009px] max-md:max-w-full">
        <div className="flex flex-col grow shrink min-w-[240px] w-[376px] max-md:max-w-full">
          {stepsData.slice(0, 2).map((step) => (
            <div key={step.stepNumber} className={step.stepNumber > 1 ? "mt-6" : ""}>
              <StepCard {...step} />
            </div>
          ))}
        </div>
        <div className="flex flex-col grow shrink h-[752px] min-w-[240px] w-[530px] max-md:max-w-full">
          {stepsData.slice(2).map((step) => (
            <div key={step.stepNumber} className="flex flex-col justify-center mt-6 w-full min-h-[235px] max-md:max-w-full">
              <div className="flex flex-wrap flex-1 items-start pt-10 pr-14 pb-20 pl-6 bg-white rounded-xl border border-solid border-black border-opacity-10 size-full max-md:px-5 max-md:max-w-full">
                <StepCard {...step} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex absolute bottom-0 right-2 z-0 shrink-0 self-start rounded-full bg-white bg-opacity-10 h-[536px] min-w-[240px] w-[536px]" />
    </div>
  );
};