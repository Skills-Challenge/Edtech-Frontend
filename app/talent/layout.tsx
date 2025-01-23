import DashboardLayout from "@/components/common/DashboardLayout";
import React, { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};
const layout: FC<props> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
