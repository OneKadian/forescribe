// app/login/page.tsx
"use client";

import { LoginCard } from "../components/LoginCard";
import { MotionGrid } from "../components/motion-grid";

const LoginPage = () => {
  return (
    <div className="min-h-screen font-poppins">
      {/* Header */}
      {/* <Header /> */}
      
      {/* Motion Grid Background Container */}
      <div className="fixed inset-0 h-screen w-full bg-zinc-950">
        <div className="relative h-full overflow-hidden">
          <MotionGrid />
        </div>
      </div>

      {/* Overlay */}
      {/* <div className="fixed inset-0 bg-gradient-to-b  from-purpleCustom/20 to-purpleCustom" /> */}
<div className="fixed inset-0 bg-gradient-to-r from-[#1a1a1a]/95 to-[#5d3f92]/90" />
      {/* Login Card Container */}
      <main className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <LoginCard />
      </main>
    </div>
  );
};

export default LoginPage;