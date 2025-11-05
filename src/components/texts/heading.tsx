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
        "py-3 px-5 w-fit text-center font-bold -rotate-3 shadow-[6px_8px_4px_0px_#7474742E] rounded flex",
        className
      )}
    >
      {children}
    </div>
  );
};
