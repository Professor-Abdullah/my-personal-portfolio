import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [prevOffset, setPrevOffset] = useState(0);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const toggleScrollDirection = () => {
      let scrollY = window.scrollY;
      
      setIsTop(scrollY < 50);

      if (scrollY === 0) {
        setScrollDirection(null);
      }
      if (scrollY > prevOffset && scrollY > 50) {
        setScrollDirection("down");
      } else if (scrollY < prevOffset) {
        setScrollDirection("up");
      }
      setPrevOffset(scrollY);
    };

    window.addEventListener("scroll", toggleScrollDirection);
    return () => {
      window.removeEventListener("scroll", toggleScrollDirection);
    };
  }, [prevOffset]);

  return { scrollDirection, isTop };
}
