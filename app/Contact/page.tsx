import React from "react";
import { currentUser } from "@clerk/nextjs";
import Contact from "../components/Contact";

const Page = async () => {
  const user = await currentUser();

  return (
    // Pass the firstName as a prop
    <Contact firstName={user?.firstName || ""} />
  );
};

export default Page;
