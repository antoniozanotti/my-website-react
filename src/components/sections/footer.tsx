import { TzButton, TzIcon } from "topaz-react";
import Section from "@/components/ui/section";
import Form from "@/components/blocks/form";
import SocialMedia from "@/components/blocks/social-media";
import AntonioZanotti2Img from "@images/antonio_zanotti_2.jpg"

export default function Footer() {
  return (
    <footer>
      <Section title="# Let's work together">
        <div className="lg:grid lg:grid-cols-2 sm:gap-x-8 lg:gap-x-16 mt-4">
          <div className="pb-12">
            <Form />
          </div>
          <div className="lg:mt-[27px]">
            <SocialMedia className="pb-4" />
            <img
              src={AntonioZanotti2Img.src}
              alt="Antônio Zanotti"
              className="rounded"
            />
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
        <p className="text-center lg:mt-[-50px]">
          Made with{" "}
          <TzIcon iconName="HeartIcon" variant="negative" className="inline" />{" "}
          by Antônio Zanotti
        </p>
      </Section>
    </footer>
  );
}
