import { createGlobalTheme } from "@vanilla-extract/css";

export const breakpoints: Record<string, number> = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const vars = createGlobalTheme(":root", {
  font: {
    base: "'Mulish', sans-serif",
    heading: "'IBM Plex Sans', sans-serif",
  },
  colors: {
    textIcons: {
      accentBlue: {
        normal: "#397DCC",
        hover: "#4182CE",
      },
      tertiary: {
        normal: "#656565",
      },
    },
    bgStroke: {
      paleBlack: {
        normal: "#191919",
      },
    },
  },
  transitions: {
    base: "all 150ms ease-in-out",
  },
});
