"use client";

import React from "react";
import SectionHeader from "../common/SectionHeader";
import Slider from "../common/Slider";

const HomeSkills: React.FC = () => {
  return (
    <section className="py-8 sm:py-16 container">
      <SectionHeader
        heading="Skills Challenges Cover various in-demand skills and Careers for the digital economy"
        subheading="Explore the projects that various talents are working on."
        maxWidth="970px"
      />
      <div className="mt-10">
        <Slider />
      </div>
    </section>
  );
};

export default HomeSkills;
