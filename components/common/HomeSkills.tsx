"use client";

import React from "react";
import Slider from "./Slider";
import ReusableList from "../reusable/ReusableList";

const HomeSkills: React.FC = () => {
  const skillsData = [
    "UI/UX Design",
    "Data Science",
    "Graphic Design",
    "Data Analysis & Research",
    "Animation",
    "Videography & Photography",
    "Data Science",
    "AI & Machine Learning",
    "Web3",
    "Digital Marketing & Communications",
  ];

  const slidesData = [
    {
      icon: <div className="text-4xl text-blue-600">🎨</div>,
      description: "Enhance your skills in UI/UX Design",
      buttonText: "Learn More",
      imageSrc: "/slider1.png",
      imageAlt: "UI/UX Design",
    },
    {
      icon: <div className="text-4xl text-blue-600">💡</div>,
      description: "Discover Data Science & Analysis",
      buttonText: "Learn More",
      imageSrc: "/slider1.png",
      imageAlt: "Data Science",
    },
    {
      icon: <div className="text-4xl text-blue-600">📸</div>,
      description: "Photography and Videography Skills",
      buttonText: "Learn More",
      imageSrc: "/slider1.png",
      imageAlt: "Videography & Photography",
    },
    {
      icon: <div className="text-4xl text-blue-600">📊</div>,
      description: "Get involved in Data Analytics",
      buttonText: "Learn More",
      imageSrc: "/slider1.png",
      imageAlt: "Data Analytics",
    },
  ];

  return (
    <section className="py-8 px-4 sm:py-16 sm:px-6 md:px-16 lg:px-24">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Skills Challenges Cover various in-demand skills and Careers for the digital economy
        </h1>
        <p className="text-base sm:text-lg mb-8">
          Explore the projects that various talents are working on.
        </p>
      </div>

      {/* ReusableList Section */}
      <div className="mb-8">
        <ReusableList items={skillsData} />
      </div>

      {/* Slider Section */}
      <div className="mb-16">
        <Slider slides={slidesData} />
      </div>
    </section>
  );
};

export default HomeSkills;
