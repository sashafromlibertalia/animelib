import { Anime, ApiAnime, getAllAnimeAsync, getAnimeBySlugAsync } from "@shared/api/anime";
import { createEffect, createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";

const fetchAllAnimeFx = createEffect<number, ApiAnime>(async (page = 1) => {
  const { data } = await getAllAnimeAsync(page);
  return data;
});

const fetchAnimeFx = createEffect<string, Anime>(async (slug: string) => {
  const { data } = await getAnimeBySlugAsync(slug);
  return data;
});


const changeAnimePage = createEvent<number>();


export const $allAnime = createStore<Anime[]>([])
  .on(fetchAllAnimeFx.doneData, (_, response) => response.data);

export const $activeAnime = createStore<Anime | null>(null)
  .on(fetchAnimeFx.doneData, (_, data) => data);

export const $animeTotalPages = createStore(1)
  .on(fetchAllAnimeFx.doneData, (_, data) => Math.ceil(data.total / 20));

export const $animeActivePage = createStore(1)
  .on(changeAnimePage, (_, page) => page);


sample({
  source: $animeActivePage,
  clock: changeAnimePage,
  target: fetchAllAnimeFx,
});

const useAnimePage = (): number => {
  return useUnit($animeActivePage);
};

const useTotalAnimePages = (): number => {
  return useUnit($animeTotalPages);
};

const useActiveAnime = (): Anime | null => {
  return useUnit($activeAnime);
};

export const events = {
  changeAnimePage,
};

export const effects = {
  fetchAllAnimeFx,
  fetchAnimeFx,
};

export const selectors = {
  useAnimePage,
  useTotalAnimePages,
  useActiveAnime,
};
