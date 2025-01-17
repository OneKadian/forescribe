// Card.tsx
"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { cn } from "../lib/utils";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

interface CardProps {
  name: string;
  type: string;
  logo: string;
  bgColor: string;
  onHover?: (isHovering: boolean) => void;
}

export function Card({ name, type, logo, bgColor, onHover }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    onHover?.(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    onHover?.(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className="w-full"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "h-[33vh] w-full rounded-2xl p-3 transition-all duration-200 ease-linear",
            bgColor
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Image Container */}
          <div
            className="h-[40%] w-full overflow-hidden rounded-lg"
            style={{ transform: `translateZ(${isMouseEntered ? "20px" : "0px"})` }}
          >
            {logo ? (
              <img
                src={logo}
                alt={`${name} logo`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">No Image</p>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div
            className="mt-3 space-y-1 text-center"
            style={{ transform: `translateZ(${isMouseEntered ? "40px" : "0px"})` }}
          >
            <h3 className="text-xl font-semibold text-[#19154E]">{name}</h3>
            <p className="text-sm font-semibold text-black">{type}</p>
          </div>
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}