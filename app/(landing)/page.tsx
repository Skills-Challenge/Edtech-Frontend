"use client";
import HomeChallenges from "@/components/home/HomeChallenges";
import HomeCTA from "@/components/home/HomeCTA";
import HomeExperience from "@/components/home/HomeExperience";
import { HomeGetStarted } from "@/components/home/HomeGetStarted";
import HomeHero from "@/components/home/HomeHero";
import HomeSkills from "@/components/home/HomeSkills";
import HomeStatistics from "@/components/home/HomeStatistics";
import { TestimonialSlider } from "@/components/home/HomeTestimonials";
import WhatWeOffer from "@/components/home/WhatWeOffer";

const LandingPage = () => {
  return (
    <div>
      <HomeHero />
      <HomeExperience />
      <HomeStatistics />
      <HomeSkills />
      <HomeChallenges />
      <WhatWeOffer />
      <TestimonialSlider />
      <HomeGetStarted />
      <HomeCTA />
    </div>
  );
};

export default LandingPage;
