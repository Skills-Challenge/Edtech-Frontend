import React from "react";
import ReusableHero from "../reusable/ReusableHero";
import VideoPlayer from "../common/VideoPlayer";

const AboutHeroSection = () => {
  return (
    <div className="container pb-[100px] pt-[50px]">
      <ReusableHero
        media={
          <div className="w-full flex items-center justify-center md:h-[551px] rounded-xl overflow-hidden bg-primary">
            <VideoPlayer />
          </div>
        }
        title="Our Story "
        paragraph1="With 3 years of experience matching African digital talents to local and global job markets, we still remain with a big number of jobs that remain unfilled due to the lack of experienced African Talents."
        paragraph2="Driven by our mission to place skilled and professional digital talent, we created Skills Challenges as a project-based learning solution  for talents to gain real-world experience, solve problems, and build portfolios so that they become ready for global job markets."
      />
    </div>
  );
};

export default AboutHeroSection;
