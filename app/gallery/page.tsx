import Header from "../components/Header"
import { MotionGrid } from "../components/motion-grid"
import { currentUser } from "@clerk/nextjs";



export default async function MotionPage() {
    const user = await currentUser();
  
  return (
    <>
    <Header/>
    <div className="fixed inset-0 h-screen w-full bg-zinc-950 px-2">
      <div className="relative h-full overflow-hidden">
        <MotionGrid firstName={user?.firstName || ""} />
      </div>
    </div>
    </>
  )
}

