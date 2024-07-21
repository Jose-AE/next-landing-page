"use client";

import React, { useState, useEffect, useMemo, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../../public/next.svg";
import { IconType } from "react-icons";
import { IoMdPricetags } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";

const Links: {
  name: string;
  elementId: string;
  offset?: number;
  icon: IconType;
}[] = [
  { name: "About", elementId: "about", icon: MdInfoOutline, offset: -200 },
  { name: "Pricing", elementId: "pricing", icon: IoMdPricetags },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      {activeLink}
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {Links.map((link, i) => (
              <ScrollLink
                offset={link.offset || 0}
                key={i}
                to={link.elementId}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => {
                  setActiveLink(link.elementId);
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === link.elementId
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                {link.name}
              </ScrollLink>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-primary transition-all"
              href="/"
            >
              Sign In
            </Link>
            <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-primary text-primary bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary hover:text-white-500 transition-all ">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-center items-center text-black-500">
            {Links.map((link, i) => (
              <ScrollLink
                key={i}
                activeClass="active"
                to={link.elementId}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(link.elementId);
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === link.elementId
                    ? "  border-primary text-primary"
                    : " border-transparent")
                }
              >
                <link.icon className="w-6 h-6" />
                {link.name}
              </ScrollLink>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
}
