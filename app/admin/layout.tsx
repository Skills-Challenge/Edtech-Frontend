"use client"

import MainLayout from "@/components/sharedLayout/MainLayout";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";

type props = {
  children: ReactNode;
};
const Layout: FC<props> = ({ children }) => {
  const router = useRouter();
    const { isAuthenticated,user } = useAppSelector((state) => state.auth);
    const isAdmin = user?.role === "admin";
    
    useEffect(() => {
      if (!isAuthenticated || !isAdmin) {
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

export default Layout;
