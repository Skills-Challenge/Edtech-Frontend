import Image from "next/image";
import React from "react";
import {
  FaGooglePlusG,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  const socialIcons = [
    {
      name: "facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
    },
    { name: "google", icon: <FaGooglePlusG />, link: "https://google.com/" },
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/",
    },
    { name: "youtube", icon: <FaYoutube />, link: "https://www.youtube.com/" },
  ];

  const addressDetails = [
    { icon: <MdOutlineMail />, text: "career@tickets.com" },
    { icon: <MdOutlineLocationOn />, text: "89 KG 14 Ave, Kigali" },
    { icon: <MdOutlinePhone />, text: "+250 700 000" },
  ];

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
  ];

  return (
    <footer className="bg-blue-950 text-white px-10 py-10 md:px-20">
      {/* TOP SECTION */}
      <div className="flex flex-wrap justify-between items-center py-8">
        <Image src="/logo2.png" alt="logo" width={50} height={50} />
        <div className="flex gap-3">
          {socialIcons.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              target="_blank"
              className="bg-white text-blue-950 rounded-full p-3 hover:scale-110 transition-transform duration-300"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="border-gray-600 border-t-[1px] border-b-[1px] py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Address</h3>
          {addressDetails.map((item, index) => (
            <p
              key={index}
              className="flex items-center gap-2 hover:underline decoration-dotted decoration-white transition duration-300 mb-3"
            >
              {item.icon} {item.text}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li
                key={index}
                className="hover:underline decoration-dotted decoration-white transition duration-300"
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Join our newsletter to keep up to date with us!
          </h3>
          <form className="bg-white p-3 rounded-lg flex items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-wrap justify-between items-center pt-10 text-center md:text-left gap-4">
        <p className="hover:underline decoration-dotted decoration-white transition duration-300">
          Copyright © All Rights Reserved SawaPay 2024.
        </p>
        <p className="hover:underline decoration-dotted decoration-white transition duration-300">
          Privacy Policy | Terms and Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
