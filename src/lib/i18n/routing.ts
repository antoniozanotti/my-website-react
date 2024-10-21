import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "@/consts/locales";

export const routing = {
  locales: locales,
  defaultLocale: "en",
  domains: [
    {
      domain: process.env.DOMAIN ?? "",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: process.env.DOMAIN ?? "",
      defaultLocale: "pt",
      locales: ["pt"],
    },
  ],
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
