import Pagetitle from "@/components/PageTitle";
import TextEditor from "@/components/TextEditor";
import LayoutAdmin from "@/components/layouts/Admin";
import { useState } from "react";
import { CreateData, apiCreateNews } from "@/app/apis/news.api";
import useFetch from "@/hooks/useFetch.hook";
import Button from "@/components/Buttons";
// import { TextField } from "@mui/material";
// import LoadingPage from "@/components/Loading/LoadingPage";
import UploadImage from "@/components/UploadImage";
import Input from "@/components/Input";
import { useAlertMessage } from "@/contexts/AlertContext";

const AddNews = (): JSX.Element => {
  const [dataImage, setDataImage] = useState<File>();
  const [dataTitle, setDataTitle] = useState<string>("");
  const [dataTextEditor, setTextEditor] = useState<string>("");
  const [stateCreateTextEditor, upTextEditor] = useFetch();
  const { addAlert } = useAlertMessage();

  const handleFileSelect = (file: File) => {
    setDataImage(file);
    console.log("File selected in Home:", file);
  };
  const onSubmitNews = async (): Promise<void> => {
    addAlert({
      message: "Đang tiến hành thêm tin tức mới",
      title: "Thông báo",
      type: "info",
    });
    const dataUpNews: CreateData = {
      title: dataTitle,
      author: "Trần Văn Hoà",
      file: dataImage!,
      content: dataTextEditor,
    };
    await upTextEditor(async () => {
      try {
        await apiCreateNews(dataUpNews);
        addAlert({
          message: "Thêm thành công tin tức mới",
          title: "Thành công",
          type: "success",
        });
      } catch {
        addAlert({
          message: "Đã có lỗi trong quá trình thêm, vui lòng thử lại sau!",
          title: "Lỗi",
          type: "error",
        });
      }
    });
  };
  return (
    <LayoutAdmin>
      <>
        <>
          {/* {stateCreateTextEditor.loading && <LoadingPage />} */}
          <Pagetitle title="Thêm tin tức" />
          <div className="bg-white rounded-lg p-5">
            <h1 className="text-3xl font-semibold py-3">Thêm tin tức mới </h1>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-4 p-2">
                <UploadImage onFileSelect={handleFileSelect} />
              </div>
              <div className="col-span-8">
                <div>
                  {/* <TextField type="text" onChange={onChangeTitle} /> */}
                  <Input
                    onChange={(e) => setDataTitle(e.target.value)}
                    labelName="Tiêu đề"
                    placeholder="Nhập tiêu đề"
                  />
                </div>
                <div className="p-2"></div>
              </div>
              <div className="col-span-12">
                <div>
                  <TextEditor
                    onChange={(value: string) => {
                      setTextEditor(value);
                    }}
                  />
                </div>
                <div className="flex items-center gap-5 justify-end p-4">
                  <Button
                    onClick={onSubmitNews}
                    isLoading={stateCreateTextEditor.loading}
                    className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white"
                    beforeIcon={<i className="ri-add-fill"></i>}
                  >
                    <span className="ml-2">Thêm tin tức mới</span>
                  </Button>
                  <Button className="bg-gradient-to-br from-[#ff9f93] to-[#ff6854] text-white">
                    <span>Trở về</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    </LayoutAdmin>
  );
};
export default AddNews;
