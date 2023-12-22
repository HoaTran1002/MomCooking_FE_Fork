import AddFAQuestion from "@/components/FAQManage/AddFAQuestion";
import { IPropsFAQuestion } from "@/components/F_A_Q";
// import Input from '@/components/Input'
import ModalMessage from "@/components/ModalMessage";
import Pagetitle from "@/components/PageTitle";
import Table, { ColumnsProps } from "@/components/Table";
import LayoutAdmin from "@/components/layouts/Admin";
import { questions } from "@/data/faquestion";
import React from "react";
const FAQManage = (): JSX.Element => {
  const [isShowMessage, setIsShowMessage] = React.useState<boolean>(false);
  const headerColumns: ColumnsProps[] = [
    {
      field: "id",
      headerName: "STT",
    },
    {
      field: "question",
      headerName: "Câu hỏi",
    },
    {
      field: "answer",
      headerName: "Câu trả lời",
    },
    {
      field: "actions",
      type: "actions",
      getActions: () => [
        <div key="delete">
          <button className="text-black" onClick={() => setIsShowMessage(true)}>
            Xóa
          </button>
        </div>,
        <button key="edit" className="text-black">
          Sửa
        </button>,
      ],
    },
  ];
  const listFAQ = questions?.map((r: IPropsFAQuestion, index: number) => ({
    id: index + 1,
    question: r.question,
    answer: r.answer,
  }));
  return (
    <>
      <LayoutAdmin>
        <>
          <Pagetitle title="Quản lý câu hỏi thường gặp" />
          <h1 className="text-3xl font-medium py-4">
            Quản lý câu hỏi thường gặp
          </h1>
          <AddFAQuestion />
          <div>
            <Table columns={headerColumns} rows={listFAQ} />
          </div>
          {isShowMessage && (
            <ModalMessage
              content="Bạn muốn xóa câu hỏi này ? "
              isOk={() => {
                setIsShowMessage(false);
              }}
              isClose={() => setIsShowMessage(false)}
              title="Thông báo "
            />
          )}
        </>
      </LayoutAdmin>
    </>
  );
};
export default FAQManage;
