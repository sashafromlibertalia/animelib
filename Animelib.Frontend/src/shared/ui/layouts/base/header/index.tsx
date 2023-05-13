import {
  Avatar,
  Button, makeStyles,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger, shorthands, tokens,
} from "@fluentui/react-components";
import { ArrowExit20Filled, CommentMultiple24Regular, Person24Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { Container, vars } from "@shared";

const useHeaderStyles = makeStyles({
  header: {
    ...shorthands.borderRadius(tokens.borderRadiusNone),
    ...shorthands.padding("8px", "0"),
    backgroundColor: vars.colors.bgStroke.secondary,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    display: "block",
    width: "fit-content",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  menu: {
    cursor: "pointer",
  },
});

export const Header = () => {
  const styles = useHeaderStyles();
  const navigate = useNavigate();

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

          <section>
            <a href={"https://github.com/sashafromlibertalia/animelib"} target={"_blank"} rel="noreferrer">
              <Button appearance={"transparent"}>GitHub</Button>
            </a>
            <Menu hasIcons>
              <MenuTrigger disableButtonEnhancement>
                <Avatar name={"sashafromlibertalia"} className={styles.menu} />
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem icon={<Person24Regular />} onClick={() => navigate("/user/1")}>
                    My profile
                  </MenuItem>
                  <MenuItem icon={<CommentMultiple24Regular />} onClick={() => navigate("/user/1?tab=comments")}>
                    My comments
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem icon={<ArrowExit20Filled />}>
                    Logout
                  </MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </section>
        </Container>
      </div>
    </nav>
  );
};
