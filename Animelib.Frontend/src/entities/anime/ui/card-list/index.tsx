import React from "react";
import { useList, useUnit } from "effector-react";
import { animeModel } from "@entities/anime";
import { Caption1, Card, CardHeader, Spinner, Subtitle2 } from "@fluentui/react-components";
import { useCarsStyles } from "./card-list.css";

const MAX_TITLE_LENGTH = 20;

export const AnimeCardList = () => {
  const styles = useCarsStyles();
  const isPending = useUnit(animeModel.effects.fetchAllAnimeFx.pending);

  const data = useList(animeModel.$allAnime, (anime) => {
    return (
      <Card className={styles.card}>
        <a key={anime.slug} href={`/anime/${anime.slug}`}>
          <picture>
            <source srcSet={anime.posterUrl} />
            <img alt={"poster"} className={styles.image} src={anime.posterUrl} />
          </picture>
          <CardHeader header={
            <Subtitle2 className={styles.subtitle}>
              {
                anime.title.length > MAX_TITLE_LENGTH ?
                  `${anime.title.slice(0, MAX_TITLE_LENGTH)}...` :
                  anime.title
              }
            </Subtitle2>
          } />
          <Caption1 className={styles.caption}>
            <span>
              {anime.subtype}
            </span>
          </Caption1>
        </a>
      </Card>
    );
  });

  if (isPending)
    return <Spinner size={"large"} />;

  return (
    <div className={styles.list}>
      {data}
    </div>
  );
};

