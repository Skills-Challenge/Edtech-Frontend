"use client"

import React, { useState } from 'react';

type ReusableListProps = {
  items: (string | { src: string; alt: string })[]; // Either text or image objects
};

const ReusableList: React.FC<ReusableListProps> = ({ items }) => {
  // Set initial selected item (the first one)
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index); // Update selected index when clicked
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-5 cursor-pointer ${
            index === selectedIndex
              ? 'bg-blue-600 text-white p-2 rounded-md' // Highlighted style for selected item
              : 'text-[#687588] bg-[#F1F1F1] p-2 rounded-md'
          }`}
          onClick={() => handleClick(index)} // Change selection on click
        >
          {typeof item === 'string' ? (
            <span>{item}</span>
          ) : (
            <img src={item.src} alt={item.alt} className="w-12 h-12 object-cover rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ReusableList;
