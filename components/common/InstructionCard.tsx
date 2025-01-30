"use client";
import React, { FC, useEffect } from "react";
import ListHeader from "./ListHeader";
import ListItem from "./Listitem";
import InstructionAvatar from "./InstructionAvatar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { deleteChallenge } from "@/lib/actions/challenge.action";
import { toast } from "sonner";

type props = {
  email: string;
  category: string;
  duration: string;
  prize: string;
  userRole: string;
};

const InstructionCard: FC<props> = ({
  email,
  category,
  duration,
  prize,
  userRole,
}) => {
  const router = useRouter()
  const { id } = useParams();
  const challengeId = typeof id === "string" ? id.split("-").pop() : undefined;

  const handleDeleteChallenge = async () => {
    try {
      if (challengeId) {
        const challenge = await deleteChallenge(challengeId);
        toast.success("Successfully Deleted Challenge")
        console.log("Challenge deleted:", challenge);
        router.replace("/admin/challenges&hackathons")
      } else {
        console.error("Challenge ID is undefined");
      }
    } catch (error: any) {
      toast.error("Failed to delete challenge")
      console.error("Failed to delete challenge", error?.message);
    }
  };
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
            <Button className="h-[50px] bg-[#E5533C] w-full" onClick={handleDeleteChallenge}>
              <h2 className="text-base font-semibold leading-[23.5px]">
                Delete
              </h2>
            </Button>
            <Button className="h-[50px] w-full">
              <Link
                className="w-full"
                href={
                  `/admin/challenges&hackathons/update-challenge/${challengeId}`
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
