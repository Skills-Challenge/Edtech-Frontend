import Image from 'next/image';
import React, { ReactNode } from 'react';

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
        src="/bg1.png"
        alt="Top-right image"
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />
      {children}
      <img
        src="/bg2.png"
        alt="Bottom-left image"
        width={250}
        height={250}
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};

export default ReusableBG;
