import React from "react";
import ModalBox from "@/components/ModalBox";
import Input from "@/components/Input";
import { useAlertMessage } from "@/contexts/AlertContext";
// import ModalMessage from '../ModalMessage'
const AddFAQuestion = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { addAlert } = useAlertMessage();
  // const [isShowMessage,setIsShowMessage] = React.useState<boolean>(false)
  const handleOpenModel = (): void => {
    setOpen(true);
  };
  const handleCloseModel = (): void => {
    setOpen(false);
  };
  const handleAdd = (): void => {
    addAlert({
      type: "success",
      title: "Thành công",
      message: "Thêm câu hỏi thành công",
    });
    handleCloseModel();
  };
  return (
    <>
      <div className="my-2">
        <button
          className="bg-black text-white px-7 py-2"
          onClick={handleOpenModel}
        >
          <i className="ri-add-fill"></i>
          <span>Thêm câu hỏi mới </span>
        </button>
      </div>
      <ModalBox
        isOpen={open}
        onClose={handleCloseModel}
        styleModalClass="w-[50vw] h-max"
      >
        <div className="py-10 px-5">
          <h2 className="text-3xl font-medium">Thêm câu hỏi thường gặp</h2>
          <div className="py-3">
            <Input
              type="text"
              labelName="Câu hỏi ?"
              placeholder="ghi câu hỏi tại đây"
            />
            <Input
              type="text-area"
              labelName="Câu trả lời"
              placeholder="ghi câu trả lời tại đây"
            />
          </div>
          <div>
            <div className="flex justify-end items-center gap-5">
              <button
                onClick={handleAdd}
                className="cursor-pointer bg-black text-white px-5 py-2 rounded-sm font-medium"
              >
                Thêm sản phẩm
              </button>
              <button
                onClick={handleCloseModel}
                className="font-medium cursor-pointer"
              >
                Trở về{" "}
              </button>
            </div>
          </div>
        </div>
      </ModalBox>
    </>
  );
};
export default AddFAQuestion;
