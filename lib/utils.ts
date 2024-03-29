import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function changeToUpperCase(name: string) {
  if (!name) return;
  const newName = name[0]?.toUpperCase() + name.slice(1);
  return newName;
}
