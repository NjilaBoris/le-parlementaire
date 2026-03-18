import { Metadata } from "next";
import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import DataRenderer from "@/components/DataRenderer";
import CommonFilter from "@/components/filters/CommonFilter";
import HomeFilter from "@/components/filters/HomeFilter";
import Pagination from "@/components/Pagination";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import ROUTES from "@/constants/routes";

import { getQuestions } from "@/lib/actions/question.action";
import Hero from "@/components/Hero";
import { Card, Title } from "@/components/Card";

export const metadata: Metadata = {
  title: "Le Parlementaire | Home",
  description:
    "Discover different programming questions and answers with recommendations from the community.",
  icons: "/Group2.svg",
};

async function Home({ searchParams }: RouteParams) {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getQuestions({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

  const { questions, isNext } = data || {};
  const filterByCategory = (data, category) => {
    return (
      data?.filter((item) =>
        item?.category?.toLowerCase().includes(category.toLowerCase())
      ) ?? []
    );
  };
  const parliamentQuestions = filterByCategory(questions, "Politics");
  const governance = filterByCategory(questions, "Local Governance");
  const economy = filterByCategory(questions, "Economy & Society");
  const youth = filterByCategory(questions, "Youth Sportlight");
  const election = filterByCategory(questions, "Election");
  return (
    <>
      <section className="flex w-full min-h-full flex-col-reverse justify-center gap-4 sm:flex-row sm:items-center">
        {questions?.[0] && <Hero {...questions[0]} key={questions[0]._id} />}
      </section>
      <section className="h-full w-full py-20 space-y-4">
        <Title title="Paliament" id="parliament" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {questions
            ?.filter((q) => q.category.includes("Parliament"))
            .map((item) => <Card {...item} key={item._id} />)}
        </div>
      </section>
      <section className="h-full w-full py-10 space-y-4">
        <Title title="Politics" id="politics" />
        {parliamentQuestions.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {parliamentQuestions.map((item: Question) => (
              <Card {...item} key={item._id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No data yet</p>
        )}
      </section>
      <section className="h-full w-full py-10 space-y-4">
        <Title title="Local Governance" id="local-governance" />
        {governance.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {governance.map((item: Question) => (
              <Card {...item} key={item._id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No data yet</p>
        )}
      </section>
      <section className="h-full w-full py-10 space-y-4">
        <Title title="Economy Society" id="economy-society" />
        {economy.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {economy.map((item: Question) => (
              <Card {...item} key={item._id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No data yet</p>
        )}
      </section>
      <section className="h-full w-full py-10 space-y-4">
        <Title title="Youth Spotlight" id="youth-spotlight" />
        {youth.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {youth.map((item: Question) => (
              <Card {...item} key={item._id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No data yet</p>
        )}
      </section>
      <section className="h-full w-full py-10 space-y-4">
        <Title title="Election" id="elections" />
        {election.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {election.map((item: Question) => (
              <Card {...item} key={item._id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No data yet</p>
        )}
      </section>
    </>
  );
}

export default Home;
