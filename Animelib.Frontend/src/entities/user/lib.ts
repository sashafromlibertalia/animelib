import { useSearchParams } from "react-router-dom";

export enum UserTab {
  WatchLists = 1,
  Comments = 2,
}

export const useUserTab = (): UserTab => {
  const [searchParams] = useSearchParams();

  if (!searchParams.has("tab")) {
    return UserTab.WatchLists;
  }

  return searchParams.get("tab") === "comments" ? UserTab.Comments : UserTab.WatchLists;
};

