import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex justify-center">
          <div className="w-48">
            <Image
              src="/images/ganga-footer-logo.svg"
              alt="GANGA REALTY"
              width={200}
              height={80}
              layout="responsive"
            />
          </div>
        </div>
        <div className="w-full max-w-[1200px] h-[0.5px] bg-gray-500 my-10 mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-50 font-montserrat">
          <div>
            <h3 className="text-lg font-abt-bold  mb-4 pb-1">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/grow-with-us"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Grow With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/ganga-foundation"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Ganga Foundation
                </Link>
              </li>
              <li>
                <Link
                  href="/life-at-ganga"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Life At Ganga
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-abt-bold mb-4 pb-1">Insights & News</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Awards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-abt-bold mb-4 pb-1">
              Support & Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pay-online"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Pay Online
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-cancellation"
                  className="text-white/40 hover:text-white transition duration-300"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[1200px] h-[0.5px] bg-gray-500 mx-auto"></div>

      <div className="bg-[#1F1F1F] py-8 px-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div>
              <h4 className="text-lg font-montserrat mb-3">Reach Us</h4>
              <address className="text-white/40 not-italic font-montserrat">
                Ground Floor, Tower A,
                <br />
                Vatika Tower, Sector 54,
                <br />
                Golf Course Road Gurugram,
                <br />
                Haryana 122011
              </address>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <div className="h-34 w-[0.5px] bg-white/10"></div>

              <div className="w-20">
                <Image
                  src="/images/Great-Place-to-work-Logo.svg"
                  alt="Great Place To Work Certified"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>

              <div className="h-34 w-[0.5px] bg-white/10"></div>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <div className="text-center font-montserrat">
                <div className="mb-4">
                  <h4 className="text-lg mb-1">Phone</h4>
                  <a
                    href="tel:+919990084084"
                    className="text-white/40 hover:text-white group relative inline-block"
                  >
                    <span>+91-9990084084</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
                <div>
                  <h4 className="text-lg mb-1">Email</h4>
                  <a
                    href="mailto:info@gangarealty.com"
                    className="text-white/40 hover:text-white group relative inline-block"
                  >
                    <span>info@gangarealty.com</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>

              <div className="h-34 w-[0.5px] bg-white/10"></div>
            </div>

            <div className="text-right font-montserrat">
              <p className="text-white/40 mb-1">Ganga Global Homes Pvt. Ltd.</p>
              <p className="text-white/40 mb-4">Jai Ganga Realtech LLP</p>
              <div className="flex justify-end space-x-3">
                {[
                  { icon: <FaFacebookF />, href: "#" },
                  { icon: <FaLinkedinIn />, href: "#" },
                  { icon: <FaXTwitter />, href: "#" },
                  { icon: <FaInstagram />, href: "#" },
                  { icon: <FaYoutube />, href: "#" },
                ].map(({ icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-8 h-8 border border-black bg-black rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] py-4  font-montserrat">
        <div className="container mx-auto px-4">
          <p className="text-white/40 text-[10px] text-center">
            © Copyright 2025 Ganga Realty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
