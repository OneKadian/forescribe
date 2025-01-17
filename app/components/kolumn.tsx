// Column.tsx
"use client";

import { motion, useAnimationControls } from "framer-motion";
import { Card } from "./kard";
import { useState, useEffect, useRef } from "react";

interface ColumnProps {
  items: {
    name: string;
    logo: string;
    type: string;
    bgColor: string;
  }[];
  duration: number;
}

const Column = ({ items, duration }: ColumnProps) => {
  const doubledItems = [...items, ...items];
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    controls.start({
      y: "-50%",
      transition: {
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  };

  const handleCardHover = (hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      // Store the current progress when pausing
      const currentTime = performance.now();
      const elapsedTime = currentTime - lastTimeRef.current;
      progressRef.current = (progressRef.current + (elapsedTime / (duration * 1000))) % 1;
      controls.stop();
    } else {
      // Resume from the stored progress
      lastTimeRef.current = performance.now();
      controls.start({
        y: "-50%",
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          repeatDelay: 0,
        },
      });
    }
  };

  return (
    <div className="relative h-full flex flex-col gap-2 overflow-hidden py-4">
      <motion.div
        initial={{ y: 0 }}
        animate={controls}
        className="flex flex-col gap-2"
      >
        {doubledItems.map((item, index) => (
          <Card
            key={`${item.name}-${index}`}
            {...item}
            onHover={handleCardHover}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Column;