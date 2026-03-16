import { Card } from "@/components/Card";
import Hero from "@/components/Hero";
import Pagination from "@/components/Pagination";
import { getQuestions } from "@/lib/actions/question.action";
import React from "react";

const page = async ({ searchParams }: RouteParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });
  const { questions, isNext } = data || {};
  const parliamentQuestion = questions?.find((q) =>
    q?.category?.includes("Parliament")
  );
  return (
    <>
      <section className="flex w-full min-h-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        {parliamentQuestion && (
          <Hero {...parliamentQuestion} key={parliamentQuestion._id} />
        )}
      </section>
      <section className="h-full w-full py-10 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {questions
            ?.filter((q) => q.category.includes("Parliament"))
            .map((item) => <Card {...item} key={item._id} />)}
        </div>
      </section>
      <Pagination page={page} isNext={isNext || false} />
    </>
  );
};

export default page;
