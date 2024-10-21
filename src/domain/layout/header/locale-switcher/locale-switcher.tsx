import { useTranslations, useLocale } from "next-intl";
import { LocaleSwitcherSelect } from "./locale-switcher-select/locale-switcher-select";
import { usePathname } from "next/navigation";
import { locales } from "@/consts/locales";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
