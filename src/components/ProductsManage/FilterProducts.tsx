import React from "react";
import Input from "@/components/Input";
import Select, { IOption } from "@/components/Select";
// import { courses } from '@/data/courses'
import { ILevel } from "@/interface/courses.interface";
const FilterProducts = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = React.useState<IOption | null>(
    null
  );
  if (selectedOption) {
    console.log("declare bu nerver use");
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

  return (
    <div className="bg-white rounded-md w-full p-4">
      <h2 className="text-2xl font-medium text-[#525252]">Bộ lọc tìm kiếm</h2>
      <div className="flex gap-3 py-3 w-full">
        <div>
          <Input
            className="w-[400px] "
            labelName="Tên khóa học"
            placeholder="vd: Bánh mỳ"
          />
        </div>
        <div>
          <Select
            lableName="Mức độ"
            onSelect={(selectedOption) => setSelectedOption(selectedOption)}
            options={level}
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <button className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-2 px-5 rounded">
          <i className="ri-search-2-line"></i>
          <span className="ml-2">Tìm kiếm</span>
        </button>
        <button className="bg-gradient-to-br from-[#ff9f93] to-[#ff6854] text-white py-2 px-5 rounded">
          <span>Xóa</span>
        </button>
      </div>
    </div>
  );
};
export default FilterProducts;
