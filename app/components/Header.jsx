// import Link from "next/link";
import { Link } from "next-view-transitions";
import Image from "next/image";
import Nav from "./Nav";
import ButtonGroup from "./ButtonGroup";
import Logo from "../public/ihklogo.png";
import { FaArrowRight } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import foreLogo from "../public/foreLogo.png";

const Header = async () => {
  const user = await currentUser();
  return (
    <header
      id="header"
      className="header fixed left-0 w-full top-0 z-30 bg-[#35363a] dark:bg-[#1a1a1a]"
    >
      <div className="header--container wrap wrap-px bg-[#35363a] dark:bg-[#1a1a1a] border-[1px] border-transparent border-gradient-to-b from-neutral-100 to-neutral-500">
        {/* Logo here */}
        <div className="header-logo--container">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={foreLogo}
              alt="logo"
              className="h-auto w-auto"
              height="200"
              width="600"
            />
          </Link>
        </div>
        <div className="flex md:flex-row-reverse items-center ml-auto">
          <ButtonGroup className="block mx-2 md:mx-0">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="w-full bg-[#8B3DFF] text-white hidden cursor-pointer md:inline-flex items-center justify-center gap-3 rounded-lg px-8 py-2 btn btn--secondary md:w-auto hover:bg-[#7B2FFF] transition-colors"
                >
                  Login
                  <FaArrowRight className="text-white" />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex bg-[#8B3DFF] text-white text-base md:hidden w-max cursor-pointer items-center justify-center gap-3 rounded-lg px-4 py-2 btn btn--secondary md:w-auto hover:bg-[#7B2FFF] transition-colors"
                >
                  Login
                </Link>
              </>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </ButtonGroup>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
