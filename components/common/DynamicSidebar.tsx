"use client";

import { cn } from "@/lib/utils";
import Logo from "@/public/logo.png";
import { setIsOpen } from "@/store/reducers/sidebarReducer";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import { link } from "@/types/link";
import { Tuser } from "@/types/user";
import Image from "next/image";
import { FC } from "react";
import LinkItem from "./LinkItem";
import UserCard from "./userCard";

type props = {
  routes: link[];
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
          isOpen ? "translate-x-0" : " -translate-x-80 xl:translate-x-0"
        )}
      >
        {/* top sidebar */}
        <div className="flex flex-col h-full gap-3">
          {/* logo container */}
          <div className="px-6 py-2">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex px-2 flex-col justify-between flex-1">
            {/* top navigators */}
            <div className="flex flex-col gap-1">
              {topRoutes.map((route, idx) => (
                <LinkItem
                  key={idx}
                  icon={route.icon}
                  name={route.name}
                  route={route.route}
                  exact={route?.exact}
                  modal={route?.modal}
                />
              ))}
              {/* <Button
                onClick={()=>dispatch(setModalOpen(true))}
                className={cn(
                  "py-3 px-4 rounded-[4px] flex items-center justify-start gap-3 shadow-none",
                  isModalOpen ? "bg-white " : "bg-inherit"
                )}
              >
                <Icon
                  icon={"lineicons:home-2"}
                  className={cn(
                    "text-[24px]",
                    isModalOpen ? "text-primary" : "text-white"
                  )}
                />
                <h2
                  className={cn(
                    "text-base font-normal text-white leading-[20.3px]",
                    isModalOpen ? "text-primary" : "text-white"
                  )}
                >
                  Community
                </h2>
              </Button> */}
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
          className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[2px] z-40 xl:hidden"
        ></div>
      )}
    </>
  );
};

export default DynamicSidebar;
