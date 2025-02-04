"use client"

import React from 'react';
import ReusableHero from '../reusable/ReusableHero';
import heroImage from "@/public/heroImage.png";
import Image from 'next/image';

const HomeHero: React.FC = () => {
  return (
    <section className="container pb-[100px] pt-[50px]">
      <ReusableHero
        media={<Image src={heroImage} alt="Hero" className="rounded-lg w-full h-full" />}
        title="Build Work Experience through Skills Challenges Program "
        paragraph1="Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from various businesses & organizations."
        buttonText="Get Started"
      />
    </section>
  );
};

export default HomeHero;
