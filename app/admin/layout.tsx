"use client"
import MainLayout from "@/components/common/MainLayout";
import CommunityDialog from "@/components/containers/CommunityDialog";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { FC, ReactNode, useEffect } from "react";

type props = {
  children: ReactNode;
};
const layout: FC<props> = ({ children }) => {
  const router = useRouter();
    const { isAuthenticated } = useAppSelector((state) => state.auth);
  
    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/auth/login"); 
      }
    }, [isAuthenticated, router]);
  
    if (!isAuthenticated) {
      return null;
    }
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
};

export default layout;
