import Link from "next/link";
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
      // className="header fixed left-0 w-full top-0 z-30 bg-black border-b border-transparent border-gradient-to-b from-neutral-100 to-neutral-500"
      className="header fixed left-0 w-full top-0 z-30 bg-[#1a1a1a]"
    >
      <div className="header--container wrap wrap-px bg-[#1a1a1a] border-[1px] border-transparent border-gradient-to-b from-neutral-100 to-neutral-500">
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
          {/* <Nav userStatus={user} /> */}
          {/* <Nav userStatus={user} /> */}
          {/* <ButtonGroup className="hidden md:block"> */}
          <ButtonGroup className="block mx-2 md:mx-0">
            {!user ? (
              <>
                <Link
                  href="/sign-in"
                  // className="btn btn--secondary ml-4"
                  // className="inline-flex w-full  cursor-pointer  items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 ml-4 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300 md:w-auto"
                  className="w-full bg-[#8B3DFF] text-white  hidden cursor-pointer md:inline-flex items-center justify-center gap-3 rounded-lg px-8 py-2 btn btn--secondary md:w-auto"
                >
                  Login
                  {/* <FaArrowRightLong className="text-white" /> */}
                  <FaArrowRight className="text-white" />
                </Link>
                <Link
                  href="/sign-in"
                  // className="btn btn--secondary ml-4"
                  className="inline-flex bg-[#8B3DFF] text-white  text-base md:hidden w-max cursor-pointer items-center justify-center gap-3 rounded-lg px-4 py-2 btn btn--secondary md:w-auto"
                  // className="text-lg font-semibold leading-6 mx-2 inline-flex md:hidden
                  // cursor-pointer items-center justify-center gap-3 rounded-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 ml-4 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300
                  // "
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
