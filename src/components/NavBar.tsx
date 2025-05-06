"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileNav";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="absolute top-0 left-20 z-50">
          <div className="pennant-banner">
            <div className="flex flex-col items-center justify-center pt-4 pb-8 px-5">
              <Image
                src="/images/logo.svg"
                alt="Swarnim Logo"
                width={100}
                height={100}
                className="object-contain mb-1"
                priority
              />
            </div>
          </div>
        </div>

        <header
          className={`w-full flex justify-end items-center px-8 md:px-20 py-4 transition-all duration-500 ${
            scrolled ? "bg-gray-950/95" : "bg-transparent"
          } ${!scrolled ? "border-b border-white" : ""}`}
        >
          <nav className="hidden md:block flex-1 ml-48 ">
            <ul className="flex justify-center space-x-12 font-montserrat text-sm">
              {[
                "OVERVIEW",
                "OUR PROJECTS",
                "LOCATION",
                "AMENITIES",
                "FLOOR PLANS",
                "DOWNLOAD BROCHURE",
              ].map((item) => (
                <li key={item} className="group">
                  <Link
                    href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-white font-montserrat text-sm relative"
                  >
                    {item}
                    <span className="absolute left-0 top-5 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link
              href="/enquire"
              className="text-black uppercase bg-white text-sm tracking-wider px-5 py-2 hover:bg-black hover:text-white transition-colors duration-1000 font-montserrat"
            >
              ENQUIRE NOW
            </Link>
          </div>

          <button
            className="md:hidden text-white z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
