"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/domain/ui/section/section";
import { SocialMedia } from "@/domain/home/social-media/social-media";
import { Form } from "./form/form";
import { TzButton, TzIcon } from "topaz-react";
import { Picture } from "./picture/picture";

export function Footer() {
  const t = useTranslations("Footer");

  function useGoToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer>
      <Section title={t("title")}>
        <div className="lg:grid lg:grid-cols-2 sm:gap-x-8 lg:gap-x-16 mt-4">
          <div className="pb-12">
            <p>{t("intro")}</p>
            <Picture />
            <SocialMedia className="pt-4" />
          </div>
          <div>
            <Form />
          </div>
        </div>
        <div className="pt-12 pb-4 flex place-content-center lg:place-content-end">
          <TzButton
            aria-label="Go to Top Page"
            iconName="ArrowUpIcon"
            variant="secondary"
            onClick={useGoToTop}
          />
        </div>
        <p className="text-center lg:text-left lg:mt-[-50px]">
          {t("made")}{" "}
          <TzIcon iconName="HeartIcon" variant="negative" className="inline" />{" "}
          {t("by")} Antônio Zanotti
        </p>
      </Section>
    </footer>
  );
}
