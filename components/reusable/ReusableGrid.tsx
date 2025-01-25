import React from 'react';
import { LucideIcon } from 'lucide-react';

type ReusableGridProps = {
  columns: number;
  rows: number;
  items: {
    icon: LucideIcon;
    title: string;
    description: string;
    colSpan?: number;
    rowSpan?: number;
  }[];
};

const ReusableGrid: React.FC<ReusableGridProps> = ({ columns, rows, items }) => {
  const gridTemplate = `repeat(${columns}, minmax(0, 1fr))`;

  return (
    <div
      className="grid gap-6"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridAutoRows: '1fr',
      }}
    >
      {items.slice(0, columns * rows).map((item, index) => (
        <div
          key={index}
          className="p-4 bg-blue-600 rounded-lg shadow hover:shadow-lg transition sm:col-span-1 sm:row-span-1"
          style={{
            gridColumn: `span ${item.colSpan || 1}`,
            gridRow: `span ${item.rowSpan || 1}`,
          }}
        >
          <item.icon className="h-10 w-10 text-blue-600 mb-4 bg-white p-2 rounded-sm" />
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-white">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReusableGrid;
