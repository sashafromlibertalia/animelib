export type Anime = {
  title: string;
  description: string;
  slug: string;
  posterUrl: string;
  coverUrl: string;
  subtype: string;
  rating: number;
  status: string;
  episodesCount: number;
};

export type ApiAnime = {
  data: Anime[];
  total: number;
};
