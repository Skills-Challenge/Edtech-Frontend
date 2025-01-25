import DashboardLayout from "@/components/common/DashboardLayout";
import CommunityDialog from "@/components/containers/CommunityDialog";
import React, { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};
const layout: FC<props> = ({ children }) => {
  return <DashboardLayout>
    {children}
    <CommunityDialog/>
  </DashboardLayout>;
};

export default layout;
