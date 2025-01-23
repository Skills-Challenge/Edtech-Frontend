"use client";

import React from "react";
import ComponentHeader from "./ComponentHeader";
import { AppState, useAppSelector } from "@/store/store";
import { Icon } from "@iconify/react";
import { Button } from "../ui/Button";
import Link from "next/link";

const WelcomeBanner = () => {
  const { user } = useAppSelector((state: AppState) => state.auth);
  const isAdmin = user?.role === "admin";
  
  return (
    <div className="flex flex-row justify-between h-[100px]">
      <div className="self-start">
        <ComponentHeader
          heading={`Welcome Back ${user?.fullname},`}
          subHeading="Build your Work Exprience through Skills Challenges"
        />
      </div>
      {isAdmin && (
        <Button className="px-[18px] py-4 h-[55px] self-end">
          <Link href={"/"} className="flex items-center gap-2">
            <Icon icon={"proicons:eye"} fontSize={24} className="text-white" />
            <h2 className="text-base text-white font-medium leading-[23.2px]">
              View Profile
            </h2>
          </Link>
        </Button>
      )}
    </div>
  );
};

export default WelcomeBanner;
