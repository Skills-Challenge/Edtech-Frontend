import React, { FC } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./Listitem";
import InstructionAvatar from "./InstructionAvatar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type props = {
  email: string;
  category: string;
  duration: string;
  prize: string;
  userRole: "admin" | "talent";
};

const InstructionCard: FC<props> = ({
  email,
  category,
  duration,
  prize,
  userRole,
}) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-white flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <ListHeader text="Key Instructions:" />
        <ListItem text="You are free to schedule the clarification call with the team via this" />
      </div>
      <div className="flex flex-col gap-[34px]">
        <InstructionAvatar title={"Contact Email"} value={email} />
        <InstructionAvatar title={"Challenge Category"} value={category} />
        <InstructionAvatar title={"Duration"} value={duration} />
        <InstructionAvatar title={"Money Prize"} value={prize} />
      </div>
      <div className="flex gap-5 text-white">
        {userRole === "admin" ? (
          <>
            <Button className="h-[50px] bg-[#E5533C] w-full">
              <h2 className="text-base font-semibold leading-[23.5px]">
                Delete
              </h2>
            </Button>
            <Button className="h-[50px] w-full">
              <Link
                className="w-full"
                href={
                  "/admin/challenges&hackathons/update-challenge/1234567890"
                }
              >
                <h2 className="text-base font-semibold leading-[23.5px]">
                  Edit
                </h2>
              </Link>
            </Button>
          </>
        ) : (
          <Button className="h-[50px] w-full">
            <h2 className="text-base font-semibold leading-[23.5px]">
              Submit your work
            </h2>
          </Button>
        )}
      </div>
    </div>
  );
};

export default InstructionCard;
