"use client";
import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { createChallenge } from "@/lib/actions/challenge.action";
import { TChallenge } from "@/types/challenge";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (data: TChallenge) => {
    setIsSaving(true);
    try {
       await createChallenge(data);
      toast.success("Successfully created challenge");
      setIsSaving(false);
      router.replace("/admin/challenges&hackathons");
    } catch (error: any) {
      console.error("Failed to create challenge: ", error?.message);
      toast.error("Failed to create challenge", {
        description: `${error?.message}`,
      });
    } finally {
      setIsSaving(false);
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
