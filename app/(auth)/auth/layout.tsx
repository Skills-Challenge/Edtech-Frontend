"use client";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";

type props = {
  children: ReactNode;
};
const Layout = ({ children }: props) => {
  const router = useRouter();
  const { isAuthenticated , user } = useAppSelector((state) => state.auth);
  const isAdmin = user?.role === "admin"


  useEffect(() => {
    if (isAuthenticated) {
       if(isAdmin){
        router.replace("/admin");
       }else{
        router.replace("/talent")
       }
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex justify-center items-center bg-body h-screen">
      <div className="w-[90%] sm:w-[80%] md:w-[30%] bg-white rounded-xl border border-border">
        {children}
      </div>
    </div>
  );
};

export default Layout;
