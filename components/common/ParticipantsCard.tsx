import React from "react";
import ListHeader from "./ListHeader";
import { Button } from "../ui/Button";
import UserCard1 from "./UserCard1";

const ParticipantsCard = ({
  participants,
}: {
  participants: {
    name: string;
    role: string;
  }[];
}) => {
  return (
    <div className="bg-white rounded-xl border border-border">
      <div className="px-6 py-[23px] pb-[15px] gap-2 flex items-center">
        <ListHeader text="Participants" />
        <div className="px-2 bg-primary w-fit rounded-full">
          <h2 className="text-xs text-white">250</h2>
        </div>
      </div>
      <div>
        {participants.map((participant, idx) => (
          <UserCard1
            name={participant.name}
            role={participant.role}
            key={idx}
          />
        ))}
      </div>
      <div className="p-6">
        <Button className="w-full h-[50px]">
          <h2 className="text-base font-semibold text-white">View All</h2>
        </Button>
      </div>
    </div>
  );
};

export default ParticipantsCard;
