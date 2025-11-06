import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <div
      className={cn(
        "py-2 px-3 sm:py-3 sm:px-5 inline-block text-center font-bold -rotate-1 sm:-rotate-3",
        "shadow-[6px_8px_4px_0px_#7474742E] rounded",
        "text-lg sm:text-[28px] md:text-[32px]",
        className
      )}
    >
      {children}
    </div>
  );
};
