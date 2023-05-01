import { api } from "@shared/config";
import { AxiosResponse } from "axios";

const getAllAnimeAsync = async (page: number = 1, take: number = 20): Promise<AxiosResponse> => {
  return api.get("animes", {
    params: {
      page,
      take,
    },
  });
};

const getAnimeBySlugAsync = async (slug: string): Promise<AxiosResponse> => {
  return api.get(`animes/${slug}`);
};

export {
  getAllAnimeAsync,
  getAnimeBySlugAsync,
};
