import React from "react";
import { Icon } from "@iconify/react";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import Avatar from "./Avatar";
import { IconButton } from "../ui/IconButton";
import { setIsOpen } from "@/store/reducers/sidebarReducer";
import { useAppDispatch } from "@/store/store";

const TopBar = () => {
  const dispatch = useAppDispatch();

  // opening the sidebar
  const handleSidebarOpen = () => {
    dispatch(setIsOpen(true));
  };

  return (
    <div className="px-9 bg-white sticky top-0 z-30">
      <div className="py-3 flex items-center justify-between">
        {/* search bar */}
        <div className="flex-1 flex items-center gap-2 xl:gap-0">
          <IconButton
            className="xl:hidden bg-[#F0F2F5]"
            onClick={handleSidebarOpen}
          >
            <Icon icon={"gg:menu"} color="" fontSize={24} />
          </IconButton>
          <div className="bg-body h-10 w-[60%] px-3 flex items-center rounded">
            <Icon
              icon={"bitcoin-icons:search-outline"}
              fontSize={24}
              color="#475367"
            />
            <Input
              type="text"
              placeholder="search here..."
              className="placeholder:text-[#667185] outline-none border-none shadow-none"
            />
          </div>
        </div>
        {/* user and notification */}
        <div className="flex items-center gap-3">
          <IconButton className=" bg-[#F0F2F5] rounded-full">
            <Icon
              icon={"gravity-ui:bell"}
              fontSize={24}
              className="text-[24px]"
              color="#344054"
            />
          </IconButton>
          <Avatar active image={""} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
