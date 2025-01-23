"use client";

import React, { FC } from "react";
import navLinks from "@/constants/navLinks";
import LinkItem from "./LinkItem";
import { log } from "console";
import UserCard from "./userCard";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import { Tuser } from "@/types/user";
import { cn } from "@/lib/utils";
import { setIsOpen } from "@/store/reducers/sidebarReducer";

type props = {
  routes: {
    name: string;
    route: string;
    icon: string;
  }[];
};
const DynamicSidebar: FC<props> = ({ routes }) => {
  // hooks
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const { user } = useAppSelector((state: AppState) => state.auth);

  const topRoutes = routes.slice(0, 3);
  const bottomRoutes = routes.slice(3);

  const handleSidebarClose = () => {
    dispatch(setIsOpen(false));
  };
  return (
    <>
      <div
        className={cn(
          "fixed xl:sticky top-0 xl:block py-6 bg-primary min-w-[320px] 2xl:w-[380px] h-[100vh] transition-all duration-150 z-50",
          isOpen ? 'translate-x-0' : ' -translate-x-80 xl:translate-x-0'
        )}
      >
        {/* top sidebar */}
        <div className="flex flex-col h-full">
          {/* logo container */}
          <div className="px-6 py-2"></div>

          <div className="flex px-2 flex-col justify-between flex-1">
            {/* top navigators */}
            <div className="flex flex-col gap-1">
              {topRoutes.map((route, idx) => (
                <LinkItem
                  key={idx}
                  icon={route.icon}
                  name={route.name}
                  route={route.route}
                />
              ))}
            </div>
            {/* bottom navigators */}
            <div className="flex flex-col gap-1">
              {bottomRoutes.map((route, idx) => (
                <LinkItem
                  key={idx}
                  icon={route.icon}
                  name={route.name}
                  route={route.route}
                />
              ))}
            </div>
          </div>
          {/* bottom user card */}
          <div className="py-2 px-6">
            <UserCard user={user as Tuser} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={handleSidebarClose}
          className="fixed inset-0 bg-black backdrop-blur-sm opacity-10 z-40 xl:hidden"
        ></div>
      )}
    </>
  );
};

export default DynamicSidebar;
