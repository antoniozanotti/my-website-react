import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./consts/locales";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../src/messages/${locale}.json`)).default,
  };
});
