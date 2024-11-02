import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          highlight: "var(--color-primary-highlight)",
        },
        secondary: "var(--color-secondary)",
        complementary: {
          DEFAULT: "var(--color-complementary)",
          muted: "var(--color-complementary-muted)",
        },
        text: {
          primary: "var(--color-text-primary)",
          muted: "var(--color-text-muted)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
