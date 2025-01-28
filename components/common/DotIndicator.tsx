import * as React from 'react';
import { DotIndicatorProps } from './types';

export const DotIndicator: React.FC<DotIndicatorProps> = ({ active, onClick, index }) => {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 self-stretch my-auto rounded-full h-[11px] w-[11px] transition-colors duration-200 ${
        active ? 'bg-blue-600' : 'bg-zinc-300'
      }`}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={active}
    />
  );
};