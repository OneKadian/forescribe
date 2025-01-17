
"use client";

import { useState, useEffect } from "react";
import Column from "./kolumn";

const column1 = [
  {
    title: "Flatfile",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Flatfile.png",
   bgColor: "bg-gradient-to-b from-white to-[#FFF5EB]"
  },
  {
    title: "Ariana",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp.png",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    title: "Name Cheap",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/namecheap.png",
    bgColor: "bg-gradient-to-b from-orange-50 to-orange-500",
  },
  {
    title: "Jack Mark",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp%20(4).png",
    bgColor: "bg-[#FFFFFF]",
  },
];

const column2 = [
  {
    title: "ChatGPT",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/ChatGPT.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#10A37F]",
  },
  {
    title: "Kate",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp%20(2).png",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    title: "QB",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/QuickBooks.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#2CA01C]",
  },
  {
    title: "Ariana",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp.png",
    bgColor: "bg-[#FFFFFF]",

  },
];

const column3 = [
  {
    title: "Notion",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/atlassian.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#8A8A8A]",
    
  },
  {
    title: "Andrew",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp%20(3).png",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    title: "Skype",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Skype.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#0098E3]",
  },
  {
    title: "Jack Mark",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp%20(4).png",
    bgColor: "bg-[#FFFFFF]",
  },
];

const column4 = [
  {
    title: "LinkedIn",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/LinkedIn.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#0A66C2]",
    
  },
  {
    title: "Paul",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp%20(5).png",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    title: "AWS",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Amazon%20Web%20Services.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#3C434F]",

  },
  {
    title: "Ariana",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp.png",
    bgColor: "bg-[#FFFFFF]",
  },
];

const column5 = [
  {
    title: "Canva",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Canva.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#24BECA]",
    
  },
  {
    title: "Jane Mary",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp%20(6).png",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    title: "Chimp Monk",
    subtitle: "Project Management",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Pumble.png",
    bgColor: "bg-gradient-to-b from-[#FFFFFF] to-[#FFE002]",
  },
  {
    title: "Jack Mark",
    subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.",
    imageUrl: "https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/Mailchimp%20(7).png",
    bgColor: "bg-[#FFFFFF]",
  },
];

const getColumnOffset = (index) => {
  switch (index) {
    case 1:
      return "lg:mt-[8vh] mt-0"; // Second column pushed down
    case 3:
      return "lg:mt-[8vh] mt-0"; // Fourth column pushed down
    default:
      return ""; // Other columns at original position
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
  { items: transformItems(column1), duration: 60 },
  { items: transformItems(column2), duration: 60 },
  { items: transformItems(column3), duration: 60 },
  { items: transformItems(column4), duration: 60 },
  { items: transformItems(column5), duration: 60 },
];

const combinedColumns = [...column1, ...column2, ...column3, ...column4, ...column5];

const mobileColumns = [
  { items: transformItems(combinedColumns.slice(0, 10)), duration: 60 },
  { items: transformItems(combinedColumns.slice(0, 10).reverse()), duration: 60 },
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