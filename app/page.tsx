import { LoginCard } from "./components/LoginCard";
import Image from "next/image";
import bgpic from "./public/688b37ce-e9ef-43fb-abda-47cd7269d965.png";

const page = () => {
  return (
    <div className="min-h-screen relative font-poppins">
      {/* Background Image */}
      <Image
        src={bgpic}
        alt="Background"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>
      <main className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <LoginCard />
      </main>
    </div>
  );
};

export default page;
