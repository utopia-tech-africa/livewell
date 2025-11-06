import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPublishedDate = (dateString: string) => {
  const date = new Date(dateString);
  return `Published: ${date.getDate()}. ${date.toLocaleString("en-US", {
    month: "long",
  })} ${date.getFullYear()}`;
};
