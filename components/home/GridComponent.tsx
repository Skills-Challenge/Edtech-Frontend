import React from "react";
import Card from "./GridCard";
import { LucideIcon } from "lucide-react";

interface CardItem {
  Icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

interface CardGridProps {
  cards: CardItem[];
  layout?: "default" | "institution" | "about";
}

const CardGrid: React.FC<CardGridProps> = ({ cards, layout = "default" }) => {
  const gridStyles = {
    default: "grid gap-6",
    institution: "grid md:grid-rows-2 lg:grid-cols-3 gap-6",
    about: "grid gap-6",
  };

  return (
    <div className={gridStyles[layout]}>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
