"use client";
import { challengeData } from "@/constants/data";
import umuravaLogo from "@/public/umuravaLogo2.png";
import { AppState, useAppSelector } from "@/store/store";
import { TChallenge } from "@/types/challenge";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "../common/BreadCrumps";
import InstructionCard from "../common/InstructionCard";
import ListHeader from "../common/ListHeader";
import ListItem from "../common/Listitem";
import ParticipantsCard from "../common/ParticipantsCard";
import ProjectDetailsSkeleton from "../skeletons/ProjectDetailsSkeleton";
import { getChallengeById } from "@/services/challenge.service";

const SingleChallengeContainer = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.auth);
  const loading = useAppSelector(
    (state: AppState) => state.challenges.fetchSingleLoading
  );

  const [challenge, setChallenge] = useState<TChallenge | null>(null);
  const challengeId = typeof id === "string" ? id.split("-").pop() : undefined;

  // fetching the challenge
  const fetchChallenge = async () => {
    if (challengeId) {
      try {
        const response = await getChallengeById(challengeId);
        setChallenge(response.challenge);
      } catch (error: any) {
        console.error("Error while fetching the challenge: ", error?.message);
      }
    } else {
      console.error("Challenge ID is undefined");
    }
  };

  useEffect(() => {
    fetchChallenge();
  }, [challengeId]);

  return (
    <>
      <Breadcrumb />
      {loading ? (
        <ProjectDetailsSkeleton />
      ) : (
        challenge && (
          <div className="p-9">
            {/* project description components */}
            <div className="flex flex-col xmd:flex-row gap-6">
              {/* project brief */}
              <div className="xmd:w-[60%] p-8 bg-white rounded-xl border border-border flex flex-col gap-6">
                {/* intro image */}
                <div className="w-full h-[296px] flex items-center justify-center rounded-xl bg-primary">
                  <Image src={umuravaLogo} alt="umuravaLogo" />
                </div>
                {/* project brief */}
                <div className="flex flex-col gap-4">
                  <ListHeader text={`Project Brief : ${challenge.title}`} />
                  <ListItem text={challenge.brief} />
                </div>
                <div className="flex flex-col gap-4">
                  <ListHeader text={`Tasks:`} />
                  <ListHeader text={`Project Requirements`} />
                  <div>
                    {challenge.requirements.map((requirement, idx) => (
                      <ListItem key={idx} text={requirement} dot />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <ListHeader text={`Product Design:`} />
                  <div>
                    {challenge.description.map((design, idx) => (
                      <ListItem key={idx} text={design} dot />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <ListHeader text={`Deliverables:`} />
                  <div>
                    {challenge.deliverables.map((delivery, idx) => (
                      <ListItem key={idx} text={delivery} dot />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <ListHeader text={`NOTE:`} />
                  <ListItem text={challengeData.note} />
                </div>
              </div>
              {/* instructions and participants */}
              <div className="xmd:w-[40%] flex flex-col gap-6">
                <InstructionCard
                  email={challenge.contactEmail}
                  category={challengeData.category}
                  duration={challenge.duration}
                  prize={challenge.prize}
                  userRole={user?.role || "talent"}
                />
                <ParticipantsCard participants={challengeData.participants} />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default SingleChallengeContainer;
