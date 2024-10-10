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
      },
      keyframes: {
        ...createSignalAnimations().keyframes,
      },
      animation: {
        ...createSignalAnimations().animations,
      },
    },
  },
  plugins: [],
};
export default config;

function createSignalAnimations() {
  const animations = {
    "signal-ring-after": "signal-ring-after 5s linear infinite 1.5s both",
    "signal-radar": "signal-radar 2s linear infinite",
  };

  const keyframes = {
    "signal-ring-after": {
      "0%, 100%": {
        filter: "blur(3px)",
        opacity: "0",
      },
      "3%": {
        filter: "none",
        opacity: "1",
        transform: "translate(-50%, -50%) scale(1.6)",
      },
    },
    "signal-radar": {
      to: {
        transform: "rotate(-360deg)",
      },
    },
  };

  return { animations, keyframes };
}
