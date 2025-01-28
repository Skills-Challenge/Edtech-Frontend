import ReusableBG from "@/components/reusable/ReusableBG";
import ReusableGrid from "@/components/reusable/ReusableGrid";
import ReusableHero from "@/components/reusable/ReusableHero";
import ReusableList from "@/components/reusable/ReusableList";
import { Button } from "@/components/ui/button";
import { Briefcase, Globe, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const offeringsData = [
  {
    icon: User,
    title: "Employability and Career Development Opportunities",
    description:
      "Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term succes..",
  },
  {
    icon: Briefcase,
    title: "Practical Application of Classroom Knowledge",
    description:
      "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses. ",
  },
  {
    icon: Globe,
    title: "Students & Trainees Engagement",
    description:
      "Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices  that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.",
  },
  {
    icon: User,
    title: "Access to the Industry Experts & Mentors",
    description:
      "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.",
    colSpan: 2,
  },
  {
    icon: Briefcase,
    title: "Skills Assessments",
    description:
      "Embed our projects based tests and skills assessments directly into your curriculum.",
  },
];

const institutionsData = [
  { src: "/institutions/1.png", alt: "img" },
  { src: "/institutions/2.png", alt: "img" },
  { src: "/institutions/3.png", alt: "img" },
  { src: "/institutions/4.png", alt: "img" },
  { src: "/institutions/5.png", alt: "img" },
  { src: "/institutions/6.png", alt: "img" },
  { src: "/institutions/7.png", alt: "img" },
  { src: "/institutions/8.png", alt: "img" },
  { src: "/institutions/9.png", alt: "img" },
  { src: "/institutions/10.png", alt: "img" },
  { src: "/institutions/11.png", alt: "img" },
  { src: "/institutions/12.png", alt: "img" },
];

const LearningInstitutions = () => {
  return (
    <section>
      <div className="py-24 lg:px-16 md:px-16 px-6">
        <ReusableHero
          media={
            <img
              src="/institutions1.png"
              alt="img"
              className="rounded-lg"
              width={500}
              height={500}
            />
          }
          title="Accelerate Your Students and Traineess Employability and Career Growth through Project-based Learning Solution"
          paragraph1="We partner with Universities, Schools, and Trainining Institutions to  build the work experience of their students and trainees through project based learning challenges and hackathons."
          buttonText="Partner with us"
        />
      </div>

      <div className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB]">
        <h1 className="text-black font-semibold text-center text-3xl mb-20">
          Key Offerings & Benefits:
        </h1>
        <ReusableGrid columns={3} rows={2} items={offeringsData} />
      </div>

      <div className="lg:px-24">
        <h1 className="text-center font-bold lg:text-3xl text-2xl lg:w-[50%] mx-auto text-[#03192E] my-10">
          Join a few Educational Institutions using Skills Challenges by Umurava
        </h1>
        <ReusableList items={institutionsData} />
      </div>

      {/* REUSABLE COMPONENT MISSING IMPLEMENTATION */}

      <div className="lg:py-16 md:p-14 p-5 lg:px-28">
        <ReusableBG className="xl:py-10 px-5 xl:px-20 lg:px-10 py-5">
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="font-bold text-3xl md:text-4xl text-white lg:w-[70%] mx-auto text-center">
              Ready to transform your learning institution?
            </h1>
            <Button className="bg-white text-blue-600 w-fit px-8 py-2 rounded-md mx-auto lg:mx-0">
              Let's Partner
            </Button>
          </div>
        </ReusableBG>
      </div>
    </section>
  );
};

export default LearningInstitutions;
