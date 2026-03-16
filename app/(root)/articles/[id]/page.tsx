import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { after } from "next/server";
import React, { Suspense } from "react";

import AllAnswers from "@/components/answers/AllAnswers";
import TagCard from "@/components/cards/TagCard";
import { Preview } from "@/components/editor/Preview";
import AnswerForm from "@/components/forms/AnswerForm";
import Metric from "@/components/Metric";
import SaveQuestion from "@/components/questions/SaveQuestions";
import UserAvatar from "@/components/UserAvatar";
import Votes from "@/components/votes/Votes";
import ROUTES from "@/constants/routes";
import { getAnswers } from "@/lib/actions/answer.action";
import { hasSavedQuestion } from "@/lib/actions/collection.action";
import { getQuestion } from "@/lib/actions/question.action";
import { hasVoted } from "@/lib/actions/vote.action";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import Image from "next/image";
import dayjs from "dayjs";

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { id } = await params;

  const { success, data: question } = await getQuestion({ questionId: id });

  if (!success || !question) {
    return {
      title: "Article not found",
      description: "This article does not exist.",
    };
  }

  return {
    title: question.title,
    description: question.content.slice(0, 100),
    twitter: {
      card: "summary_large_image",
      title: question.title,
      description: question.content.slice(0, 100),
    },
  };
}

const QuestionDetails = async ({ params, searchParams }: RouteParams) => {
  const { id } = await params;
  const { success, data: question } = await getQuestion({ questionId: id });

  if (!success || !question) return redirect("/404");

  const { author, createdAt, category, image, content, title } = question;

  return (
    <>
      <div className="w-full  h-full  md:py-10 px-1 md:max-w-4xl mx-auto lg:max-w-5xl">
        <div className="flex  w-full flex-col gap-6">
          <h2 className="px-3 py-1 capitalize w-fit text-sm rounded-md bg-red-100 text-red-600 font-medium">
            {category}
          </h2>

          <h2 className="h1-bold text-gray-900 font-light w-full">{title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <UserAvatar
              id={author._id}
              name={author.name}
              imageUrl={author.image}
              className="size-[40px] rounded-full object-cover"
              fallbackClassName="text-6xl font-bolder"
            />

            <h2>{author.name}</h2>
            <div className="bg-red-500 size-1 rounded-full" />
            <h3>{dayjs(createdAt).format("MMMM YYYY")}</h3>
            <div className="bg-red-500 size-1 rounded-full" />
            <h3>2 min read</h3>
          </div>
          <div className="w-full h-120">
            <Image
              alt="imageurl"
              src={image}
              width={900}
              height={700}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <Preview content={content} />
        </div>
      </div>
    </>
  );
};

export default QuestionDetails;
