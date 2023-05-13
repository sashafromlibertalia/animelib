import { Container, vars } from "@shared";
import { makeStyles, shorthands } from "@fluentui/react-components";

const useFooterStyles = makeStyles({
  footer: {
    color: vars.colors.textIcons.tertiary.normal,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: vars.colors.bgStroke.secondary,
    marginTop: "auto",
    ...shorthands.padding("1rem", "0"),
  },
});


export const Footer = () => {
  const styles = useFooterStyles();

  return (
    <footer className={styles.footer}>
      <Container>
        Built with 💜 and&nbsp;
        <a href={"https://react.fluentui.dev/"} target={"_blank"} rel="noreferrer">
          FluentUI
        </a>
      </Container>
    </footer>
  );
};
