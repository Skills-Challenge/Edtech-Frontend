"use client";

import ReusableHero from "@/components/reusable/ReusableHero";
import { Briefcase, Globe, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="py-5 lg:px-16 md:px-16 px-6">
        <ReusableHero
          media={
            <img
              src="/about-img1.png"
              alt="img"
              className="rounded-lg"
              width={500}
              height={500}
            />
          }
          title="Our Story "
          paragraph1="With 3 years of experience matching African digital talents to local and global job markets, we still remain with a big number of jobs that remain unfilled due to the lack of experienced African Talents."
          paragraph2="Driven by our mission to place skilled and professional digital talent, we created Skills Challenges as a project-based learning solution  for talents to gain real-world experience, solve problems, and build portfolios so that they become ready for global job markets."
        />
      </div>

      <div className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB]">
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
      </div>

      <div className="py-5 lg:px-16 md:px-16 px-6">
        <ReusableHero
          media={
            <img
              src="/about-img2.png"
              alt="img"
              className="rounded-lg"
              width={500}
              height={500}
            />
          }
          title="Skills Challenges Program is built on the Umurava Talent Marketplace Platform "
          paragraph1="A Project-based Learning Solution aimed at providing young and senior talents with an opportunity to showcase their skills to real-world projects and challenges from our partner companies and organizations."
          paragraph2="Umurava Skills Challenges enables young talents to build a portfolio and experience that increases their readiness to access job opportunities and projects."
          buttonText="Get Started"
        />
      </div>
    </section>
  );
};

export default About;
