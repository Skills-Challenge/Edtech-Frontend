"use client";
import Breadcrumb from "@/components/common/BreadCrumps";
import ChallengeForm from "@/components/common/form/ChallengeForm";
import React, { useEffect, useState } from "react";

const page = () => {
  const handleSave = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <Breadcrumb />
      <ChallengeForm  onSubmit={handleSave} />
    </div>
  );
};

export default page;
