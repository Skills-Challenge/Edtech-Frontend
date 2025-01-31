"use client"
import MainLayout from "@/components/common/MainLayout";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { FC, ReactNode, useEffect } from "react";

type props = {
  children: ReactNode;
};
const layout: FC<props> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated,user } = useAppSelector((state) => state.auth);

  const isAdmin = user?.role === "admin";

  // allowing only the normal users to access the talents pages
  useEffect(() => {
    if (!isAuthenticated || isAdmin) {
      router.replace("/auth/login"); 
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }
  return <MainLayout>{children}</MainLayout>;
};

export default layout;
