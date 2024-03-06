import type { Config } from "tailwindcss";
import presetTopazReact from "topaz-react/src/preset/tailwind-preset-topaz-react";

const config: Config = {
  content: [
    "./node_modules/topaz-react/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [presetTopazReact],
  theme: {
    extend: {
      dropShadow: {
        DEFAULT: "1px 2px 1px rgba(0, 0, 0, 0.25)"
      }
    },
  },
};
export default config;
