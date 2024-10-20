import { defineConfig } from "@playwright/experimental-ct-react";
import { resolve } from "path";

const graphqlLoader = import("vite-plugin-graphql-loader");

export default defineConfig({
  testDir: ".",
  testMatch: "*-test.tsx",
  snapshotDir: "./__snapshots__",
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? "dot" : "list",
  use: {
    trace: "on-first-retry",
    ctPort: 3100,
    ctViteConfig: {
      resolve: {
        alias: {
          "@": resolve(__dirname, "./src"),
          "@assets": resolve(__dirname, "./src/assets"),
          "@images": resolve(__dirname, "./src/assets/images"),
          "next/navigation": resolve(
            __dirname,
            "./playwright/mocks/next/navigation"
          ),
        },
      },
    },
  },
  projects: [
    {
      name: "default",
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "sm", // min 640
      use: {
        viewport: { width: 744, height: 1133 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "md", // min 768
      use: {
        viewport: { width: 834, height: 1194 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "lg", // min 1024
      use: { viewport: { width: 1024, height: 768 } },
    },
    {
      name: "xl", // min 1280
      use: { viewport: { width: 1440, height: 1024 } },
    },
    {
      name: "2xl", // min 1536
      use: { viewport: { width: 2560, height: 1080 } },
    },
  ],
});
