"use client";

import { Button } from "@/components/ui/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import ChallengeCard from "../common/ChallengeCard";
import ComponentHeader from "../common/ComponentHeader";
import ChallengeCardSkeleton from "../skeletons/ChallengeCardSkeleton";
import { getAllChallenges } from "@/store/actions/challenge.action";

const RecentChallengesContainer = () => {
  const { challenges, fetchAllLoading } = useAppSelector((state) => state.challenges);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (challenges.length === 0) {
      dispatch(getAllChallenges(1));
    }
  }, [dispatch, challenges.length]);

  return (
    <div className="py-10">
      {/* header */}
      <div className="flex items-center justify-between">
        <ComponentHeader heading="Recent Challenges" />
        <Button className="" variant={"ghost"}>
          <Link href={""} className="flex items-center gap-3">
            View All
          </Link>
        </Button>
      </div>
      {/* recent challenges */}
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fetchAllLoading ? (
          <>
            {[...Array(3)].map((_, idx) => (
              <ChallengeCardSkeleton key={idx} />
            ))}
          </>
        ) : (
          challenges
            .slice(0, 3)
            .map((challenge) => (
              <ChallengeCard
                key={challenge._id}
                _id={challenge._id}
                title={challenge.title}
                status={challenge.status}
                skills={["UI/UX Design", "User Research", "User Research"]}
                seniorityLevels={["Junior", "Intermediate", "Senior"]}
                timeline={challenge.duration}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default RecentChallengesContainer;
