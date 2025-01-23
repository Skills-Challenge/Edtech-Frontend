import React from "react";
import { Icon } from "@iconify/react";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import Avatar from "./Avatar";

const TopBar = () => {
  return (
    <div className="px-9 bg-white">
      <div className="py-3 flex items-center justify-between">
        {/* search bar */}
        <div className="bg-body h-10 w-[60%] px-3 flex items-center rounded">
            <Icon icon={"bitcoin-icons:search-outline"} fontSize={24} color="#475367"/>
            <Input type="text" placeholder="search here..." className="placeholder:text-[#667185] outline-none border-none shadow-none"/>
        </div>
        {/* user and notification */}
        <div className="flex items-center gap-3">
            <button className=" bg-[#F0F2F5] flex items-center justify-center rounded-full h-12 w-12">
                <Icon icon={"gravity-ui:bell"} fontSize={24}  className="text-[24px]" color="#344054"/>
            </button>
            <Avatar active image={""}/>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
