// import * as React from "react";

// import DrawerButton from "./Drawer";
import view from "@/assets/images/Views/z4689941080887_08a34fc53c3e1611e70000aecc659bbd.jpg";
import { ICourse } from "@/interface/courses.interface";
// import ModalMessage from "../ModalMessage";
interface IProps {
  course?: ICourse;
  onDelete?: () => void;
  onEdit?: () => void;
}

export default function CardData({
  course,
  onDelete,
  onEdit,
}: IProps): JSX.Element {
  return (
    <>
      <div className="bg-white rounded-lg p-5 w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[150px] h-[150px] rounded-lg overflow-hidden flex-none">
              {/* <img src={course.image} alt={course.title} className="w-full h-full object-cover" /> */}
              <img
                src={view}
                alt={course?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-5 flex gap-3 flex-col justify-between">
              <h2 className="text-3xl font-medium">{course?.title}</h2>
              <p className="text-base text-[#666666]">{course?.description}</p>
              <span className="text-[#8a3fd9] font-medium text-xl">
                $ {course?.price}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-none">
            <button
              className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-2 px-5 rounded"
              onClick={onEdit}
            >
              <i className="ri-edit-2-line"></i>
              <span className="ml-2">Chỉnh sửa</span>
            </button>
            <button
              className="bg-gradient-to-br from-[#ff9f93] to-[#ff6854] text-white py-2 px-5 rounded"
              onClick={onDelete}
            >
              <i className="ri-delete-bin-5-line"></i>
              <span className="ml-2">Xóa</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
