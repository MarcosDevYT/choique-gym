import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 ${className}`}>
      {children}
    </div>
  );
}
