import { TzButton, TzToggleTheme } from "topaz-react";
import { SocialMedia } from "@features/social-media";
import { Terminal } from "@features/terminal";
import { Heading } from "@features/heading";

export const Header = () => {
  return (
    <header className="h-screen flex flex-col justify-between">
      <div className="pt-4 sm:pt-8 lg:pt-16 flex justify-end">
        <TzToggleTheme />
      </div>
      <div className="">
        <Heading level="h1" title="Antônio Zanotti" className="" />
        <Terminal className="mt-[38px]" />
      </div>
      <SocialMedia className="" />
      <div className="pb-4 sm:pb-8 lg:pb-16 flex place-content-center">
        <TzButton iconName="ArrowDownIcon" variant="secondary" className="" />
      </div>
    </header>
  );
};
