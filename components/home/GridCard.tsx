import { LucideIcon } from "lucide-react";
import React from "react";

interface CardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, description, className }) => {
  return (
    <div
      className={`p-12 bg-primary flex flex-col gap-6 rounded-lg shadow hover:shadow-lg transition ${className}`}
    >
      <div className="bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]">
        <Icon className="h-10 w-10 text-blue-600"/>
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="text-white text-base">{description}</p>
    </div>
  );
};

export default Card;
