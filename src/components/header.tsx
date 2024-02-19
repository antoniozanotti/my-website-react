import { TzButton, TzToggleTheme } from "topaz-react";
import SocialMedia from "@components/social-media";
import Terminal from "@components/terminal";
import Heading from "@components/heading";

export default function Header() {
  return (
    <header className="h-screen flex flex-col justify-between">
      <div className="pt-4 sm:pt-8 lg:pt-16 flex justify-end">
        <TzToggleTheme />
      </div>
      <div>
        <Heading level="h1" title="Antônio Zanotti" />
        <Terminal className="mt-[38px]" />
      </div>
      <SocialMedia />
      <div className="pb-4 sm:pb-8 lg:pb-16 flex place-content-center">
        <TzButton
          iconName="ArrowDownIcon"
          variant="secondary"
          onClick={() => {
            window.scroll({
              top: window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </header>
  );
}
