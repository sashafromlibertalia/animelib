import { FC, HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useContainerStyles = makeStyles({
  container: {
    maxWidth: "1440px",
    ...shorthands.padding("0", "2rem"),
    ...shorthands.margin("0", "auto"),
  },
});

export const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children, className, ...rest
}) => {
  const styles = useContainerStyles();

  return <section {...rest} className={clsx(styles.container, className)}>{children}</section>;
};
