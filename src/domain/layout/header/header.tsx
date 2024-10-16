"use client";
import { ToggleTheme } from "./toggle-theme/toggle-theme";
import { LocaleSwitcher } from "./locale-switcher/locale-switcher";
import { Heading } from "@/domain/ui/heading/heading";
import { Terminal } from "./terminal/terminal";
import { SocialMedia } from "@/domain/home/social-media/social-media";
import { TzButton } from "topaz-react";

export function Header() {
  return (
    <header className="h-[100vh]">
      <div className="h-[100svh] flex flex-col justify-between">
        <div className="pt-4 sm:pt-8 lg:pt-16 flex justify-end space-x-4">
          <ToggleTheme />
          <LocaleSwitcher />
        </div>
        <div>
          <Heading level="h1" title="Antônio Zanotti" />
          <Terminal className="mt-[38px]" />
        </div>
        <SocialMedia />
        <div className="pb-4 sm:pb-8 lg:pb-16 flex place-content-center">
          <TzButton
            aria-label="Go to About Section"
            iconName="ArrowDownIcon"
            variant="secondary"
            onClick={useGoToAboutSection}
          />
        </div>
      </div>
    </header>
  );
}

function useGoToAboutSection() {
  window.scroll({
    top: document.getElementById("about")?.offsetTop,
    left: 0,
    behavior: "smooth",
  });
}