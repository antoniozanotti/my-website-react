"use client";

import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });
import { useAppSelector, useAppStore } from "@/lib/hooks";

export function Theme({ children }: { children: React.ReactNode }) {
  const backgroudStyles = "bg-dark-2 dark:bg-dark-dark-2";
  const textStyles = "text-primary dark:text-dark-primary text-c3 lg:text-c4";
  const store = useAppStore();
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <div className={`${theme}`}>
      <div className={`${roboto.className} ${backgroudStyles} ${textStyles}`}>
        {children}
      </div>
    </div>
  );
}
