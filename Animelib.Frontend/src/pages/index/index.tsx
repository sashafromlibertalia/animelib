import { AppLayout, Pagination } from "@shared";
import { AnimeCardList, animeModel } from "@entities/anime";

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
