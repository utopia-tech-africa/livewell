import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ComponentLayoutProps = {
  children: ReactNode;
  className?: string;
};

export const ComponentLayout = ({
  children,
  className,
}: ComponentLayoutProps) => {
  return (
    <div
      className={cn(
        "w-full border border-red-500 px-4 md:px-8 lg:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
