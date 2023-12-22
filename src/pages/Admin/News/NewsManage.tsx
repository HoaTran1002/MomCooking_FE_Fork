import { apiGetNews } from "@/app/apis/news.api";
import LayoutAdmin from "@/components/layouts/Admin";
import LoadingPage from "@/components/Loading/LoadingPage";
import FilterNews from "@/components/NewsManage/FilterNews";
import ListNews from "@/components/NewsManage/ListNews";
import Pagetitle from "@/components/PageTitle";
import { Paginate } from "@/components/Paginate/Paginate";
import useFetch from "@/hooks/useFetch.hook";
import { useEffect, useState } from "react";
const NewsManage = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [stateGetAllNews, getNews] = useFetch();
  useEffect(() => {
    getNews(async () => {
      const data = await apiGetNews(currentPage, 4);
      return data;
    });
  }, [currentPage]);

  return (
    <LayoutAdmin>
      <>
        {stateGetAllNews.loading && stateGetAllNews.payload == null ? (
          <LoadingPage />
        ) : (
          <>
            <Pagetitle title="Quản lý bài viết" />
            <FilterNews />
            {stateGetAllNews.payload?.data.data != null && (
              <ListNews data={stateGetAllNews.payload?.data.data} />
            )}
            <div className="flex items-center justify-center">
              <Paginate
                total_pages={stateGetAllNews.payload?.data?.total_pages}
                current={currentPage}
                onChangePage={function (value: number): void {
                  setCurrentPage(value);
                }}
              />
            </div>
          </>
        )}
      </>
    </LayoutAdmin>
  );
};
export default NewsManage;
