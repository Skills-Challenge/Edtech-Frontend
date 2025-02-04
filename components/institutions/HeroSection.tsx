import React from "react";
import ReusableHero from "../reusable/ReusableHero";
import institutionImage from "@/public/institutions1.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="py-24 container">
      <ReusableHero
        media={
          <Image src={institutionImage} alt="img" className="rounded-lg" />
        }
        title="Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning Solution"
        paragraph1="We partner with Universities, Schools, and Trainining Institutions to  build the work experience of their students and trainees through project based learning challenges and hackathons."
        buttonText="Partner with us"
        width="620px"
        size={28}
      />
    </div>
  );
};

export default HeroSection;
