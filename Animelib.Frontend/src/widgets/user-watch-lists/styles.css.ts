import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useUserWatchListStyles = makeStyles({
  container: {
    marginTop: tokens.spacingVerticalL,
  },
  aside: {
    maxWidth: "220px",
    width: "100%",
    "& ul": {
      listStyleType: "none",
    },
    "& ul li": {
      width: "100%",
      display: "flex",
      ...shorthands.padding(tokens.spacingVerticalS, tokens.spacingHorizontalM),
      alignItems: "center",
      cursor: "pointer",
      ...shorthands.borderRadius(tokens.borderRadiusMedium),
      ...shorthands.margin(tokens.spacingVerticalXS, 0),
      justifyContent: "space-between",
      "&:hover": {
        backgroundColor: tokens.colorNeutralBackground1Hover,
      },
    },
  },
  caption: {
    color: tokens.colorNeutralForeground4,
  },
  active: {
    backgroundColor: tokens.colorNeutralBackground1Selected,
  },
});
