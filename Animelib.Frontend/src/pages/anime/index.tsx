import { AppLayout } from "@layouts";
import React from "react";
import { animeModel } from "@entities/anime";
import { useUnit } from "effector-react";
import {
  Body1,
  Spinner,
} from "@fluentui/react-components";
import { useAnimeStyles } from "@pages/anime/anime.css";
import { AnimeExplorer } from "@widgets/anime/explorer";

const AnimePage = () => {
  const styles = useAnimeStyles();

  const isPending = useUnit(animeModel.effects.fetchAnimeFx.pending);
  const anime = animeModel.selectors.useActiveAnime();

  if (isPending)
    return <Spinner size={"large"} />;

  if (!anime)
    return (
      <AppLayout>
        <Body1>This anime does not exists in our database.</Body1>
      </AppLayout>
    );

  return (
    <AppLayout>
      {
        anime?.coverUrl && (
          <div className={styles.coverImg} style={{ backgroundImage: `url(${anime?.coverUrl})` }} />
        )
      }
      <AnimeExplorer anime={anime} className={anime?.coverUrl && styles.posterContainer} />
    </AppLayout>
  );
};

export default AnimePage;
