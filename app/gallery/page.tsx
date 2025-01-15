import Header from "../components/Header"
import { MotionGrid } from "../components/motion-grid"


export default function MotionPage() {
  return (
    <>
    <Header/>
    <div className="fixed inset-0 h-screen w-full bg-zinc-950 px-2">
      <div className="relative h-full overflow-hidden">
        <MotionGrid />
      </div>
    </div>
    </>
  )
}

