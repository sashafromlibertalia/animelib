import { FC, PropsWithChildren } from "react";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { Container, Footer, Header } from "@shared";

const useAppLayoutStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    ...shorthands.padding(".75rem", 0),
  },
});

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const styles = useAppLayoutStyles();

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
