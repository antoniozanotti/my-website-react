import type { Metadata } from "next";
import "@assets/styles.css";
import React from "react";
import StoreProvider from "./StoreProvider";
import ThemeWrapper from "@/components/theme-wrapper";

export const metadata: Metadata = {
  title: "Antônio Zanotti: Frontend Developer",
  description:
    "Front-end developer with +15 years of experience, using technology to develop solutions. Searching for long-term opportunity to work as Frontend Developer.",
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
