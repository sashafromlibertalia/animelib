export type Anime = {
  title: string;
  description: string;
  slug: string;
  posterUrl: string;
  coverUrl: string;
  subtype: AnimeTypesEnum;
  rating: number;
  status: string;
  episodesCount: number;
};

export type AnimeResponse = {
  data: Anime[];
  total: number;
};

export const enum AnimeTypesEnum {
  Ona = "ONA",
  Ova = "OVA",
  Tv = "TV",
  MOVIE = "movie",
  Music = "music",
  Special = "special",
}
