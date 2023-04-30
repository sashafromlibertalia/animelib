import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { useContainerStyles } from "@layouts/base/container/container.css";
import clsx from "clsx";

export const Container: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children, className, ...rest
}) => {
  const styles = useContainerStyles();

  return <section {...rest} className={clsx(styles.container, className)}>{children}</section>;
};
