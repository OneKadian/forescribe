"use client"

import { motion } from "framer-motion"
import { Card } from "./kard"

interface ColumnProps {
  items: {
    name: string
    logo: string
    type: string
    bgColor: string
  }[]
  duration: number
}

export function Column({ items, duration }: ColumnProps) {
  // Double the items to create a seamless loop
  const doubledItems = [...items, ...items]

  return (
    <div className="relative h-full flex flex-col gap-2 overflow-hidden py-4">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-2"
      >
        {doubledItems.map((item, index) => (
          <Card key={`${item.name}-${index}`} {...item} />
        ))}
      </motion.div>
    </div>
  )
}