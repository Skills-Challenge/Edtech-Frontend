"use client"

import React from 'react';
import ReusableHero from './ReusableHero';

const HomeHero: React.FC = () => {
  return (
    <section className="py-5 lg:px-16 md:px-16 px-6">
      <ReusableHero
        media={<img src="/hero-img.png" alt="Hero" className="rounded-lg w-full" />}
        title="Build Work Experience through Skills Challenges Program "
        paragraph1="Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons from various businesses & organizations."
        // paragraph2="Join thousands of users who are already enjoying our services."
        buttonText="Get Started"
        onButtonClick={() => alert('Button clicked!')}
      />

      {/* <div className="mt-16">
        <ReusableHero
          // media={<video src="/intro.mp4" controls className="rounded-lg shadow-lg w-full" />}
          media={<img src="/hero-img.png" alt="img" />}
          title="Discover More"
        />
      </div> */}
    </section>
  );
};

export default HomeHero;
