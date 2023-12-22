import React from "react";
// import { news } from "@/data/news";
// import { INews } from "@/interface/news.interface";
import Button from "../Buttons";
import ModalBox from "../ModalBox";
import UploadImage from "../UploadImage";
import Input from "../Input";
// import TextEditor from '../TextEditor'
import ModalMessage from "../ModalMessage";
// import useFetch from "@/hooks/useFetch.hook";
import { formatElapsedTime } from "@/utils/formatTime";
import TextEditor from "../TextEditor";
// import { useNavigate } from "react-router-dom";
interface image {
  key: string;
  url: string;
}
interface IDataRender {
  title: string;
  author: string;
  dateCreated: string;
  image?: image;
  content?: string;
}
interface props {
  data: IDataRender[];
}
const ListNews = ({ data }: props): JSX.Element => {
  const [newSelect, setNewSelect] = React.useState<IDataRender>();
  const [isUpdateNew, setIsUpdateNews] = React.useState<boolean>(false);
  const [isEditNews, setIsEditNews] = React.useState<boolean>(false);
  const [dataTextEditor, setTextEditor] = React.useState<string>("");
  //   const navigate = useNavigate();
  if (dataTextEditor) {
    console.log("fix bug declare but never use");
  }
  console.log("this is data:", data);
  const submitUpdateNew = () => {
    setIsUpdateNews(false);
    setNewSelect(undefined);
  };

  const handleExitsUpdateField = () => {
    setIsEditNews(false);
    setNewSelect(undefined);
  };
  console.log(newSelect?.content);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-5">
        {data.map((item: IDataRender, index: number) => (
          <div
            key={index}
            className="col-span-3 rounded-lg overflow-hidden bg-white"
          >
            <div className="w-full h-56">
              <img
                src={item.image?.url || ""}
                alt={item?.title || ""}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex flex-col gap-4">
              <span>{formatElapsedTime(item.dateCreated)}</span>
              <p className="text-2xl font-bold text-ellipsis overflow-hidden  h-[65px] line-clamp-2">
                {item.title}
              </p>
              <div>
                <Button
                  className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white"
                  onClick={() => setNewSelect(item)}
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        <ModalBox
          isOpen={newSelect !== undefined}
          onClose={() => setNewSelect(undefined)}
        >
          <>
            <div className="bg-white rounded-lg p-5">
              <h1 className="text-3xl font-semibold py-3">Thêm tin tức mới </h1>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-4 p-2">
                  <UploadImage imgUrl={newSelect?.image?.url} />
                </div>
                <div className="col-span-8">
                  <div>
                    <Input
                      value={newSelect?.title}
                      labelName="Tiêu đề"
                      placeholder="Nhập tiêu đề"
                    />
                  </div>
                  <div className="p-2"></div>
                </div>
                <div className="col-span-12">
                  <div>
                    <TextEditor
                      valueText={newSelect?.content}
                      onChange={(value: string) => {
                        setTextEditor(value);
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-5 justify-end p-4">
                    <Button
                      className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white"
                      beforeIcon={<i className="ri-add-fill"></i>}
                      onClick={() => setIsUpdateNews(true)}
                    >
                      <span className="ml-2">Chỉnh sửa tin tức</span>
                    </Button>
                    <Button
                      className="bg-gradient-to-br from-[#ff9f93] to-[#ff6854] text-white"
                      onClick={() => setIsEditNews(true)}
                    >
                      <span>Trở về</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {isUpdateNew && (
              <ModalMessage
                content="Bạn có muốn chỉnh sửa tin tức không ?"
                title="Thông báo "
                isOk={submitUpdateNew}
                isClose={() => setIsUpdateNews(false)}
              />
            )}
            {isEditNews && (
              <ModalMessage
                content="Bạn đang chỉnh tin tức, bạn có muốn thoát ?"
                title="Lưu ý"
                isOk={handleExitsUpdateField}
                isClose={() => setIsEditNews(false)}
              />
            )}
          </>
        </ModalBox>
      }
    </>
  );
};
export default ListNews;
