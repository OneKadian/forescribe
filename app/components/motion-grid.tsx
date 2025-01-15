"use client";

import { useState, useEffect } from "react";
import { Column } from "./kolumn";

const column1 = [
  {
    title: "Flatfile",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-gradient-to-b from-white to-[#FFF5EB]",
  },
  {
    title: "Ariana",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-indigo-900",
  },
  {
    title: "Name Cheap",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-gradient-to-b from-orange-50 to-orange-500",
  },
  {
    title: "Jack Mark",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-pink-200",
  },
];

const column2 = [
  {
    title: "ChatGPT",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-gradient-to-b from-emerald-50 to-emerald-400",
  },
  {
    title: "Kate",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-purple-200",
  },
  {
    title: "QB",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-gradient-to-b from-green-50 to-green-500",
  },
  {
    title: "Ariana",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-indigo-900",
  },
];

const column3 = [
  {
    title: "Notion",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-zinc-200",
  },
  {
    title: "Andrew",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-indigo-900",
  },
  {
    title: "Skype",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-sky-500",
  },
  {
    title: "Jack Mark",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-pink-200",
  },
];

const column4 = [
  {
    title: "LinkedIn",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-blue-500",
  },
  {
    title: "Paul",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-gray-700",
  },
  {
    title: "AWS",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-yellow-800",
  },
  {
    title: "Ariana",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-indigo-900",
  },
];

const column5 = [
  {
    title: "Canva",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-gradient-to-b from-cyan-50 to-cyan-400",
  },
  {
    title: "Jane Mary",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-pink-200",
  },
  {
    title: "Chimp Monk",
    subtitle: "Project Management",
    imageUrl: "",
    bgColor: "bg-yellow-400",
  },
  {
    title: "Jack Mark",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "",
    bgColor: "bg-pink-200",
  },
];

// Offset className for columns to create staggered effect
const getColumnOffset = (index: number) => {
  switch (index) {
    case 1:
      return "lg:mt-[8vh] mt-0"; // Second column pushed down
    case 2:
      return ""; // Third column at original position
    case 3:
      return "lg:mt-[8vh] mt-0"; // Fourth column pushed down
    case 4:
      return ""; // Fifth column at original position
    default:
      return ""; // First column at original position
  }
};

const transformItems = (items) =>
  items.map(({ title, subtitle, imageUrl, bgColor }) => ({
    name: title,
    logo: imageUrl,
    type: subtitle,
    bgColor,
  }));

const desktopColumns = [
  { items: transformItems(column1), duration: 60 }, // Column 1
  { items: transformItems(column2), duration: 60 }, // Column 2
  { items: transformItems(column3), duration: 60 }, // Column 3
  { items: transformItems(column4), duration: 60 }, // Column 4
  { items: transformItems(column5), duration: 60 }, // Column 5
];

const mobileColumns = [
  { items: transformItems(column1.slice(0, 2)), duration: 40 },
  { items: transformItems(column2.slice(0, 2)), duration: 40 },
]; 

export function MotionGrid() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return null;
  }

  const columns = isMobile ? mobileColumns : desktopColumns;

  return (
    <div
      className={`grid h-full w-full gap-2 ${
        isMobile ? "grid-cols-2" : "grid-cols-5"
      }`}
    >
      {columns.map((column, index) => (
        <div key={index} className={`${getColumnOffset(index)}`}>
          <Column items={column.items} duration={column.duration} />
        </div>
      ))}
    </div>
  );
}
