import { AppLayout } from "@layouts";
import { useEffect } from "react";
import { AnimeCardList, animeModel } from "@/entities/anime";
import { Pagination } from "@shared/ui/components";

const IndexPage = () => {
  const activePage = animeModel.selectors.useAnimePage();
  const totalPages = animeModel.selectors.useTotalAnimePages();

  useEffect(() => {
    animeModel.effects.fetchAllAnimeFx(1);
  }, []);

  return (
    <AppLayout>
      <AnimeCardList />
      <Pagination total={totalPages} current={activePage} />
    </AppLayout>
  );
};

export default IndexPage;
