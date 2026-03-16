"use client";

import { navItems } from "@/constants";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#06142A] text-gray-300 h-full w-full font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1  lg:grid-cols-5 gap-18 lg:gap-9">
          {/* ================= Newsletter ================= */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 bg-red-600"></span>
              <h3 className="text-white font-semibold text-lg">
                Subscribe to LeParlement
              </h3>
            </div>

            <p className="text-xs text-gray-400 tracking-wider leading-relaxed mb-6">
              Stay updated on the latest happenings in the Africa. Whether it's
              elections, politics, parliament, economy & society, we deliver it
              in a flash—straight to your inbox.
            </p>

            <div className="flex w-full items-center p-1 rounded-md  border-2  border-gray-700  max-w-md ">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="flex-1 px-4 py-3 bg-transparent focus:bg-transparent outline-none  text-sm"
              />
              <button className="bg-red-600  hover:bg-red-700 text-white px-6 py-3 rounded-sm text-sm font-medium transition">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              We don’t spam, promise. Only two emails every month, you can opt
              out anytime with just one click.
            </p>
          </div>

          {/* ================= Company ================= */}
          <div className="md:border-l md:border-gray-700 md:pl-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 bg-red-600"></span>
              <h3 className="text-white font-semibold text-sm! lg:text-lg">
                Company
              </h3>
            </div>

            <ul className="space-y-3 md:text-sm text-xs ">
              {["About", "Careers", "Authors", "Advertise", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-white text-nowrap transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ================= Categories ================= */}
          <div className="md:border-l md:border-gray-700 md:pl-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 bg-red-600"></span>
              <h3 className="text-white font-semibold text-sm! lg:text-lg">
                Categories
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-3 text-xs md:text-sm md:pr-7">
              {navItems.map((item) => (
                <Link
                  key={item.route}
                  href={item.route}
                  className="hover:text-white transition text-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= Social Media ================= */}
          <div className="md:border-l md:border-gray-700 md:pl-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 bg-red-600"></span>
              <h3 className="text-white font-semibold text-sm! lg:text-lg">
                Social Media
              </h3>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-white transition">
                <IconBrandFacebook size={20} /> Facebook
              </li>
              <li className="flex items-center gap-3 hover:text-white transition">
                <IconBrandInstagram size={20} /> Instagram
              </li>
              <li className="flex items-center gap-3 hover:text-white transition">
                <IconBrandTwitter size={20} /> Twitter
              </li>
              <li className="flex items-center gap-3 hover:text-white transition">
                <IconBrandLinkedin size={20} /> LinkedIn
              </li>
              <li className="flex items-center gap-3 hover:text-white transition">
                <IconBrandYoutube size={20} /> YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
