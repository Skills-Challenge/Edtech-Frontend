"use client";

import umuravaLogo from "@/public/umuravaLogo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HomeNavbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Challenges & Hackathons", path: "/challenges" },
    { name: "For Educational Institutions", path: "/institutions" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="shadow-sm bg-white sticky top-0 z-50">
      {/* LOGO */}
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="flex items-center">
          <Image src={umuravaLogo} alt="Logo" width={125} height={37} />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden xlg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`${
                    isClient && pathname === link.path
                      ? "text-primary font-medium"
                      : "text-text_dark"
                  } hover:text-primary transition-colors`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/auth/login"
          className="text-white py-[12.5px] px-[19px] bg-[#041738] rounded-md text-sm font-medium hidden xlg:block"
        >
          Join the Program
        </Link>

        {/* MOBILE MENU ICON */}
        <div className="xlg:hidden">
          <button
            onClick={toggleMenu}
            className="text-text_dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 z-50" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg transition-all xlg:hidden">
            <ul className="flex flex-col items-start py-4 px-5 space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`${
                      isClient && pathname === link.path
                        ? "text-primary font-semibold"
                        : "text-text_dark"
                    } hover:text-primary transition-colors`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={"/auth/login"} onClick={toggleMenu} className="text-white py-[12.5px] px-[19px] bg-[#041738] rounded-md text-sm font-medium block">
                  Join the Program
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
