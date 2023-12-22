// import FloatingActionButtons from '@/components/CoursesManage/FloatAction'
import Divider from "@/components/Divider";
import Input from "@/components/Input";
import UploadImage from "@/components/UploadImage";
import UploadManyImages from "@/components/UploadManyImages";
import LayoutAdmin from "@/components/layouts/Admin";
import useFetch from "@/hooks/useFetch.hook";
import { ICourse } from "@/interface/courses.interface";
import { createCourse } from "@/app/apis/courses.api";
import React from "react";
import { useAlertMessage } from "@/contexts/AlertContext";
import { useNavigate } from "react-router-dom";
import { CoursesContext } from "@/hooks/useContext.hook";
const initialCourse: ICourse = {
  description: "",
  title: "",
  price: "",
};
const CoursesManageAdd = (): JSX.Element => {
  const [course, setCourse] = React.useState<ICourse>(initialCourse);
  const [addCousre, callAddCourse] = useFetch();
  if (addCousre) {
    console.log("fig bug declear but not use");
  }
  const {} = React.useContext(CoursesContext);
  const { addAlert } = useAlertMessage();
  const navigate = useNavigate();
  const handelsubmit = (): void => {
    callAddCourse(async () => {
      try {
        await createCourse(course);
        await addAlert({
          title: "Thành công",
          message: "Thêm khóa học thành công thành công",
          type: "success",
        });
        await navigate("/admin/CoursesManage");
      } catch (error) {
        addAlert({
          title: "Thêm khóa học thất bại ",
          message: `Đã có lỗi trong khi thêm, chi tiết: ${String(error)}`,
          type: "error",
          duration: 5000,
        });
      }
    });
  };
  return (
    <LayoutAdmin>
      <div className="bg-white rounded-lg p-5">
        {/* <FloatingActionButtons /> */}
        <h2 className="text-3xl font-bold">Thêm khóa học</h2>
        <Divider />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <h3 className="text-xl font-medium py-2">Hình nền của khóa học</h3>
            <UploadImage />
          </div>
          <div className="col-span-9">
            <h3 className="text-xl font-medium py-2">
              Các hình ảnh liên quan khác
            </h3>
            <UploadManyImages />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-medium">Thông tin về khóa học</h2>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <div>
              <Input
                labelName="Tên khóa học"
                placeholder="VD: Khóa học làm bánh kem"
                onChange={(e) =>
                  setCourse((pre) => ({ ...pre, title: e.target.value }))
                }
                isError={true}
                errorMessage="lỗi rồi "
              />
              <Input
                type="text-area"
                labelName="Mô tả khóa học"
                onChange={(e) =>
                  setCourse((pre) => ({ ...pre, description: e.target.value }))
                }
              />
            </div>
            <div>
              <Input
                labelName="Giá khóa học"
                placeholder="$20"
                onChange={(e) =>
                  setCourse((pre) => ({ ...pre, price: e.target.value }))
                }
              />
              <Input
                labelName="Giá khóa học sau khi giảm giá"
                placeholder="$20"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-3 px-5 rounded"
            onClick={handelsubmit}
          >
            <i className="ri-add-line"></i>
            <span className="ml-2 text-lg">Thêm khóa học mới</span>
          </button>
        </div>
      </div>
    </LayoutAdmin>
  );
};
export default CoursesManageAdd;
