import { useUserWatchListStyles } from "@widgets/user-watch-lists/styles.css";
import { Caption1, Card } from "@fluentui/react-components";
import { userModel } from "@entities/user";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

export const UserWatchLists = () => {
  const styles = useUserWatchListStyles();
  const [searchParams, setSearchParams] = useSearchParams();

  const { useWatchLists  } = userModel.selectors;

  return (
    <section className={styles.container}>
      <aside className={styles.aside}>
        <Card>
          <ul>
            {
              useWatchLists().map((watchList) => (
                <li key={watchList.id} className={clsx(
                  searchParams.get("list") === watchList.id && styles.active,
                  !searchParams.has("list") && watchList.id === "watching" && styles.active,
                )} onClick={() => {
                  setSearchParams({
                    ...searchParams,
                    list: watchList.id,
                  });
                }}>
                  {watchList.name}
                  <Caption1 className={styles.caption}>2</Caption1>
                </li>
              ))
            }
          </ul>
        </Card>
      </aside>
    </section>
  );
};
