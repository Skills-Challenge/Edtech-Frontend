import Image from "next/image";
import React, { FC } from "react";
import userImage from "@/public/user.png";

type props = {
  image: any;
  active: boolean;
};
const Avatar: FC<props> = ({ image, active }) => {
  return (
    <div className="relative w-12 h-12 border-[1.5px] rounded-full border-white">
      <div className="overflow-hidden rounded-full">
      <Image
        src={image ? image : userImage}
        height={48}
        width={48}
        className="h-12 w-12 object-cover"
        alt="profile"
        objectFit="cover"
      />
      </div>
      {active && (
        <div className="absolute bottom-0 right-0 h-[10px] w-[10px] rounded-full border border-white bg-teritiary" />
      )}
    </div>
  );
};

export default Avatar;
