import { Inter } from "next/font/google";
// import { Poppins } from "next/font/google";

import "./globals.css";
import "./global.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Forescribe",
  description: "Software for Softwares",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <ViewTransitions>
        <html lang="en">
          {/* <main className={`main relative overflow-hidden ${className}`}> */}

          {/* <main className={`main relative overflow-hidden`}> */}
          <body className={inter.className}>
            <Header />
            {children}
          </body>
          {/* </main> */}
        </html>
      </ViewTransitions>
    </ClerkProvider>
  );
}
