/*
Assignment 2 team - layout.tsx - Oct 29, 2026
RootLayout receives the active page content through its children prop.
It imports the global stylesheet and provides shared site metadata.
The layout places the Navbar above the page and the Footer below it.
It returns the common document structure used across the application.
*/
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Assignment 2",
  description: "Front End Components",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] min-h-screen flex flex-col">
        <Navbar />
        <main className = "flex-1">
         {children}
        </main>
        <Footer />
      </body>
    </html>
    );
};
export default RootLayout

/*
-Draws StudentPortal
 */