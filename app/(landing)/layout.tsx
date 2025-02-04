import Footer from "@/components/home/Footer";
import HomeNavbar from "@/components/home/HomeNavbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HomeNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
