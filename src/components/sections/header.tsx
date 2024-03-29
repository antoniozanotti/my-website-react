import { TzButton, TzToggleTheme } from "topaz-react";
import SocialMedia from "@/components/blocks/social-media";
import Terminal from "@/components/blocks/terminal";
import Heading from "@/components/ui/heading";

export default function Header() {
  return (
    <header className="h-[100vh]">
      <div className="h-[100svh] flex flex-col justify-between">
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
                top: document.getElementById("about")?.offsetTop,
                left: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>
    </header>
  );
}
