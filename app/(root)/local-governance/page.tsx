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
    q?.category?.includes("Local Governance")
  );
  const parliamentQuestions =
    questions?.filter((q) => q?.category?.includes("Local Governance")) ?? [];
  return (
    <>
      <section className="flex w-full min-h-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        {parliamentQuestion ? (
          <Hero {...parliamentQuestion} key={parliamentQuestion._id} />
        ) : (
          <p className="text-gray-500 text-center w-full">No data yet</p>
        )}
      </section>
      <section className="h-full w-full py-10 space-y-4">
        {parliamentQuestions.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {parliamentQuestions.map((item) => (
              <Card {...item} key={item._id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No data yet</p>
        )}
      </section>
      <Pagination page={page} isNext={isNext || false} />
    </>
  );
};

export default page;
