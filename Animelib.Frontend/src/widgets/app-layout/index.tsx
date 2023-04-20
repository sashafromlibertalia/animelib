import { FC, PropsWithChildren } from "react";
import { Header } from "@widgets/header";
import { Container, Footer } from "@shared/ui";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};
