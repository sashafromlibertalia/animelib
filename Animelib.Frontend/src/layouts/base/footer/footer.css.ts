import { makeStyles, shorthands } from "@fluentui/react-components";
import { vars } from "@shared/ui/styles";

export const useFooterStyles = makeStyles({
  footer: {
    color: vars.colors.textIcons.tertiary.normal,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: vars.colors.bgStroke.secondary,
    ...shorthands.padding("1rem", "0"),
  },
});
