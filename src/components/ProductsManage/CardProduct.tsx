import { IProductsCourse } from "@/interface/courses.interface";
// import React from 'react'
interface IPropsCardProduct {
  onView: () => void;
  product: IProductsCourse;
}
const CardProduct = ({ onView, product }: IPropsCardProduct): JSX.Element => {
  return (
    <div className="col-span-3 shadow-sm rounded-lg bg-white overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${product.productImage})`,
        }}
        className="object-cover w-full h-[200px] bg-no-repeat "
      ></div>
      <div className="p-4">
        <h3 className="text-base text-[#666666] font-medium">
          Khóa học nấu ăn trẻ em
        </h3>
        <h2 className="text-xl font-medium py-2">{product.productName}</h2>
        <div>
          <button
            onClick={onView}
            className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-1 px-5 rounded"
          >
            <i className="ri-eye-line"></i>
            <span className="ml-2 text-base">Xem chi tiết</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
