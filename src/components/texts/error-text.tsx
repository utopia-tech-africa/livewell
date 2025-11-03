import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ErrorTextProps = {
  children: ReactNode;
  className?: string;
};

export const ErrorText = ({ children, className }: ErrorTextProps) => {
  return (
    <h3
      className={cn(
        "text-22px lg:text-[26px] font-extrabold leading-none",
        className
      )}
    >
      {children}
    </h3>
  );
};
