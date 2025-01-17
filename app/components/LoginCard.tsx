import { Button } from "./ui/button";
import pic from "../public/133aaa01-14db-4f50-8526-e8a5413bbb4c.png"
import Image from "next/image";
import Link from "next/link";

// import Link from 'next/link'


export function LoginCard() {
  return (
<div className="w-full max-w-md space-y-4"> {/* Parent container */}
  {/* Main content with background */}
  <div className="p-8 space-y-6 bg-gradient-to-r from-[#1a1a1a]/95 to-[#1a1a1a]/70 backdrop-blur-sm rounded-lg text-white">
    <div className="flex flex-col items-center space-y-4">
      <Image
        src={pic}
        alt="Logo" 
        className="h-12 mb-4"
        height={48}
        width={48}
      />
      <h1 className="text-2xl font-semibold font-poppins">Welcome to Forescribe</h1>
    </div>
    <div className="space-y-4">
      <Link href="/sign-in">
        <Button 
          className="w-full bg-[#8B3DFF] text-white flex items-center justify-center gap-2 h-12 font-poppins"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            className="w-6 h-6 brightness-0 invert" 
            alt="Google" 
          />
          Continue with Google
        </Button>
      </Link>
      <Link href="/sign-in" className="">
        <Button 
          className="w-full bg-[#4A4A4A] mt-4 text-white flex items-center justify-center gap-2 h-12 font-poppins"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg" 
            className="w-6 h-6 brightness-0 invert" 
            alt="Microsoft" 
          />
          Continue with Microsoft
        </Button>
      </Link>
    </div>
  </div>

  {/* Terms text without background */}
  <div className="text-sm text-gray-300 font-poppins">
    <p>
      By clicking "Continue with Google/Microsoft" above, you acknowledge that you have read and understood, and agree to Forescribe's{" "}
      <a href="#" className="text-purple-400 hover:text-purple-300">Terms & Conditions</a>
      {" "}and{" "}
      <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>.
    </p>
  </div>
</div>
  );
}