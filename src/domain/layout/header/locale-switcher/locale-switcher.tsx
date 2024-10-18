import { useTranslations } from "next-intl";
import { LocaleSwitcherSelect } from "./locale-switcher-select/locale-switcher-select";
import { locales } from "@/config";
import { usePathname } from "next/navigation";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = usePathname()?.split("/")[1];

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
