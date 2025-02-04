"use client";

import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { Icons } from "@/components/common/icons";
import {
  getChallengeById,
  updateChallenge,
} from "@/lib/actions/challenge.action";
import { challengeSchema } from "@/schemas/ChallengeSchema";
import { TChallenge } from "@/types/challenge";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

type ChallengeType = z.infer<typeof challengeSchema>;

const UpdateChallenge = () => {
  const router = useRouter();
  const [challengeData, setChallengeData] = useState<ChallengeType | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const fetchChallenge = async () => {
    try {
      setIsLoading(true);
      if (id) {
        const challenge = await getChallengeById(id);
        setChallengeData(challenge);
        setIsLoading(false);
        return challenge;
      } else {
        console.error("Invalid challenge Id");
      }
    } catch (error: any) {
      console.error("Failed to fetch challenge:",error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChallenge();
  }, []);

  const handleSave = async (data: TChallenge) => {
    try {
      setIsUpdating(true);
      if (id) {
        const challenge = await updateChallenge(id, data);
        toast.success("Successfully updated challenge");
        setIsLoading(false);
        router.replace("/admin/challenges&hackathons");
        return challenge;
      } else {
        console.error("Invalid challenge ID");
        toast.error("Invalid Challenge ID");
      }
    } catch (error: any) {
      console.error("Failed to update challenge: ", error?.message);
      toast.error("Failed to update Challenge");
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Icons.spinner className="animate-spin w-10 h-10 text-teal-1000" />
      </div>
    );
  }

  if (!challengeData) {
    return (
      <div className="flex justify-center items-center h-full">
        <h2 className="text-base font-workSans text-primary">
          No challenge with {id} found
        </h2>
      </div>
    );
  }
  return (
    <div>
      <Breadcrumb />
      <ChallengeForm
        initialData={challengeData}
        onSubmit={handleSave}
        isSavingUpdating={isUpdating}
      />
    </div>
  );
};

export default UpdateChallenge;
