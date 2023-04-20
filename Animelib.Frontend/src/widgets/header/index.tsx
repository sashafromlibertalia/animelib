import { Container } from "@shared/ui";
import { Group } from "@vkontakte/vkui";
import { logo, navigationBar } from "@widgets/header/header.css";

export const Header = () => {
  return (
    <nav>
      <Group className={navigationBar}>
        <Container>
          <picture>
            <source
              src={
                "https://nihongoflashcards.com/wp-content/uploads/2020/01/kanji-ie01.png"
              }
            />
            <img
              className={logo}
              src={
                "https://nihongoflashcards.com/wp-content/uploads/2020/01/kanji-ie01.png"
              }
              alt={"logo"}
            />
          </picture>
        </Container>
      </Group>
    </nav>
  );
};
