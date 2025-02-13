import { Tuser } from "@/types/user";
import React, { FC } from "react";
import Avatar from "./Avatar";
import { Icon } from "@iconify/react";
import { useAppDispatch } from "@/store/store";
import { toast } from "sonner";
import { logout } from "@/store/actions/auth.action";

type props = {
  user: Tuser;
};

const UserCard: FC<props> = ({ user }) => {
  const dispatch = useAppDispatch();

  const handleLogout = async() => {
     try{
        await logout(dispatch);
        toast.success("Successfully logged out")
     }catch(err: any){
      console.error("Error while logging out: ", err?.message)
     }
  }
  return (
    <div className="py-3 flex items-center justify-between">
      {/* profile container */}
      <div className="flex items-center gap-3">
        <Avatar image={user.image} active />
        <div className="flex flex-col gap-1 text-white">
          <h2 className="text-base font-normal leading-[20.3px]">
            {user.name}
          </h2>
          <h2 className="text-sm font-normal leading-[20.3px]">{user.email}</h2>
        </div>
      </div>
        <Icon icon={"prime:sign-out"} fontSize={24} color="white" onClick={handleLogout}  />
    </div>
  );
};

export default UserCard;
