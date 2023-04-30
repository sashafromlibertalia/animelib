import "@shared/ui/styles";
import { vars } from "@shared/ui/styles";
import { makeStaticStyles } from "@fluentui/react-components";

export const useStaticStyles = makeStaticStyles({
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    lineHeight: 1.5,
    scrollBehavior: "smooth",
    fontFamily: `${vars.font.base} !important`,
    backgroundColor: vars.colors.bgStroke.base,
  },
  a: {
    textDecoration: "none",
    color: vars.colors.textIcons.accent.normal,
    transition: vars.transitions.base.complete,
  },
  "a:hover": {
    color: vars.colors.textIcons.accent.hover,
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  "#root": {
    isolation: "isolate",
  },
});
