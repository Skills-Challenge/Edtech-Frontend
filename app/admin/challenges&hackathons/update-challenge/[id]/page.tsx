"use client";

import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { getChallengeById, updateChallenge } from "@/lib/actions/challenge.action";
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

  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  console.log(id);

  useEffect(() => {
    const fetchChallenge = async() => {
      try{
        if(id){
          const challenge = await getChallengeById(id)
          setChallengeData(challenge);
          return challenge
        }else{
          console.error("Invalid challenge Id")
        }
      }catch(error: any){
        console.error("Failed to fetch challenge")
      }
    }

    fetchChallenge();
  }, []);

  const handleSave = async(data: TChallenge) => {
    try{
      console.log(data)
      if (id) {
        const challenge = await updateChallenge(id, data);
        router.replace("/admin/challenges&hackathons")
        toast.success("Successfully updated challenge")
        return challenge
      } else {
        console.error("Invalid challenge ID");
        toast.error("Invalid Challenge ID");
      }
    }catch(error: any){
      console.error("Failed to update challenge: ", error?.message)
      toast.error("Failed to update Challenge")
    }
  };
  return (
    <div>
      <Breadcrumb />
      <ChallengeForm initialData={challengeData} onSubmit={handleSave} />
    </div>
  );
};

export default UpdateChallenge;
