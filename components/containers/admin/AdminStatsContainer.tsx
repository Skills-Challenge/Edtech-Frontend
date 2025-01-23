import React from "react";
import AdminStat from "./_partials/AdminStat";

const AdminStatsContainer = () => {
  return (
    <div className="flex flex-col gap-3 mt-[34px]">
      <div className="grid grid-cols-2 gap-3">
        <AdminStat title="Total challenge" value={29405} percentage={15} />
        <AdminStat title="Total challenge" value={29405} percentage={-15} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <AdminStat title="Total challenge" value={29405} percentage={-15} />
        <AdminStat title="Total challenge" value={29405} percentage={15} />
        <AdminStat title="Total challenge" value={29405} percentage={15} />
      </div>
    </div>
  );
};

export default AdminStatsContainer;
