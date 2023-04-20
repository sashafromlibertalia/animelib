import { style } from "@vanilla-extract/css";
import { vars } from "@shared/ui/styles";

export const footerCss = style({
  color: vars.colors.textIcons.tertiary.normal,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px 0",
  background: vars.colors.bgStroke.paleBlack.normal,
});
