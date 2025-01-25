import Footer from '@/components/common/Footer';
import HomeNavbar from '@/components/common/HomeNavbar';
import React from 'react';

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
