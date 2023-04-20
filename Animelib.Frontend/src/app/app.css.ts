import { globalStyle } from "@vanilla-extract/css";
import "@shared/ui/styles";
import { vars } from "@shared/ui/styles";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("body", {
  lineHeight: 1.5,
  scrollBehavior: "smooth",
  fontFamily: `${vars.font.base} !important`,
});

globalStyle("a", {
  textDecoration: "none",
  color: vars.colors.textIcons.accentBlue.normal,
});

globalStyle("a:hover", {
  textDecoration: "underline",
});

globalStyle(
  `article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary`,
  {
    display: "block",
  },
);

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});

globalStyle("#root", {
  isolation: "isolate",
});
