"use client";
import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import { createChallenge } from "@/lib/actions/challenge.action";
import { TChallenge } from "@/types/challenge";
import React, { useEffect, useState } from "react";

const page = () => {
  const handleSave = async(data: TChallenge) => {
     try{
       const challenge = await createChallenge(data);
       console.log("Here is create challenge: ", challenge)
     }catch(error: any){
      console.error("Failed to create challenge: ", error?.message)
     }
  };
  return (
    <div>
      <Breadcrumb />
      <ChallengeForm  onSubmit={handleSave} />
    </div>
  );
};

export default page;
