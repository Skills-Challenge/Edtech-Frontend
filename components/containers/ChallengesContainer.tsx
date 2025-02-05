"use client";

import React, { useEffect, useRef, useState } from "react";
import TabButton from "../ui/TabButton";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import ChallengeCard from "../common/ChallengeCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import ChallengeCardSkeleton from "../skeletons/ChallengeCardSkeleton";
import ComponentHeader from "../common/ComponentHeader";
import { getAllChallenges } from "@/store/actions/challenge.action";

export type filterValue = "all" | "completed" | "open" | "ongoing";

type ChallengesContainerProps = {
  showRecent?: boolean;
};

const ChallengesContainer: React.FC<ChallengesContainerProps> = ({
  showRecent = false,
}) => {
  const [filter, setFilter] = useState<filterValue>("all");
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const user = useAppSelector((state: AppState) => state.auth.user);
  const { challenges, fetchAllLoading, totalChallenges } = useAppSelector(
    (state) => state.challenges
  );

  const CHALLENGE_PER_PAGE = showRecent ? 3 : 6;
  const lastPage = Math.ceil(totalChallenges / CHALLENGE_PER_PAGE);
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (challenges.length === 0) dispatch(getAllChallenges(1));
  }, [dispatch]);

  // Filter challenges based on selection
  const filteredChallenges = challenges.filter(
    (ch) => filter === "all" || ch.status === filter
  );

  // Paginate challenges
  const paginatedChallenges = showRecent
    ? challenges.slice(0, 3)
    : filteredChallenges.slice(
        (page - 1) * CHALLENGE_PER_PAGE,
        page * CHALLENGE_PER_PAGE
      );

  return (
    <div>
      {/* Tabs Container */}
      {!showRecent ? (
        <div className="py-[18px] flex flex-col-reverse items-end md:items-center md:flex-row gap-5 justify-between border-b border-b-border mt-5 md:mt-0">
          <div className="flex items-center gap-3 flex-1 w-full md:w-auto overflow-x-auto custom-scrollbar">
            {["all", "completed", "ongoing", "open"].map((status) => (
              <TabButton
                key={status}
                setFilter={setFilter}
                title={status as filterValue}
                total={challenges
                  .filter((ch) => status === "all" || ch.status === status)
                  .length.toString()}
                highlighted={filter === status}
              />
            ))}
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
      ) : (
        <div className="flex items-center justify-between pt-10">
          <ComponentHeader heading="Recent Challenges" />
          <Button className="" variant={"ghost"}>
            <Link href={""} className="flex items-center gap-3">
              View All
            </Link>
          </Button>
        </div>
      )}

      {/* Challenges Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[26px] pt-[18px]">
        {fetchAllLoading ? (
          [...Array(CHALLENGE_PER_PAGE)].map((_, idx) => (
            <ChallengeCardSkeleton key={idx} />
          ))
        ) : paginatedChallenges.length > 0 ? (
          paginatedChallenges.map((challenge) => (
            <ChallengeCard
              key={challenge._id}
              _id={challenge._id}
              title={challenge.title}
              status={challenge.status}
              skills={["UI/UX Design", "User Research"]}
              seniorityLevels={["Junior", "Intermediate", "Senior"]}
              timeline={challenge.duration}
            />
          ))
        ) : (
          <div className="py-20 flex items-center justify-center md:col-span-2 lg:col-span-3 h-full">
            <h2 className="text-base font-bold">No challenges here</h2>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!showRecent && paginatedChallenges.length > 0 && (
        <div className="flex items-center justify-between mt-[68px] px-[70px]">
          <Button
            className="py-2 px-5 bg-white rounded-md shadow-sm w-[95px]"
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            <h2 className="text-sm font-normal leading-[20px] text-[#98A2B3]">
              Previous
            </h2>
          </Button>
          <h2 className="text-sm font-normal leading-[20px]">Page {page}</h2>
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
      )}
    </div>
  );
};

export default ChallengesContainer;
