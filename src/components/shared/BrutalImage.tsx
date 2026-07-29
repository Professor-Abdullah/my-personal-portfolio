import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface BrutalImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string;
  imageClassName?: string;
}

export function BrutalImage({ containerClassName, imageClassName, ...props }: BrutalImageProps) {
  return (
    <div 
      className={cn(
        "brutal-border shadow-brutal bg-white overflow-hidden rotate-2 hover:rotate-0 hover:scale-105 hover:shadow-brutal-lg transition-all duration-300",
        containerClassName
      )}
    >
      <Image 
        {...props} 
        className={cn("object-cover", imageClassName)} 
      />
    </div>
  );
}
