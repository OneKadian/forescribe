import { ThemeToggle } from "./components/ThemeToggle";
import { LoginCard } from "./components/LoginCard";
import Image from "next/image";
import pic from "./public/8da0b256-5650-4c5e-bf53-d408be9431e3.png";
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
      {/* Content */}
      <div className="relative z-10 flex justify-between items-center p-4">
        <Image
          src={pic}
          alt="Logo"
          className="h-8"
          height={32}
          width={150}
        />
        <ThemeToggle />
      </div>
      <main className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <LoginCard />
      </main>
    </div>
  );
};

export default page;
