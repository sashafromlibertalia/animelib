import { FC, PropsWithChildren } from "react";
import { Header } from "@widgets/header";
import { Container, Footer } from "@layouts";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useAppLayoutStyles = makeStyles({
  main: {
    ...shorthands.padding(".75rem", 0),
  },
});

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const styles = useAppLayoutStyles();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};
