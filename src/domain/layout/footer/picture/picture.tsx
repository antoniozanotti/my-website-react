import { useTranslations } from "next-intl";
import ImgLookingUpXl from "@images/antonio-zanotti-looking-up-xl.jpg";
import ImgLookingUpLg from "@images/antonio-zanotti-looking-up-lg.jpg";
import ImgLookingUpMd from "@images/antonio-zanotti-looking-up-md.jpg";
import ImgLookingUpSm from "@images/antonio-zanotti-looking-up-sm.jpg";
import ImgLookingUpDefault from "@images/antonio-zanotti-looking-up-default.jpg";

export function Picture() {
  const t = useTranslations("Footer");

  return (
    <picture className="rounded block overflow-hidden mt-4">
      <source media="(min-width: 1280px)" srcSet={ImgLookingUpXl.src} />
      <source media="(min-width: 1024px)" srcSet={ImgLookingUpLg.src} />
      <source media="(min-width: 768px)" srcSet={ImgLookingUpMd.src} />
      <source media="(min-width: 640px)" srcSet={ImgLookingUpSm.src} />
      <img src={ImgLookingUpDefault.src} alt={t("imgAlt")} />
    </picture>
  );
}
