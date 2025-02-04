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
      className="grid gap-6 max-w-[1072px] mx-auto"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridAutoRows: '1fr',
      }}
    >
      {items.slice(0, columns * rows).map((item, index) => (
        <div
          key={index}
          className="p-12 bg-primary rounded-lg shadow hover:shadow-lg transition sm:col-span-1 sm:row-span-1 flex flex-col gap-6"
          style={{
            gridColumn: `span ${item.colSpan || 1}`,
            gridRow: `span ${item.rowSpan || 1}`,
          }}
        >
          <div className='bg-white w-[63px] h-[62px] flex items-center justify-center rounded-[5px]'>
          <item.icon className="h-6 w-6 text-primary rounded-sm" />
          </div>
          <h3 className="text-2xl leading-7 font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-white text-base">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReusableGrid;
