import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import "./style.css";
// import news1 from "@/assets/images/News/news1.jpg";
import { INews } from "@/interface/news.interface";
// import SliderCarousel from "@/components/SliderCarousel";
import NewsCard from "@/components/NewsCard";
// import Divider from "@/components/Divider";
import NewItem from "./NewItem";
import view1 from "@/assets/images/Views/toa-heftiba-_K3uGqvmEsY-unsplash.jpg";
// import Pagination from "@/components/Pagination";
import { news } from "@/data/news";
import { useTranslation } from "react-i18next";
import useFetch from "@/hooks/useFetch.hook";
import { apiGetNews } from "@/app/apis/news.api";
import { Paginate } from "@/components/Paginate/Paginate";
const News = (): JSX.Element => {
  const { t } = useTranslation("news")
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [stateGetAllNews, getNews] = useFetch();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  React.useEffect(() => {
    getNews(async () => {
      const data = await apiGetNews(currentPage, 4);
      return data;
    });
  }, [currentPage]);
  return (
    <LayoutMain>
      <>
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>{t("titleNews")}</span>
            <span className="text-base px-24">
              {t("sloganNews")}
            </span>
          </div>
          <div
            style={{
              backgroundImage: `url(${view1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="bg-[#f7f7f7] container py-16 max-sm:px-[50px] sm:px-[150px]">
          <div className="grid grid-cols-12 gap-4 max-sm:hidden">
            {news.map((r: INews, index: number) => (
              <div className="col-span-3">
                <NewsCard
                  key={index}
                  imgUrl={r.imgUrl}
                  timePost={r.timePost}
                  titleName={r.titleName}
                />
              </div>
            ))}
          </div>
          <div className="sm:hidden">
            {/* <h2 className="font-medium text-2xl py-2">Another news</h2> */}
            <div className="list-news grid max-sm:grid-cols-1 gap-3 mb-4">
              {news.map((r: INews, index: number) => (
                <NewItem
                  key={index}
                  imgUrl={r.imgUrl}
                  timePost={r.timePost}
                  titleName={r.titleName}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center py-5">
            <Paginate
              total_pages={stateGetAllNews.payload?.data?.total_pages}
              current={currentPage}
              onChangePage={function (value: number): void {
                setCurrentPage(value);
              }}
            />
          </div>
        </div>
      </>
    </LayoutMain>
  );
};
export default News;
