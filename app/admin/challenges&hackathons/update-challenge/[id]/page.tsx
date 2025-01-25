"use client";

import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { challengeSchema } from "@/schemas/ChallengeSchema";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { z } from "zod";

// Define TypeScript type from Zod schema
type ChallengeType = z.infer<typeof challengeSchema>;

const UpdateChallenge = () => {
  const [challengeData, setChallengeData] = useState<ChallengeType | null>(
    null
  );

  const params = useParams();
  const {id} = params;

  console.log(id);

  useEffect(() => {
    const savedChallenge = localStorage.getItem("challengeData");
    if (savedChallenge) {
      setChallengeData(JSON.parse(savedChallenge) as ChallengeType);
    }
  }, []);

  const handleSave = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <Breadcrumb />
      <ChallengeForm initialData={challengeData} onSubmit={handleSave} />
    </div>
  );
};

export default UpdateChallenge;
