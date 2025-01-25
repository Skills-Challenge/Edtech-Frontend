"use client";

import React from 'react';
import ReusableList from './ReusableList';
import Slider from './Slider'; // Import Slider Component

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
    <section className="py-16 px-6">
      <div className="px-48">
        <h1 className="text-4xl font-bold text-center mb-2">
          Skills Challenges Cover various in-demand skills and Careers for the digital economy
        </h1>
        <p className="text-center mb-16">
          Explore the projects that various talents are working on.
        </p>
      </div>
      <div className="px-52">
        <ReusableList items={skillsData} />
      </div>
      <Slider slides={slidesData} />
    </section>
  );
};

export default HomeSkills;
