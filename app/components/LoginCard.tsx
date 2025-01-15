import { Button } from "./ui/button";
import pic from "../public/133aaa01-14db-4f50-8526-e8a5413bbb4c.png"
import Image from "next/image";
// import Link from 'next/link'


export function LoginCard() {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-black/40 backdrop-blur-sm rounded-lg text-white">
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
        {/* <Link href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=787459168867-0v2orf3qo56uocsi84iroseoahhuovdm.apps.googleusercontent.com&login_hint=anirudh2023kadian%40gmail.com&prompt=consent&redirect_uri=https%3A%2F%2Fclerk.shared.lcl.dev%2Fv1%2Foauth_callback&response_type=code&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=zdzevhbb3pemhajouxaoidq6tbv9uxgiu7bknxh4&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow"> */}
        <Button 
          className="w-full bg-[#9b87f5] hover:bg-[#8b7ae0] text-white flex items-center justify-center gap-2 h-12 font-poppins"
          
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            className="w-6 h-6 brightness-0 invert" 
            alt="Google" 
          />
          Continue with Google
        </Button>
{/* </Link> */}
        <Button 
          className="w-full bg-[#2F2F2F] hover:bg-[#1F1F1F] text-white flex items-center justify-center gap-2 h-12 font-poppins"
          
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg" 
            className="w-6 h-6 brightness-0 invert" 
            alt="Microsoft" 
          />
          Continue with Microsoft
        </Button>
      </div>

      <div className="text-sm text-center text-gray-300 font-poppins">
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