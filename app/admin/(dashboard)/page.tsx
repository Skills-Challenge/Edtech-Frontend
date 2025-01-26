import AdminStatsContainer from "@/components/containers/admin/AdminStatsContainer";
import Dashboard from "@/components/sharedLayout/DashboardLayout";
import React from "react";

const DashboardPage = () => {
  return (
    <Dashboard>
      <AdminStatsContainer />
    </Dashboard>
  );
};

export default DashboardPage;
