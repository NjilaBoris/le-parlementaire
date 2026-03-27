import ROUTES from "@/constants/routes";
import { IconArrowRight } from "@tabler/icons-react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export const Card = ({
  author,
  createdAt,
  category,
  image,
  content,
  title,
  _id,
}: Question) => {
  return (
    <div className="h-full w-full group  flex flex-col gap-3 ">
      <Link href={ROUTES.ARTICLE(_id)}>
        <div className="h-50 w-full flex-1">
          <Image
            src={image}
            alt="loading picture"
            width={800}
            height={800}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1  flex-2">
        <Link href={ROUTES.ARTICLE(_id)}>
          <div className="font-inter space-x-1 text-gray-600 text-xs">
            <span>{category}</span>-{" "}
            <span>{dayjs(createdAt).format("D MMMM YYYY")}</span>
          </div>
        </Link>
        <Link href={ROUTES.ARTICLE(_id)}>
          <p className="md:text-lg/tight group-hover:underline text-sm font-extralight text-[#020a1c]">
            {title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export const Heading = ({ description }: { description: string }) => {
  return (
    <div className="group space-y-2">
      <div className="flex flex-col gap-1  flex-2">
        <div className="font-inter space-x-1 text-gray-600 text-xs">
          <span>Health</span>- <span>Sep 23, 2024</span>
        </div>
        <p className="text-sm group-hover:underline font-medium text-gray-800 leading-snug group-hover:text-red-600 transition">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Title = ({ title, id }: { title: string; id: string }) => {
  return (
    <div className="flex relative  items-center gap-5 w-full pb-5 justify-between">
      <p className="text-nowrap  capitalize pl-4  relative before:content-[''] before:absolute before:left-0 before:h-full before:w-1 before:bg-red-600 text-sm text-gray-600">
        {title}
      </p>
      <div className="w-full  h-0.5 bg-neutral-100" />
      <Link href={`/${id}`} className="text-sm flex items-center gap-2">
        <p className="text-nowrap text-gray-600">view all</p>
        <IconArrowRight className="size-4 text-red-600" />
      </Link>
    </div>
  );
};
