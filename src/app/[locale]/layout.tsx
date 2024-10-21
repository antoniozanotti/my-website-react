import "@assets/styles.css";
import {
  getTranslations,
  getMessages,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Providers } from "../providers";
import { Theme } from "@/domain/theme/theme/theme";
import {routing} from '@/lib/i18n/routing';

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
        <Providers locale={locale} messages={messages}>
          <Theme>{children}</Theme>
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
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
