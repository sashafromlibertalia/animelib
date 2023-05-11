import React, { FC, memo, useState } from "react";
import clsx from "clsx";
import {
  Body1,
  Body2,
  Card,
  Divider,
  Subtitle2,
  Subtitle2Stronger,
  Tab,
  TabList,
  Title1,
} from "@fluentui/react-components";
import { Icon16StarCircleFillYellow } from "@vkontakte/icons";
import { useAnimeExplorerStyles } from "@widgets/anime/explorer/ui/styles.css";
import { Anime } from "@shared/api/anime";
import { CreateCommentForm } from "@features/user/create-comment";

type AnimeExplorerProps = {
  anime: Anime,
  className?: string;
}

type Tabs = "info" | "comments";

export const AnimeExplorer: FC<AnimeExplorerProps> = (props) => {
  const styles = useAnimeExplorerStyles();
  const { className, anime } = props;

  const [tab, setTab] = useState<Tabs>("info");

  const InfoTab = memo(() => (
    <section className={styles.tab}>
      <Body2>
        {anime?.description}
      </Body2>
    </section>
  ));
  InfoTab.displayName = "InfoTab";

  const CommentsTab = memo(() => (
    <section className={styles.tab}>
      <CreateCommentForm />

      <Divider className={styles.divider} />
    </section>
  ));
  CommentsTab.displayName = "CommentsTab";

  return (
    <div className={clsx(
      styles.container,
      className,
    )}>
      <aside className={styles.aside}>
        <img className={styles.poster} src={anime?.posterUrl} alt={"poster"} />
        <Card>
          <section className={styles.asideMeta}>
            <Subtitle2>Type</Subtitle2>
            <Body1>{anime?.subtype ?? "Unknown"}</Body1>

            <Divider />

            <Subtitle2>Status</Subtitle2>
            <Body1>{anime?.status ?? "Unknown"}</Body1>

            <Divider />

            <Subtitle2>Episodes</Subtitle2>
            <Body1>{anime?.episodesCount ?? "Unknown"}</Body1>
          </section>
        </Card>
      </aside>

      <div className={styles.contentContainer}>
        <section>
          <Title1>{anime?.title}</Title1>
          <span className={styles.ratingContainer}>
            <Icon16StarCircleFillYellow width={24} height={24} />
            <Subtitle2Stronger>{anime?.rating}</Subtitle2Stronger>
          </span>
        </section>
        <Card className={styles.tabsContainer}>
          <TabList defaultSelectedValue={tab} onTabSelect={(_, data) => setTab(data.value as Tabs)}>
            <Tab value={"info"}>Information</Tab>
            <Tab value={"comments"}>Comments</Tab>
          </TabList>
          {
            tab === "info" && <InfoTab />
          }
          {
            tab === "comments" && <CommentsTab />
          }
        </Card>
      </div>
    </div>
  );
};
