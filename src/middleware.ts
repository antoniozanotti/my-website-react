import createMiddleware from "next-intl/middleware";
import { locales } from "./consts/locales";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*"],
};
