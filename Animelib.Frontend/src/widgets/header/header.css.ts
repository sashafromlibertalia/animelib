import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { vars } from "@shared/ui/styles";

export const useHeaderStyles = makeStyles({
  header: {
    ...shorthands.borderRadius(tokens.borderRadiusNone),
    ...shorthands.padding("8px", "0"),
    backgroundColor: vars.colors.bgStroke.secondary,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    display: "block",
    width: "fit-content",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
});
