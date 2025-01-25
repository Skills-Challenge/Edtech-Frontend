import React from 'react';
import { User, Briefcase, Globe } from 'lucide-react';
import ReusableGrid from '../reusable/ReusableGrid';

const experienceData = [
  {
    icon: User,
    title: 'Build a Strong Portfolio and Hand-On Experience',
    description: 'Tackle real-world projects through challenges and hackathons that mirror real-world challenges faced by businesses and organizations. Showcase your skills and accomplishments to potential employers and clients through a portfolio of completed projects.',
    colSpan: 2,
  },
  {
    icon: Briefcase,
    title: 'Enhance Your Employment Path',
    description: 'Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream job or contract.',
  },
  {
    icon: Globe,
    title: 'Earn Recognition and Prizes',
    description: 'Earn both money and knowledge prizes by participating in various contests and competitions, working on real-world projects and hackathons from our partner companies & organizations.',
  },
];

const HomeExperience: React.FC = () => {
  return (
    <section className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Experience a New Way of Building Work Experience
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Join the Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.
      </p>
      <ReusableGrid columns={2} rows={2} items={experienceData} />
    </section>
  );
};

export default HomeExperience;
