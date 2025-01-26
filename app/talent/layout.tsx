import MainLayout from "@/components/common/MainLayout";
import React, { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};
const layout: FC<props> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default layout;
