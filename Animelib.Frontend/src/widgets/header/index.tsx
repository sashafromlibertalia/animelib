import { useHeaderStyles } from "@widgets/header/header.css";
import { Container } from "@layouts";
import { Avatar, Button } from "@fluentui/react-components";

export const Header = () => {
  const styles = useHeaderStyles();

  return (
    <nav>
      <div className={styles.header}>
        <Container className={styles.container}>
          <a href={"/"} className={styles.link}>
            <picture>
              <source
                src={
                  "https://nihongoflashcards.com/wp-content/uploads/2020/01/kanji-ie01.png"
                }
              />
              <img
                className={styles.logo}
                src={
                  "https://nihongoflashcards.com/wp-content/uploads/2020/01/kanji-ie01.png"
                }
                alt={"logo"}
              />
            </picture>
          </a>

          <div>
            <a href={"https://github.com/sashafromlibertalia/animelib"} target={"_blank"} rel="noreferrer">
              <Button appearance={"transparent"}>GitHub</Button>
            </a>
            <Avatar name="Александр Мирошниченко" />
          </div>
        </Container>
      </div>
    </nav>
  );
};
