"use client";

import React, { FC, ReactNode } from "react";
import { AppState, useAppSelector } from "@/store/store";
import navLinks from "@/constants/navLinks";
import CommunityDialog from "../containers/CommunityDialog";
import DynamicSidebar from "../common/DynamicSidebar";
import TopBar from "../common/TopBar";

type props = {
  children: ReactNode;
};
const MainLayout: FC<props> = ({ children }) => {
  const { user } = useAppSelector((state: AppState) => state.auth);

  //   getting the roles links
  const currentRoutes =
    user?.role === "admin" ? navLinks.adminRoutes : navLinks.talentRoutes;

  return (
    <div className="flex flex-row min-h-screen relative">
      {/* dynamic sidebar */}
      <DynamicSidebar routes={currentRoutes} />
      <main className="flex-1 flex flex-col w-full xl:w-[calc(100%-320px)] 2xl:w-[calc(100%-380px)]">
        {/* topbar */}
        <TopBar />
        {/* main content */}
        <div className="bg-body h-full">{children}</div>
      </main>
      <CommunityDialog />
    </div>
  );
};

export default MainLayout;
