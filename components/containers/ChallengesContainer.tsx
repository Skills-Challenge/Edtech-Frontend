"use client";

import React, { useEffect, useState } from "react";
import TabButton from "../ui/TabButton";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import ChallengeCard from "../common/ChallengeCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import { getChallenges } from "@/lib/actions/challenge.action";
import ChallengeCardSkeleton from "../skeletons/ChallengeCardSkeleton";

export type filterValue = "all" | "completed" | "open" | "ongoing";

const ChallengesContainer = () => {
  const [filter, setFilter] = useState<filterValue>("all");
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const user = useAppSelector((state: AppState) => state.auth.user);
  const { challenges, loading, totalChallenges } = useAppSelector(
    (state) => state.challenges
  );

  const CHALLENGE_PER_PAGE = 6;

  const lastPage = Math.ceil(totalChallenges / CHALLENGE_PER_PAGE);
  const isAdmin = user?.role === "admin";

  // const chall = challenges
  //   .filter((ch) => ch.status === "completed")
  //   .length.toString();

  useEffect(() => {
    dispatch(getChallenges(page));
  }, [dispatch, page]);
  return (
    <div>
      {/* tabs container */}
      <div className="py-[18px] flex flex-col-reverse items-end md:items-center md:flex-row gap-5 justify-between border-b border-b-border mt-5 md:mt-0">
        <div className="flex items-center gap-3 flex-1 w-full md:w-auto overflow-x-auto custom-scrollbar">
          <TabButton
            setFilter={setFilter}
            title="all"
            total={challenges.length.toString()}
            highlighted={filter === "all"}
          />
          <TabButton
            setFilter={setFilter}
            title="completed"
            total={challenges
              .filter((ch) => ch.status === "completed")
              .length.toString()}
            highlighted={filter === "completed"}
          />
          <TabButton
            setFilter={setFilter}
            title="ongoing"
            total={challenges
              .filter((ch) => ch.status === "ongoing")
              .length.toString()}
            highlighted={filter === "ongoing"}
          />
          <TabButton
            setFilter={setFilter}
            title="open"
            total={challenges
              .filter((ch) => ch.status === "open")
              .length.toString()}
            highlighted={filter === "open"}
          />
        </div>
        {isAdmin && (
          <div className="flex items-center">
            <Button className="rounded-lg py-4 px-[18px]">
              <Link
                href={`${pathname}/create-challenge`}
                className="flex items-center"
              >
                <Plus fontSize={24} color="white" />
                <h2 className="text-base font-medium leading-[23px] text-white">
                  Create New Challenge
                </h2>
              </Link>
            </Button>
          </div>
        )}
      </div>
      {/* challenges container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[26px] pt-[18px]">
        {loading ? (
          <>
            {[...Array(6)].map((_, idx) => (
              <ChallengeCardSkeleton key={idx} />
            ))}
          </>
        ) : (
          challenges
            .filter((ch) => filter === "all" || ch.status === filter)
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

      {/* pagination buttons */}
      <div className="flex items-center justify-between mt-[68px] px-[70px]">
        {/* previous button */}
        <Button
          className="py-2 px-5 bg-white rounded-md shadow-sm w-[95px]"
          disabled={page === 1} // ✅ Disable if on first page
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          <h2 className="text-sm font-normal leading-[20px] text-[#98A2B3]">
            Previous
          </h2>
        </Button>
        <h2 className="text-sm font-normal leading-[20px]">Page {page}</h2>
        {/* next button */}
        <Button
          className="py-2 px-8 rounded-md shadow-sm w-[95px]"
          disabled={page >= lastPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <h2 className="text-sm font-normal leading-[20px] text-white">
            Next
          </h2>
        </Button>
      </div>
    </div>
  );
};

export default ChallengesContainer;
