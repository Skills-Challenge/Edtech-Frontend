"use client"

import Image from 'next/image';
import React, { useState } from 'react';


type ReusableListProps = {
  items: (string | { src: string; alt: string })[];
};

const ReusableList: React.FC<ReusableListProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center ${typeof item === 'string' ? 'gap-6' : 'mx-6'} cursor-pointer transition-transform transform hover:scale-110 duration-300`}
        >
          {typeof item === 'string' ? (
            <span
              className={`${
                index === selectedIndex
                  ? 'bg-blue-600 text-white p-2 rounded-md'
                  : 'text-[#687588] bg-[#F1F1F1] p-2 rounded-md'
              } text-sm sm:text-base md:text-lg`}
              onClick={() => handleClick(index)}
            >
              {item}
            </span>
          ) : (
            <div className="relative overflow-hidden">
              <Image
                width={80}
                height={80}
                src={item.src}
                alt={item.alt}
                className="w-full h-full transform transition-transform duration-300 hover:scale-125"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReusableList;