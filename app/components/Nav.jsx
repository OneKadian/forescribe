"use client";
import { useState, useEffect } from "react";
// import Link from "next/link";
import { Link } from "next-view-transitions";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const navigation = [
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/Contact" },
];

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <nav className="header-nav">
      <div className="header-nav--container flex items-center justify-between p-4">
        {/* Hamburger Menu */}
        <button
          onClick={toggleNav}
          type="button"
          className="mobile-menu text-white md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <RxHamburgerMenu className="h-8 w-auto" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 mr-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-white hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggler and Login */}
        <div className="flex items-center ml-2 space-x-4">
          {/* Light/Dark Mode Toggler */}
          <button
            type="button"
            onClick={toggleTheme}
            className="font-medium text-gray-800 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:bg-neutral-700 dark:border-gray-600 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            <span className="group inline-flex shrink-0 justify-center items-center size-9">
              {!isDarkMode ? ( // Swapped the condition
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              ) : (
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="fixed top-0 left-0 z-30 w-full h-full bg-[#35363a] dark:bg-[#1a1a1a] border-t border-gray-300">
            <div className="flex justify-end p-4">
              <RxCross1
                className="text-2xl text-white cursor-pointer"
                onClick={closeNav}
              />
            </div>
            <ul className="flex flex-col items-center space-y-6 mt-10">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white text-lg hover:underline"
                    onClick={closeNav}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
