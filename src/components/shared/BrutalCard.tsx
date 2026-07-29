import React from "react";
import { cn } from "@/lib/utils";

interface BrutalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function BrutalCard({ children, className, ...props }: BrutalCardProps) {
  return (
    <div 
      className={cn("brutal-card", className)}
      {...props}
    >
      {children}
    </div>
  );
}
