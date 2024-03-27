import type { Metadata } from "next";
import "@assets/styles.css";
import React from "react";
import StoreProvider from "./StoreProvider";
import ThemeWrapper from "@/components/theme-wrapper";

export const metadata: Metadata = {
  title: "Antônio Zanotti: Frontend Developer",
  description:
    "Full Stack Developer with more than 15 years of experience. Looking for long-term opportunities to work as Frontend Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
