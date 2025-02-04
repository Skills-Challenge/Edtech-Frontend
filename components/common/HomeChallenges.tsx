import React from "react";
import ChallengeCard from "./ChallengeCard";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import SectionHeader from "./SectionHeader";

const HomeChallenges = () => {
  const { challenges } = useAppSelector((state) => state.challenges);
  return (
    <section className="flex flex-col items-center gap-2 md:mt-10">
      <SectionHeader
        heading="Explore Challenges & Hackathons"
        subheading="Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals."
        maxWidth="695px"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[26px] pt-[90px]">
        {challenges.slice(0, 3).map((challenge) => (
          <ChallengeCard
            key={challenge._id}
            _id={challenge._id}
            title={challenge.title}
            status={challenge.status}
            skills={["UI/UX Design", "User Research", "User Research"]}
            seniorityLevels={["Junior", "Intermediate", "Senior"]}
            timeline={challenge.duration}
          />
        ))}
      </div>
      <div className="pt-20 pb-10">
        <Link
          href="/challenges"
          className="border-2 border-blue-600 py-2 px-10 rounded-md mt-5 text-blue-600"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default HomeChallenges;
