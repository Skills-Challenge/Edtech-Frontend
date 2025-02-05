"use client"
import React, { useEffect } from "react";
import AdminStat from "./_partials/AdminStat";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getChallengeStats } from "@/store/actions/challenge.action";

const AdminStatsContainer = () => {
  const dispatch = useAppDispatch();
  const { stats, totalChallenges } = useAppSelector((state) => state.challenges);

  useEffect(() => {
    dispatch(getChallengeStats());
  }, [dispatch]);

  const { totalCompleted = 0, totalOpen = 0, totalOngoing = 0 } = stats || {};

  return (
    <div className="flex flex-col gap-3 ">
      <div className="grid md:grid-cols-2 gap-3">
        <AdminStat title="Total challenge" value={totalChallenges} percentage={15} />
        <AdminStat title="Total Participants" value={29405} percentage={-15} />
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <AdminStat title="Completed challenges" value={totalCompleted} percentage={-15} />
        <AdminStat title="Open challenges" value={totalOpen} percentage={15} />
        <AdminStat title="Ongoing challenges" value={totalOngoing} percentage={15} />
      </div>
    </div>
  );
};

export default AdminStatsContainer;
