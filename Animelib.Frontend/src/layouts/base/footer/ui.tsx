import { Container } from "@layouts";
import { useFooterStyles } from "@layouts/base/footer/footer.css";

export const Footer = () => {
  const styles = useFooterStyles();

  return (
    <footer className={styles.footer}>
      <Container>
        Сделано с любовью на&nbsp;
        <a href={"https://react.fluentui.dev/"} target={"_blank"} rel="noreferrer">
          FluentUI
        </a>
      </Container>
    </footer>
  );
};
