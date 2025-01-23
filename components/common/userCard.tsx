import { Tuser } from "@/types/user";
import React, { FC } from "react";
import Avatar from "./Avatar";
import { Icon } from "@iconify/react";

type props = {
  user: Tuser;
};

const UserCard: FC<props> = ({ user }) => {
  return (
    <div className="py-3 flex items-center justify-between">
      {/* profile container */}
      <div className="flex items-center gap-3">
        <Avatar image={user.image} active />
        <div className="flex flex-col gap-1 text-white">
          <h2 className="text-base font-normal leading-[20.3px]">
            {user.fullname}
          </h2>
          <h2 className="text-sm font-normal leading-[20.3px]">{user.email}</h2>
        </div>
      </div>
        <Icon icon={"prime:sign-out"} fontSize={24} color="white" />
    </div>
  );
};

export default UserCard;
