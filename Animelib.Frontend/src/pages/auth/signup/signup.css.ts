import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useSignupStyles = makeStyles({
  form: {
    width: "350px",
    ...shorthands.margin("auto"),
  },
  caption: {
    textAlign: "center",
    color: tokens.colorNeutralForeground4,
  },
});
