"use client";

import { getLocale } from "next-intl/server";
import { getClient } from "@/lib/client";
import { HomeQuery } from "./home-query.gql";
import { Home } from "./home";

export async function HomeContainer() {
  const locale = await getLocale();
  const { data } = await getClient().query({
    query: HomeQuery,
    variables: {
      locale: locale === "en" ? "en-US" : "pt-BR",
    },
  });
  const aboutParagraphs = data.pageCollection.items[0].about.json.content
    .filter((p: any) => p.content[0].value != "")
    .map((p: any) => p.content[0].value);
  const projects = data.pageCollection.items[0].projectsCollection.items;
  const positions = data.pageCollection.items[0].positionsCollection.items;

  return (
    <Home
      aboutParagraphs={aboutParagraphs}
      projects={projects}
      positions={positions}
    />
  );
}
