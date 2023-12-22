import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import { newDetail } from "@/data/news";
import "./style.css";
// import AnotherNews from "../News/NewItem";
// import { news } from "@/data/news";
// import { INews } from "@/interface/news.interface";
// import NewItem from "../News/NewItem";
import view1 from "@/assets/images/Views/toa-heftiba-_K3uGqvmEsY-unsplash.jpg";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/Buttons";
const NewsDetail = (): JSX.Element => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <>
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>NEWS</span>
            <span className="text-base px-24">
              Cập nhập những thông tin mới nhất, bài viết mới nhất
            </span>
          </div>
          <div
            style={{
              backgroundImage: `url(${view1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="relative mt-10 container grid grid-cols-12 gap-3">
          <div className="col-start-3 col-end-11 max-sm:col-start-1 max-sm:col-end-13">
            <div
              style={{
                backgroundImage: `url(${newDetail.imgUrl})`,
              }}
              className="w-full h-[500px] rounded-sm bg-cover bg-center"
            ></div>
            <div className="news-detail-info">
              <h2 className="title">{newDetail.title}</h2>
              <p className="author">Tác giả: {newDetail.author}</p>
              <p className="time">Ngày đăng: {newDetail.timePost}</p>
              <div className="news-detail-content">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: newDetail.content || "" }}
                />
              </div>
            </div>
            <div>
              <Link className="" to={"/News"}></Link>
            </div>
          </div>
          {/* <div className="col-span-3">
            <h2 className="font-medium text-2xl py-2">Another news</h2>
            <div className="list-news grid sm:grid-cols-1 gap-3 mb-4">
              {news.map((r: INews, index: number) => (
                <NewItem
                  key={index}
                  imgUrl={r.imgUrl}
                  timePost={r.timePost}
                  titleName={r.titleName}
                />
              ))}
            </div>
          </div> */}
        </div>
        <div className="flex items-center justify-center">
          <Button onClick={()=>navigate(-1)} beforeIcon={<i className="ri-arrow-left-line"></i>} className="text-xl bg-black text-white my-4">
            Các tin tức khác
          </Button>
        </div>
      </>
    </LayoutMain>
  );
};
export default NewsDetail;
