import React, { useEffect } from "react";
import ChallengeCard from "../common/ChallengeCard";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import SectionHeader from "../common/SectionHeader";
import { getAllChallenges } from "@/store/actions/challenge.action";
import ChallengesContainer from "../containers/ChallengesContainer";

const HomeChallenges = () => {
  return (
    <section className="flex flex-col items-center gap-2 md:mt-10">
      <SectionHeader
        heading="Explore Challenges & Hackathons"
        subheading="Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals."
        maxWidth="695px"
      />
      <div className="pt-[50px]">
      <ChallengesContainer showRecent showtitle={false}/>
      </div>
      <div className="pt-20 pb-10">
        <Link
          href="/challenges&hackathons"
          className="border-2 border-blue-600 py-2 px-10 rounded-md mt-5 text-blue-600"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default HomeChallenges;
