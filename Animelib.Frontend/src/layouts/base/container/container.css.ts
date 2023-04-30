import { makeStyles, shorthands } from "@fluentui/react-components";

export const useContainerStyles = makeStyles({
  container: {
    maxWidth: "1440px",
    ...shorthands.padding("0", "2rem"),
    ...shorthands.margin("0", "auto"),
  },
});
