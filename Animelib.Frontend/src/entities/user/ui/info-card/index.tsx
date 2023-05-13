import { Avatar, Body1, Card, makeStyles, shorthands, Subtitle1, Tab, TabList, tokens } from "@fluentui/react-components";
import { Bookmark24Regular, CommentMultiple24Regular } from "@fluentui/react-icons";
import { useSearchParams } from "react-router-dom";
import { UserTab, useUserTab } from "@entities/user";

const useStyles = makeStyles({
  userContainer: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap(tokens.spacingHorizontalM),
  },
  userDataContainer: {
    display: "flex",
    flexDirection: "column",
  },
});

export const UserInfoCard = () => {
  const styles = useStyles();

  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = useUserTab();

  return (
    <Card>
      <div className={styles.userContainer}>
        <Avatar size={64} name={"sashafromlibertalia"} />

        <span className={styles.userDataContainer}>
          <Subtitle1>sashafromlibertalia</Subtitle1>
          <Body1>Created account on 22.04.2023</Body1>
        </span>
      </div>
      <TabList defaultSelectedValue={UserTab.WatchLists} selectedValue={activeTab}>
        <Tab icon={<Bookmark24Regular />} value={UserTab.WatchLists} onClick={() => {
          searchParams.delete("tab");
          setSearchParams(searchParams);
        }}>
          Watching lists
        </Tab>

        <Tab icon={<CommentMultiple24Regular />} value={UserTab.Comments} onClick={() => setSearchParams({
          tab: "comments",
        })}>
          Comments
        </Tab>
      </TabList>
    </Card>
  );
};
