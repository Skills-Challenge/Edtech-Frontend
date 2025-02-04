import Image from 'next/image';
import React, { ReactNode } from 'react';
import bg1 from "@/public/bg1.png";
import bg2 from "@/public/bg2.svg";

interface ReusableBGProps {
  children: ReactNode;
  className?: string;
}

const ReusableBG: React.FC<ReusableBGProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center relative bg-blue-600 rounded-lg overflow-hidden ${className}`}
    >
      <Image
        src={bg1}
        alt="Top-right image"
        className="absolute top-0 right-0"
      />
      {children}
      <Image
        src={bg2}
        alt="Bottom-left image"
        className="absolute bottom-0 left-10"
      />
    </div>
  );
};

export default ReusableBG;
