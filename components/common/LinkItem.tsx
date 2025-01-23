"use client";

import { link } from "@/types/link";
import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem: FC<link> = ({ name, route, icon }) => {
  const pathname = usePathname();

  const isActive = pathname === route;
  return (
    <Link
      href={route}
      className={cn(
        "py-3 px-4 rounded-[4px] flex items-center gap-3",
        isActive ? "bg-white " : "bg-inherit"
      )}
    >
      <Icon icon={icon} className={cn("text-[24px]",isActive ? "text-primary":"text-white")} />
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
