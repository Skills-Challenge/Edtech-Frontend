"use client";

import { link } from "@/types/link";
import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppState, useAppDispatch, useAppSelector } from "@/store/store";
import { setModalOpen } from "@/store/reducers/ModalReducer";

interface props extends link {
  modal?: boolean;
}

const LinkItem: FC<props> = ({
  name,
  route,
  icon,
  exact = false,
  modal = false,
}) => {
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(
    (state: AppState) => state.modal.isModalOpen
  );

  let isActive = false;

  if (modal) {
    isActive = isModalOpen;
  } else if (!isModalOpen) {
    isActive = exact ? pathname === route : pathname.startsWith(route);
  }

  return (
    <Link
      href={modal ? "#" : route}
      onClick={(e) => {
        if (modal) {
          e.preventDefault();
          dispatch(setModalOpen(true));
        }
      }}
      className={cn(
        "py-3 px-4 rounded-[4px] flex items-center gap-3 transition-colors",
        isActive ? "bg-white " : "bg-inherit"
      )}
    >
      <Icon
        icon={icon}
        className={cn("text-[24px]", isActive ? "text-primary" : "text-white")}
      />
      <h2
        className={cn(
          "text-base font-normal text-white leading-[20.3px]",
          isActive ? "text-primary" : "text-white"
        )}
      >
        {name}
      </h2>
    </Link>
  );
};

export default LinkItem;
