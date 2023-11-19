import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#010B13",
            default: "#81D8D0",
            primary: "#9579C2",
            secondary: {
              DEFAULT: "#007A74",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            background: "#1e1e1e",
            foreground: "#FFFFFF",
            default: "#83C5BE",
            primary: {
              DEFAULT: "#B298DC",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#006a64",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
}

export default config
