import React from "react";
import SectionHeader from "../common/SectionHeader";
import ReusableGrid from "../reusable/ReusableGrid";
import { solveProblemsData } from "@/constants/data";
import { Briefcase, Globe, User } from "lucide-react";

const AboutWhy = () => {
  return (
    <section className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB]">
        <h1 className="text-black font-semibold text-center text-3xl mb-20">
          Why we are solving this problem
        </h1>
        <div className="grid gap-6">
          <div className="p-4 bg-primary rounded-lg shadow hover:shadow-lg transition md:col-span-2">
            <User className="h-10 w-10 text-blue-600 mb-4 bg-white p-2 rounded-sm" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Bridging the Experience Gap
            </h3>
            <p className="text-white">
              Many talents acquired theoretical knowledge and are rejected from
              jobs because they lack work experience and are not able to put in
              actions what they acquired in the schools.
            </p>
          </div>
          <div className="p-4 bg-primary rounded-lg shadow hover:shadow-lg transition">
            <Briefcase className="h-10 w-10 text-blue-600 mb-4 bg-white p-2 rounded-sm" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Bridging Education and Employment
            </h3>
            <p className="text-white">
              Traditional education doesnt’ always prepare talents for the
              demands of the tech and digital economy and we are providing
              in-demand skills through Skills Challenges.
            </p>
          </div>
          <div className="p-4 bg-primary rounded-lg shadow hover:shadow-lg transition">
            <Globe className="h-10 w-10 text-blue-600 mb-4 bg-white p-2 rounded-sm" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Preparing Talents for Global Job Markets
            </h3>
            <p className="text-white">
              We are ensuring that African talents shine globally and that’s why
              we are equipping them with global technical experience and
              shandout globally.
            </p>
          </div>
        </div>
      </section>
  );
};

export default AboutWhy;
