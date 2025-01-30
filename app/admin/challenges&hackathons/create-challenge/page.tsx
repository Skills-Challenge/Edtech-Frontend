"use client";
import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { createChallenge } from "@/lib/actions/challenge.action";
import { TChallenge } from "@/types/challenge";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const page = () => {
  const handleSave = async (data: TChallenge) => {
    const router = useRouter();
    try {
      const challenge = await createChallenge(data);
      toast.success("Successfully created challenge");
      router.replace("/admin/challenges&hackathons");
    } catch (error: any) {
      console.error("Failed to create challenge: ", error?.message);
      toast.error("Failed to create challenge", {
        description: `${error?.message}`,
      });
    }
  };
  return (
    <div>
      <Breadcrumb />
      <ChallengeForm onSubmit={handleSave} />
    </div>
  );
};

export default page;
