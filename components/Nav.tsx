"use client";
import { LogoIcon } from "@/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IconSearch } from "@tabler/icons-react";
import { navItems } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import GlobalSearch from "./search/GlobalSearch";
import Image from "next/image";
import { Button } from "@mdxeditor/editor";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Nav = () => {
  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
  });
  const [location, setLocation] = useState("Loading...");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setDateTime({
        date: now.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        }),
        time: now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setLocation(`${data.city}, ${data.country_code}`);
      } catch (error) {
        setLocation("Unable to fetch location");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="flex flex-col w-full h-auto fixed z-9999">
      <div className="w-full h-full bg-white">
        <div className="flex items-center py-4  justify-between w-[calc(100%-4rem)] mx-auto h-full max-lg:hidden">
          <div className="font-inter order-3 space-x-1 text-[#657285] text-[0.75rem]">
            <span>{dateTime.date}</span>- <span>{dateTime.time}</span>
          </div>
          <Link href="/">
            <div className="flex order-1 items-center self-center gap-1 font-inter">
              <div className="flex items-center self-center  gap-1 font-inter">
                <Image src="/leparle.svg" width={200} height={10} alt="logo" />
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <div className=" w-full h-full rounded-full ">
              <GlobalSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <Desktop />
        <Mobile />
      </div>
    </div>
  );
};

export default Nav;

const Desktop = () => {
  return (
    <div className="bg-[#CC0000] p-2 h-full w-full hidden lg:block ">
      <div className="lg:flex hidden items-center  lg:justify-between lg:mx-auto   xl:w-[calc(100%-15rem)] lg:w-[calc(100%-8rem)]">
        <div className=" h-full flex gap-5 xl:font-semibold font-light font-satoshi items-center mx-auto text-white text-[0.8rem]">
          {navItems.map((items) => (
            <Link
              href={items.route}
              key={items.label}
              className="hover:opacity-55 transition duration-500"
            >
              {items.label}
            </Link>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="border-[#ffffff66] cursor-pointer transition duration-300  p-2 hidden w-fit bg-[#ffffff66] opacity-60 hover:opacity-85 border  xl:inline-flex items-center justify-center h-full rounded-full ">
              <IconSearch className="size-4 text-white " />
            </button>
          </DialogTrigger>
          <DialogContent showCloseButton={false} className="bg-white">
            <DialogHeader>
              <DialogTitle>Search Now</DialogTitle>
            </DialogHeader>
            <div className=" w-full h-full rounded-full ">
              <GlobalSearch />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isOpen ? "bg-white" : "bg-[#CC0000]"} z-8  lg:hidden transition duration-200 ease-in p-2 h-full w-full`}
    >
      <div className="flex items-center   flex-col w-full h-full relative">
        <div className="flex relative items-center pb-2 justify-between h-full w-full">
          <Link href="/">
            <div className="flex items-center self-center  gap-1 font-inter">
              <Image src="/leparle.svg" width={200} height={10} alt="logo" />
            </div>
          </Link>
          <div className="flex items-center  justify-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className={` ${isOpen ? " border-[#65728533] bg-[#EFF1F3] opacity-100" : "border-[#ffffff66] opacity-60 bg-[#ffffff66]"} cursor-pointer transition duration-300 size-10  p-2 flex    hover:opacity-85 border  lg:hidden items-center justify-center  rounded-full`}
                >
                  <IconSearch
                    className={` ${isOpen ? "text-neutral-400 size-6" : "text-white size-4"}`}
                  />
                </button>
              </DialogTrigger>
              <DialogContent showCloseButton={false} className="bg-white">
                <DialogHeader>
                  <DialogTitle>Search Now</DialogTitle>
                </DialogHeader>
                <GlobalSearch />
              </DialogContent>
            </Dialog>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className={`menu-toggle transition duration-200 ease-in relative ${isOpen && "bg-[#cc0000]! "} rounded-full  bg-white group flex items-center justify-center p-2 size-10 cursor-pointer border-[#ffffff66]`}
              aria-label="Toggle menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              <div
                className={`menu-hamburger-icon ${isOpen && "*:bg-white!"} group-hover:cursor-pointer absolute  -translate-x-2/4 -translate-y-2/4 size-7.5  flex justify-center items-center transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] left-2/4 top-2/4`}
              >
                <span
                  className={`menu-item ${isOpen && "rotate-45 origin-[6px]"}`}
                ></span>
                <span
                  className={`menu-item ${isOpen && "-rotate-45 origin-[6px]"} mt-2`}
                ></span>
              </div>
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={{
                hidden: {
                  clipPath: "inset(0 0 100% 0)",
                },
                visible: {
                  clipPath: "inset(0 0 0% 0)",
                  transition: {
                    duration: 0.5,
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                  },
                },
                exit: {
                  clipPath: "inset(0 0 100% 0)",
                  transition: {
                    duration: 1,
                    ease: [0.77, 0, 0.175, 1],
                    staggerChildren: 0.1,
                    staggerDirection: -1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="min-w-dvw overflow-hidden  absolute h-dvh top-14 border-t border-neutral-100 z-10 flex flex-col gap-3 bg-white pl-5 pt-4 text-[1.5rem] md:text-[1.2rem] font-satoshi"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                    exit: {
                      opacity: 0,
                      y: 10,
                      transition: {
                        ease: "easeOut",
                        duration: 0.3,
                      },
                    },
                  }}
                >
                  <Link
                    href={item.route}
                    className="text-[#565C68]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
