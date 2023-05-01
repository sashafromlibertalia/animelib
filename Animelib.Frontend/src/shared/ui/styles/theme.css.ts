export const breakpoints = Object.freeze({
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
});

export const vars = Object.freeze({
  colors: {
    textIcons: {
      accent: {
        normal: "#7f85f5",
        hover: "#4f52b2",
      },
      tertiary: {
        normal: "#656565",
      },
    },
    bgStroke: {
      base: "#141414",
      secondary: "#202021",
    },
  },
  transitions: {
    base: {
      duration: "150ms",
      timingFunction: "ease-in-out",
      complete: "all 150ms ease-in-out",
    },
  },
});
