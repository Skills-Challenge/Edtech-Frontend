import React from "react";
import umuravaLogo from "@/public/umuravaLogo2.png";
import Image from "next/image";
import ListHeader from "../common/ListHeader";
import ListItem from "../common/Listitem";
import { challengeData } from "@/constants/data";
import InstructionCard from "../common/InstructionCard";
import ParticipantsCard from "../common/ParticipantsCard";

const SingleChallengeContainer = () => {
  return (
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
            <ListHeader text={`Project Brief : ${challengeData.title}`} />
            <ListItem text={challengeData.projectBrief} />
          </div>
          <div className="flex flex-col gap-4">
            <ListHeader text={`Tasks:`} />
            <ListHeader text={`Project Requirements`} />
            <div>
              {challengeData.requirements.map((requirement, idx) => (
                <ListItem key={idx} text={requirement} dot />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ListHeader text={`Product Design:`} />
            <div>
              {challengeData.productDesign.map((design, idx) => (
                <ListItem key={idx} text={design} dot />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ListHeader text={`Deliverables:`} />
            <div>
              {challengeData.deliverables.map((delivery, idx) => (
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
            email={challengeData.email}
            category={challengeData.category}
            duration={challengeData.duration}
            prize={challengeData.prize}
            userRole="admin"
          />
          <ParticipantsCard participants={challengeData.participants} />
        </div>
      </div>
    </div>
  );
};

export default SingleChallengeContainer;
