"use client";
import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeCard from "@/components/common/ChallengeCard";
import { useAppSelector } from "@/store/store";

const Challenges = () => {
  const { challenges } = useAppSelector((state) => state.challenges);
  return (
    <div className="container relative min-h-[40.3vh]">
      <div className="pt-5 bg-white sticky top-0">
        <Breadcrumb border={false} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12 py-12">
        {challenges.slice(0, 8).map((challenge) => (
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
    </div>
  );
};

export default Challenges;
