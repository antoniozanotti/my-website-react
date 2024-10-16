import "@assets/styles.css";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/consts/locales";
import {
  getTranslations,
  getMessages,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Providers } from "./providers";
import { Theme } from "@/domain/theme/theme/theme";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Theme>{children}</Theme>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}
