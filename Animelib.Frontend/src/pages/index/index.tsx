import { AppLayout } from "@layouts";
import { AnimeCardList, animeModel } from "@entities/anime";
import { Pagination } from "@shared/ui/components";

const IndexPage = () => {
  const activePage = animeModel.selectors.useAnimePage();
  const totalPages = animeModel.selectors.useTotalAnimePages();

  return (
    <AppLayout>
      <AnimeCardList />
      <Pagination total={totalPages} current={activePage}
        onChange={(page) => animeModel.events.changeAnimePage(page)} />
    </AppLayout>
  );
};

export default IndexPage;
