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

  return <Home data={data} />;
}
