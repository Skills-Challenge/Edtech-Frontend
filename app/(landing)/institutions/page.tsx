import ReusableBG from "@/components/reusable/ReusableBG";
import ReusableHero from "@/components/reusable/ReusableHero";
import ReusableList from "@/components/reusable/ReusableList";
import { Button } from "@/components/ui/Button";
import { Briefcase, Globe, User } from "lucide-react";
import Image from "next/image";
import React from "react";

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

const challenges = [
  {
    icon: "/icons/num1.svg",
    desc: "As Career Development and Job Readiness Program",
  },
  {
    icon: "/icons/num2.svg",
    desc: "As Skills Assessments Method after a course or a term",
  },
  {
    icon: "/icons/num3.svg",
    desc: "As extracurricular activities to complement academic courses",
  },
  { icon: "/icons/num4.svg", desc: "As the portfolio of the Students" },
  {
    icon: "/icons/num5.svg",
    desc: "As part of Capstone Projects or final-year assignments ",
  },
];

const LearningInstitutions = () => {
  return (
    <main>
      <section className="py-24 lg:px-16 md:px-16 px-6">
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
      </section>

      <section className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB]">
        <h1 className="text-black font-semibold text-center text-3xl mb-20">
          Key Offerings & Benefits:
        </h1>
        <div className="grid md:grid-cols-3 md:gird-rows-2 gap-6">
          <div className="p-4 bg-primary rounded-lg shadow hover:shadow-lg transition">
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
          <div className="p-4 bg-primary rounded-lg shadow hover:shadow-lg transition md:col-span-2">
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

      <section className="lg:px-24">
        <h1 className="text-center font-bold lg:text-3xl text-2xl lg:w-[50%] mx-auto text-[#03192E] my-10">
          Join a few Educational Institutions using Skills Challenges by Umurava
        </h1>
        <ReusableList items={institutionsData} />
      </section>

      <section className="py-16 lg:px-28 md:px-16 px-6 bg-[#F9FAFB] my-10">
        <h1 className="text-center font-bold lg:text-3xl text-2xl lg:w-[50%] mx-auto text-[#03192E] my-10">
          How Skills Challenges Program can Be Integrated into your Learning
          Institution
        </h1>
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            {challenges.map((item, index) => (
              <div key={index} className="flex items-center gap-2 my-10">
                <img src={item.icon} alt="" />
                <p className="text-[#0E225A]">{item.desc}</p>
              </div>
            ))}
          </div>
          <Image
            src="/institutions2.png"
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="lg:py-16 md:p-14 p-5 lg:px-28">
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
      </section>
    </main>
  );
};

export default LearningInstitutions;
