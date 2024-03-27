"use client";

import { ReactNode } from "react";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });
import { useAppSelector, useAppStore } from "@/lib/hooks";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  let backgroud = "bg-dark-2 dark:bg-dark-dark-2";
  let text = "text-primary dark:text-dark-primary text-c3 lg:text-c4";
  const store = useAppStore();
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div className={`${theme}`}>
      <div className={`${roboto.className} ${backgroud} ${text}`}>
        {children}
      </div>
    </div>
  );
}
