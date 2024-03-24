"use client";
import { TzButton, TzIcon } from "topaz-react";
import Section from "@/components/ui/section";
import Form from "./form";
import SocialMedia from "@/components/common/social-media";
import ImgLookingUpXl from "@images/antonio-zanotti-looking-up-xl.jpg"
import ImgLookingUpLg from "@images/antonio-zanotti-looking-up-lg.jpg"
import ImgLookingUpMd from "@images/antonio-zanotti-looking-up-md.jpg"
import ImgLookingUpSm from "@images/antonio-zanotti-looking-up-sm.jpg"
import ImgLookingUpDefault from "@images/antonio-zanotti-looking-up-default.jpg"

export default function Index() {
  return (
    <footer>
      <Section title="Let's work together">
        <div className="lg:grid lg:grid-cols-2 sm:gap-x-8 lg:gap-x-16 mt-4">
          <div className="pb-12">
            <p>
              I would like to be part of a team whose people respect each other,
              listen to each other and who work together to achieve clear goals. Leave a message, thank you in advance for your
              attention.
            </p>
            <picture className="rounded block overflow-hidden mt-4">
              <source media="(min-width: 1280px)" srcSet={ImgLookingUpXl.src} />
              <source media="(min-width: 1024px)" srcSet={ImgLookingUpLg.src} />
              <source media="(min-width: 768px)" srcSet={ImgLookingUpMd.src} />
              <source media="(min-width: 640px)" srcSet={ImgLookingUpSm.src} />
              <img src={ImgLookingUpDefault.src} alt="Antônio Zanotti looking up" />
            </picture>
            <SocialMedia className="pt-4" />
          </div>
          <div>
            <Form />
          </div>
        </div>
        <div className="pt-12 pb-4 flex place-content-center lg:place-content-end">
          <TzButton
            iconName="ArrowUpIcon"
            variant="secondary"
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
        <p className="text-center lg:text-left lg:mt-[-50px]">
          Made with{" "}
          <TzIcon iconName="HeartIcon" variant="negative" className="inline" />{" "}
          by Antônio Zanotti
        </p>
      </Section>
    </footer>
  );
}
