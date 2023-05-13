const useWatchLists = (): any[] => {
  return [
    {
      name: "All",
      id: "all",
    },
    {
      name: "Completed",
      id: "completed",
    },
    {
      name: "Watching",
      id: "watching",
    },
    {
      name: "On Hold",
      id: "on_hold",
    },
    {
      name: "Dropped",
      id: "dropped",
    },
    {
      name: "Plan to Watch",
      id: "plan_to_watch",
    },
  ];
};


export const selectors = {
  useWatchLists,
};
