import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { breakpoints, vars } from "@shared/ui/styles";

export const useCarsStyles = makeStyles({
  card: {
    ...shorthands.transition("border", vars.transitions.base.duration, vars.transitions.base.timingFunction),
    ...shorthands.padding("0.5rem"),
    ...shorthands.border(tokens.strokeWidthThick, "solid", "transparent"),
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      width: "100%",
    },
    "&:hover a": {
      color: vars.colors.textIcons.accent.normal,
    },
    "&:hover": {
      ...shorthands.border(tokens.strokeWidthThick, "solid", vars.colors.textIcons.accent.hover),
    },
  },
  subtitle: {
    marginTop: tokens.spacingVerticalXS,
    display: "inline-block",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    ...shorthands.gap(tokens.spacingHorizontalL),
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    },
  },
  caption: {
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
});
