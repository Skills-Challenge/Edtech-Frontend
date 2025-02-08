"use client";

import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { Icons } from "@/components/common/icons";
import { getChallengeById } from "@/services/challenge.service";
import { updateChallenge } from "@/store/actions/challenge.action";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import { TChallenge } from "@/types/challenge";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const UpdateChallenge = () => {
  const router = useRouter();
  const [challengeData, setChallengeData] = useState<TChallenge | null>(
    null
  );
  const dispatch = useAppDispatch();
  const updateLoading = useAppSelector(
    (state: AppState) => state.challenges.updateLoading
  );

  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const fetchChallenge = async () => {
    try {
      setIsLoading(true);
      if (id) {
        const response = await getChallengeById(id);
        setChallengeData(response.challenge);
        setIsLoading(false);
      } else {
        console.error("Invalid challenge Id");
      }
    } catch (error: any) {
      console.error("Failed to fetch challenge:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChallenge();
  }, []);

  const handleSave = async (data: TChallenge) => {
    if (id) {
      const response = await dispatch(updateChallenge({ id, data }));
      if (updateChallenge.fulfilled.match(response)) {
        router.replace("/admin/challenges&hackathons");
      }
    } else {
      toast.error("Invalid Challenge ID");
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
        isSavingUpdating={updateLoading}
      />
    </div>
  );
};

export default UpdateChallenge;
