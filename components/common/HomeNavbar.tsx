"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    <header className="flex items-center justify-between px-4 py-2 shadow-md bg-white md:px-8">
      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image src="/umuravaLogo.png" alt="Logo" width={150} height={150} />
      </Link>

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex justify-between items-center lg:gap-60 space-x-6">
        <ul className="flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`${
                  isClient && pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                } hover:text-primary transition-colors`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="text-white">
          <Link
           href="/auth/login"
          >
          Join the Program
          </Link>
        </Button>
      </nav>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
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
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg transition-all">
          <ul className="flex flex-col items-start py-4 px-5 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`${
                    isClient && pathname === link.path
                      ? "text-primary font-semibold"
                      : "text-gray-700"
                  } hover:text-primary transition-colors`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button onClick={toggleMenu} className="text-white">
                Join the Program
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default HomeNavbar;
