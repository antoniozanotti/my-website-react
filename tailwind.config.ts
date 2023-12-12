import type { Config } from "tailwindcss";
import presetTopazReact from "topaz-react/src/preset/tailwind-preset-topaz-react";

const config: Config = {
  content: [
    "./node_modules/topaz-react/src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  presets: [presetTopazReact]
};
export default config;
