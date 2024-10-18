import { NextIntlClientProvider } from "next-intl";
import { StoreProvider } from "@/lib/store-provider";
import { ProvidersInterface } from "./providers-interface";

export function Providers({ messages, locale, children }: ProvidersInterface) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <StoreProvider>{children}</StoreProvider>
    </NextIntlClientProvider>
  );
}
