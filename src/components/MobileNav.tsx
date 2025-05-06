"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type MobileMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={menuRef}
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <div className="flex items-center">
            <div className="w-10 h-10 relative mr-3">
              <Image
                src="/logo.png"
                alt="Swarnim Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-white font-semibold">Swarnim</div>
              <div className="text-xs text-gray-400">High Street</div>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-6">
            {[
              "OVERVIEW",
              "OUR PROJECTS",
              "LOCATION",
              "AMENITIES",
              "FLOOR PLANS",
            ].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white text-lg font-medium block py-2 border-b border-gray-800 hover:text-gray-300 transition-colors"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4">
            <Link
              href="/brochure"
              className="block w-full text-white text-center uppercase text-sm tracking-wider px-5 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
              onClick={toggleMenu}
            >
              DOWNLOAD BROCHURE
            </Link>
            <Link
              href="/enquire"
              className="block w-full text-white border border-white text-center uppercase text-sm tracking-wider px-5 py-3 font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
              onClick={toggleMenu}
            >
              ENQUIRE NOW
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
