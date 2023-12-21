import { TzButton, TzToggleTheme } from "topaz-react";
import { SocialMedia } from "@features/social-media";
import { Terminal } from "@features/terminal";
import { Heading } from "@features/heading";

export const Header = () => {
  return (
    <header className="h-screen">
      <TzToggleTheme />
      <div className="">
        <Heading level="h1" title="Antônio Zanotti" className="" />
        <Terminal className="" />
        <SocialMedia className="" />
      </div>
      <TzButton iconName="ArrowDownIcon" variant="secondary" className="animate-bounce" />
    </header>
  );
};
