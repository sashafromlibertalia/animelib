import { makeStyles, shorthands } from "@fluentui/react-components";
import { breakpoints, vars } from "@shared/ui/styles";

export const useCarsStyles = makeStyles({
  card: {
    ...shorthands.transition("border", vars.transitions.base.duration, vars.transitions.base.timingFunction),
    ...shorthands.padding("0.5rem"),
    ...shorthands.border("2px", "solid", "transparent"),
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      width: "100%",
    },
    "&:hover a": {
      color: vars.colors.textIcons.accent.normal,
    },
    "&:hover": {
      ...shorthands.border("2px", "solid", vars.colors.textIcons.accent.hover),
    },
  },
  subtitle: {
    fontFamily: vars.font.heading,
    marginTop: ".25rem",
    display: "inline-block",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    ...shorthands.gap("1rem"),
  },
  caption: {
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
    objectFit: "cover",
  },
});
