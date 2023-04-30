import { Anime, AnimeResponse, getAllAnimesAsync } from "@shared/api/anime";
import { createEffect, createEvent, createStore } from "effector";
import { useUnit } from "effector-react";

const fetchAllAnimeFx = createEffect<number, AnimeResponse>(async (page = 1) => {
  const { data: response } = await getAllAnimesAsync(page);
  return response;
});

export const $anime = createStore<Anime[]>([])
  .on(fetchAllAnimeFx.doneData, (_, response) => response.data);
export const $animeTotalPages = createStore(1)
  .on(fetchAllAnimeFx.doneData, (_, data) => Math.ceil(data.total / 20));


const changeAnimePage = createEvent<number>();
export const $animeActivePage = createStore(1)
  .on(changeAnimePage, (_, page) => page);


const useAnimePage = (): number => {
  return useUnit($animeActivePage);
};
const useTotalAnimePages = (): number => {
  return useUnit($animeTotalPages);
};

export const events = {
  changeAnimePage,
};
export const effects = {
  fetchAllAnimeFx,
};
export const selectors = {
  useAnimePage,
  useTotalAnimePages,
};
