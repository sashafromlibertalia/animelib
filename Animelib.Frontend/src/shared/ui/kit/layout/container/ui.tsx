import { FC, PropsWithChildren } from "react";
import { containerStyle } from "./container.css";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <section className={containerStyle}>{children}</section>;
};
