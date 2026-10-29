import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Assignment 2",
  description: "Front End Components",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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