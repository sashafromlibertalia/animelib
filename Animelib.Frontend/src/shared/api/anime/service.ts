import { api } from "@shared/config";
import { AxiosResponse } from "axios";

const getAllAnimesAsync = async (page: number = 1, take: number = 20): Promise<AxiosResponse> => {
  return api.get("animes", {
    params: {
      page,
      take,
    },
  });
};

export {
  getAllAnimesAsync,
};
