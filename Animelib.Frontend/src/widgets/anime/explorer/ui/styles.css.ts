import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { breakpoints } from "@shared/ui/styles";

export const useAnimeExplorerStyles = makeStyles({
  container: {
    display: "flex",
    ...shorthands.gap(tokens.spacingHorizontalXXXL),
  },
  aside: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap(tokens.spacingVerticalL),
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      display: "none",
    },
  },
  asideMeta: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("8px"),
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: tokens.spacingVerticalS,
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  contentContainer: {
    width: "100%",
  },
  poster: {
    width: "250px",
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
  },
  tab: {
    width: "100%",
  },
  tabsContainer: {
    marginTop: tokens.spacingVerticalL,
    width: "100%",
    ...shorthands.padding("0", "1rem", "1rem"),
  },
  divider: {
    ...shorthands.margin(tokens.spacingVerticalM, 0),
  },
});
