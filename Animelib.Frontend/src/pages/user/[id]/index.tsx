import { AppLayout } from "@shared";
import { UserInfoCard, UserTab, useUserTab } from "@entities/user";
import { UserWatchLists } from "@widgets/user-watch-lists";

const UserPage = () => {
  const activeTab = useUserTab();

  return (
    <AppLayout>
      <UserInfoCard />

      {
        activeTab === UserTab.WatchLists && (
          <UserWatchLists />
        )
      }
    </AppLayout>
  );
};

export default UserPage;
