import React from "react";
import { User, Briefcase, Globe } from "lucide-react";

const HomeExperience: React.FC = () => {
  return (
    <section className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Experience a New Way of Building Work Experience
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Join the Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.
      </p>

      <div className='grid gap-6'>
        <div className='p-4 bg-primary rounded-lg shadow hover:shadow-lg transition md:col-span-2'>
          <User className="h-10 w-10 text-blue-600 mb-4 bg-white p-2 rounded-sm" />
          <h3 className="text-xl font-semibold text-white mb-2">Build a Strong Portfolio and Hand-On Experience</h3>
          <p className="text-white">Tackle real-world projects through challenges and hackathons that mirror real-world challenges faced by businesses and organizations. Showcase your skills and accomplishments to potential employers and clients through a portfolio of completed projects.</p>
        </div>
        <div className='p-4 bg-primary rounded-lg shadow hover:shadow-lg transition'>
          <Briefcase className="h-10 w-10 text-blue-600 mb-4 bg-white p-2 rounded-sm" />
          <h3 className="text-xl font-semibold text-white mb-2">Enhance Your Employment Path</h3>
          <p className="text-white">Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream job or contract.</p>
        </div>
        <div className='p-4 bg-primary rounded-lg shadow hover:shadow-lg transition'>
          <Globe className="h-10 w-10 text-blue-600 mb-4 bg-white p-2 rounded-sm" />
          <h3 className="text-xl font-semibold text-white mb-2">Earn Recognition and Prizes</h3>
          <p className="text-white">Earn both money and knowledge prizes by participating in various contests and competitions, working on real-world projects and hackathons from our partner companies & organizations.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeExperience;
