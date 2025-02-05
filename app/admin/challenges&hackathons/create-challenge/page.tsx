"use client";
import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { createChallenge } from "@/store/actions/challenge.action";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import { TChallenge } from "@/types/challenge";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isSaving = useAppSelector(
    (state: AppState) => state.challenges.createLoading
  );

  const handleSave = async (data: TChallenge) => {
    const response = await dispatch(createChallenge(data));
    if (createChallenge.fulfilled.match(response)) {
      toast.success("Successfully created challenge");
      router.replace("/admin/challenges&hackathons");
    }
  };
  return (
    <div>
      <Breadcrumb />
      <ChallengeForm onSubmit={handleSave} isSavingUpdating={isSaving} />
    </div>
  );
};

export default Page;
