// import React from "react";
import { Link } from "react-router-dom";
import { INews } from "@/interface/news.interface";

const NewsCard = ({ ...prop }: INews): JSX.Element => {
  return (
    <div>
      <Link to={"/tin-tuc/1"}>
        <div className="shadow-sm bg-white overflow-hidden rounded-sm">
          <div
            className="w-full h-56 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${prop.imgUrl})`,
            }}
          ></div>
          <div className="content-news-info">
            <h2 className="text-lg font-medium text-ellipsis line-clamp-2 h-16">{prop.titleName}</h2>
            <p className="text-slate-500 text-base font-medium">
              {prop.timePost}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default NewsCard;
