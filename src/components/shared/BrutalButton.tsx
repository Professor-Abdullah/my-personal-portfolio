import React from "react";
import { cn } from "@/lib/utils";

interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "accent-blue" | "accent-yellow" | "accent-red" | "accent-green" | "outline";
  className?: string;
}

const variantMap = {
  primary: "bg-black text-white hover:bg-gray-900",
  "accent-blue": "bg-[#2563EB] text-white",
  "accent-yellow": "bg-[#FACC15] text-black",
  "accent-red": "bg-[#EF4444] text-white",
  "accent-green": "bg-[#22C55E] text-white",
  outline: "bg-transparent text-black hover:bg-gray-100",
};

export const BrutalButton = React.forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ children, variant = "primary", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "brutal-button px-6 py-3 flex items-center justify-center gap-2",
          variantMap[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BrutalButton.displayName = "BrutalButton";
