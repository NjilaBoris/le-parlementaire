import { ReactNode } from "react";

import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/RightSidebar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Nav />

      <section className=" min-h-screen   px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default RootLayout;
