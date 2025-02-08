import React from "react";
import { User, Briefcase, Globe } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

const HomeExperience: React.FC = () => {
  return (
    <section className="py-[76px] bg-[#F9FAFB]">
      <div className="container">
        <SectionHeader
          heading="Experience a New Way of Building Work Experience"
          subheading="Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals. "
          maxWidth="695px"
        />
        <div className="pt-12">
          <div className="grid gap-6">
            <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition md:col-span-2">
              <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
                <User className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Build a Strong Portfolio and Hand-On Experience
              </h3>
              <p className="text-white text-base">
                Tackle real-world projects through challenges and hackathons
                that mirror real-world challenges faced by businesses and
                organizations. Showcase your skills and accomplishments to
                potential employers and clients through a portfolio of completed
                projects.
              </p>
            </div>
            <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
                <Briefcase className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Enhance Your Employment Path
              </h3>
              <p className="text-white text-base">
                Develop the in-demand skills and build a strong portfolio to
                increase your chances of landing your dream job or contract.
              </p>
            </div>
            <div className="p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Earn Recognition and Prizes
              </h3>
              <p className="text-white text-base">
                Earn both money and knowledge prizes by participating in various
                contests and competitions, working on real-world projects and
                hackathons from our partner companies & organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeExperience;
