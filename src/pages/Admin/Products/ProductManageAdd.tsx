import Divider from "@/components/Divider";
import Input from "@/components/Input";
import Select, { IOption } from "@/components/Select";
import UploadImage from "@/components/UploadImage";
// import UploadManyImages from '@/components/UploadManyImages'
import LayoutAdmin from "@/components/layouts/Admin";
import { courses } from "@/data/courses";
import { ICoursesCardReview, ILevel } from "@/interface/courses.interface";
import React from "react";
const ProductManageAdd = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<IOption | null>(
    null
  );
  if (selectedOption) {
    console.log("fix bug declear but never use");
  }
  const levels: ILevel[] = [
    { name: "Cơ Bản" },
    { name: "Trung bình" },
    { name: "Cao cấp" },
  ];
  const level: IOption[] = levels?.map((r: ILevel, index: number) => ({
    name: r.name,
    value: index.toString(),
  }));
  const coursesList: IOption[] = courses?.map(
    (r: ICoursesCardReview, index: number) => ({
      name: r.title,
      value: index.toString(),
    })
  );
  return (
    <LayoutAdmin>
      <div className="bg-white rounded-lg p-5">
        {/* <FloatingActionButtons /> */}
        <h2 className="text-3xl font-bold">Thêm Sản phẩm</h2>
        <Divider />
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <h3 className="text-3xl font-medium pb-3">Hình nền của khóa học</h3>
            <UploadImage />
          </div>
          <div className="col-span-8">
            <h2 className="text-3xl font-medium">Thông tin về khóa học</h2>
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div>
                <Select
                  lableName="Mức độ"
                  onSelect={(selectedOption) =>
                    setSelectedOption(selectedOption)
                  }
                  options={level}
                />
                <Select
                  lableName="Khóa học"
                  onSelect={(selectedOption) =>
                    setSelectedOption(selectedOption)
                  }
                  options={coursesList}
                />
              </div>
              <div>
                <Input
                  labelName="Tên sản phẩm"
                  placeholder="VD: Khóa học làm bánh kem"
                  // onChange={(e) => setCourse((pre) => ({ ...pre, title: e.target.value }))}
                />
                <Input
                  type="text-area"
                  labelName="Chú thích sản phẩm"
                  // onChange={(e) => setCourse((pre) => ({ ...pre, description: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-3 px-5 rounded">
                <i className="ri-add-line"></i>
                <span className="ml-2 text-lg">Thêm Sản phẩm mới</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};
export default ProductManageAdd;
