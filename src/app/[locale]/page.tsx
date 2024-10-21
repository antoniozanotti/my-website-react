import {
  unstable_setRequestLocale,
} from "next-intl/server";
import { HomeContainer } from "@/domain/home/home/home-container";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <HomeContainer />;
}
