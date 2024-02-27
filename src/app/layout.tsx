import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "@assets/styles.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Antônio Zanotti: Mid-level Frontend Developer",
  description:
    "Senior Full Stack Developer with more than 15 years of experience. Looking for long-term opportunities to work as Frontend Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let backgroud = 'bg-dark-2 dark:bg-dark-dark-2';
  let text = 'text-primary dark:text-dark-primary text-c1 sm:text-c2 lg:text-c4';
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body
        className={`${roboto.className} ${backgroud} ${text}`}
      >
        {children}
      </body>
    </html>
  );
}
