"use client"
import HomeChallenges from '@/components/common/HomeChallenges';
import HomeCTA from '@/components/common/HomeCTA';
import HomeExperience from '@/components/common/HomeExperience';
import HomeGetStarted from '@/components/common/HomeGetStarted';
import HomeHero from '@/components/common/HomeHero';
import HomeProfits from '@/components/common/HomeProfits';
import HomeSkills from '@/components/common/HomeSkills';
import HomeStatistics from '@/components/common/HomeStatistics';
import HomeTestimonials from '@/components/common/HomeTestimonials';
import { TestimonialData } from '@/components/common/types';
import React from 'react'


const testimonialData: TestimonialData[] = [
  {
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/67f60e376be8e831f66c721d9cb02bb8ee604349adc47575a8299d20e34b2f1e',
    name: 'Manzi Jack',
    role: 'Product Designer',
    location: 'Kigali'
  },
  {
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f56996590d3060b30fc0faa1c778dbbb03011eff17e446d6b4951ec62906667',
    name: 'Sarah Chen',
    role: 'UX Researcher',
    location: 'Singapore'
  },
  {
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8f56996590d3060b30fc0faa1c778dbbb03011eff17e446d6b4951ec62906667',
    name: 'John Smith',
    role: 'Senior Developer',
    location: 'London'
  },
  {
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f56996590d3060b30fc0faa1c778dbbb03011eff17e446d6b4951ec62906667',
    name: 'Maria Garcia',
    role: 'Project Manager',
    location: 'Madrid'
  }
];

const LandingPage = () => {
  const testimonialData: TestimonialData[] = [
    {
      imageUrl: '/testimonials.png',
      name: 'Manzi Jack',
      role: 'Product Designer',
      location: 'Kigali'
    },
    {
      imageUrl: '/testimonials.png',
      name: 'Sarah Chen',
      role: 'UX Researcher',
      location: 'Singapore'
    },
    {
      imageUrl: '/testimonials.png',
      name: 'John Smith',
      role: 'Senior Developer',
      location: 'London'
    },
    {
      imageUrl: '/testimonials.png',
      name: 'Maria Garcia',
      role: 'Project Manager',
      location: 'Madrid'
    }
  ];
  return (
    <div>
      {/* <HomeNavbar /> */}
      <HomeHero />
      <HomeExperience />
      <HomeStatistics />
      <HomeSkills />
      <HomeChallenges />
      <HomeProfits />
      <HomeTestimonials />
      <HomeGetStarted />
      <HomeCTA />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingPage;