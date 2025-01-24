import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//   displaying numbers with commas
export const displayNumbers = (num: number): string => {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// generating slug for urls
export const generateSlug = (name: string, id: string | number) => {
  return `${name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}-${id}`;
};
