import { cn } from "@/lib/utils";
import React from "react";
import user from "@/public/user1.png";
import Avatar from "./Avatar";

const UserCard1 = ({ name, role }: { name: string; role: string }) => {
  return (
    <div className={cn("py-5 px-6 flex items-center border border-border gap-2")}>
      <div>
        <Avatar active image={user} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm font-medium text-[#101928]">{name}</h2>
        <h2 className="text-sm font-normal text-[#475367]">{role}</h2>
      </div>
    </div>
  );
};

export default UserCard1;
