import { Inter } from "next/font/google";
// import { Poppins } from "next/font/google";

import "./globals.css";
import "./global.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Indie Hacker Kit",
  description: "Launch your Saas Today",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <main className={`main relative overflow-hidden ${className}`}> */}

        {/* <main className={`main relative overflow-hidden`}> */}
        <body className={inter.className}>
          <ThemeProvider defaultTheme="dark" storageKey="app-theme">
            <Header />
            {children}
          </ThemeProvider>
        </body>
        {/* </main> */}
      </html>
    </ClerkProvider>
  );
}
