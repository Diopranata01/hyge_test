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
        gray: {
          100: "rgba(255, 255, 255, 0)",
          200: "rgba(255, 255, 255, 0.01)",
          300: "rgba(255, 255, 255, 0.2)",
        },
        dimgray: "rgba(84, 89, 104, 0.3)",
        "primary-surface": "#f5f5ff",
        "primary-50": "#1a68fe",
        "navbar": "rgba(209, 225, 255, 0.1)",
        "shades-0": "#fff",
        "info-main": "#3267e3",
        "lavender": "#D1E1FF",
        "whitesmoke": "rgba(236, 236, 236, 0.3)",
        "neutral-30": "#c5c5c5",
        "secondary-40": "#edf3ff",
        "deepskyblue": "#1fa4d9",
        "white": "#fff"
      },
      spacing: {},
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;
