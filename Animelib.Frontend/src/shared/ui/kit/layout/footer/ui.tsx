import { Container } from "@shared/ui";
import { footerCss } from "@shared/ui/kit/layout/footer/footer.css";

export const Footer = () => {
  return (
    <footer className={footerCss}>
      <Container>
        Сделано с любовью на&nbsp;
        <a href={"https://vkcom.github.io/VKUI/#/About"} target={"_blank"} rel="noreferrer">
          VKUI
        </a>&nbsp;и&nbsp;<a
          href={"https://vanilla-extract.style/"}
          target={"_blank"}
          rel="noreferrer">
          @vanilla-extract
        </a> / 2023 год
      </Container>
    </footer>
  );
};
