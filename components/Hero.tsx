import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({
  author,
  createdAt,
  category,
  image,
  content,
  title,
  _id,
}: Question) => {
  return (
    <Link href={ROUTES.ARTICLE(_id)}>
      <section className=" px-6 h-full  w-full  flex-col items-center">
        <div className="flex  flex-col md:max-w-2xl lg:max-w-5xl mx-auto   gap-10">
          <div className=" group mx-auto gap-3 flex flex-col max-lg:flex-col-reverse lg:flex-row items-center ">
            <div className="flex-1 group-hover:cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 capitalize text-sm rounded-md bg-red-100 text-red-600 font-medium">
                  {category}
                </span>
                <span className="text-sm text-gray-500">
                  {dayjs(createdAt).format("D MMMM YYYY")}
                </span>
              </div>
              <Link href={ROUTES.ARTICLE(_id)}>
                <h1 className="text-2xl md:text-3xl font-extralight leading-tight text-gray-900 group-hover:underline underline-offset-4 decoration-1">
                  {title}
                </h1>
              </Link>

              <p className="mt-6 line-clamp-3 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                {content}
              </p>
            </div>

            <div className="flex-1 lg:flex-2 w-full h-full group-hover:cursor-pointer">
              <div className="rounded-2xl overflow-hidden shadow-md ">
                <Link href={ROUTES.ARTICLE(_id)}>
                  <Image
                    src={image}
                    width={800}
                    height={100}
                    alt="Small business owner"
                    className="w-full h-fit! object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Hero;
