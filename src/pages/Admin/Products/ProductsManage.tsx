import React from "react";
import LayoutAdmin from "@/components/layouts/Admin";
import ModalBox from "@/components/ModalBox";
import Pagetitle from "@/components/PageTitle";
import { product } from "@/data/product";
import { courses } from "@/data/courses";
import {
  ICoursesCardReview,
  ILevel,
  IProductsCourse,
} from "@/interface/courses.interface";
import Input from "@/components/Input";
import ModalMessage from "@/components/ModalMessage";
import { useAlertMessage } from "@/contexts/AlertContext";
import FilterProducts from "@/components/ProductsManage/FilterProducts";
import CardProduct from "@/components/ProductsManage/CardProduct";
import Select, { IOption } from "@/components/Select";
import UploadImage from "@/components/UploadImage";
const ProductsManage = (): JSX.Element => {
  const [open, setIsOpen] = React.useState<boolean>(false);
  const [isSave, setIsSave] = React.useState<boolean>(true);
  const [isShowMessage, setIsShowMessage] = React.useState<boolean>(false);
  const { addAlert } = useAlertMessage();
  const [productCurrent, setProductCurrent] = React.useState<IProductsCourse>({
    description: "",
    productImage: "",
    productName: "",
  });
  const [selectedOption, setSelectedOption] = React.useState<IOption | null>(
    null
  );
  const levels: ILevel[] = [
    { name: "Cơ Bản" },
    { name: "Trung bình" },
    { name: "Cao cấp" },
  ];
  if (productCurrent || selectedOption) {
    console.log("declared but never use");
  }
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
  const handleCloseModal = (): void | JSX.Element => {
    if (isSave) {
      setIsShowMessage(false);
      setIsOpen(false);
    } else {
      setIsShowMessage(true);
    }
  };
  const handleSubmitProduct = (): void => {
    setIsSave(true);
    addAlert({
      message: "Lưu thành công",
      title: "Thành công",
      type: "success",
    });
  };
  const showProductDetail = (item: IProductsCourse): void => {
    setIsOpen(true);
    setIsSave(false);
    setProductCurrent(item);
  };
  return (
    <LayoutAdmin>
      <>
        <Pagetitle title="Quản lý sản phẩm" />
        <FilterProducts />
        <div className="grid-cols-12 grid gap-3 mt-4">
          {product.map((r: IProductsCourse, index: number) => (
            <CardProduct
              key={index}
              onView={() => showProductDetail(r)}
              product={r}
            />
          ))}
        </div>
        <ModalBox isOpen={open} onClose={handleCloseModal}>
          <div className="grid grid-cols-12 gap-5 p-5 mt-6">
            <div className="col-span-4">
              <h3 className="text-3xl font-medium pb-3">
                Hình nền của khóa học
              </h3>
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
                <button
                  className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-3 px-5 rounded"
                  onClick={handleSubmitProduct}
                >
                  <i className="ri-edit-2-line"></i>
                  <span className="ml-2 text-lg">
                    Chỉnh sửa thông tin sản phẩm
                  </span>
                </button>
              </div>
            </div>
          </div>
        </ModalBox>
        {isShowMessage && (
          <ModalMessage
            content="Bạn đang chỉnh sửa thông tin, bạn có muốn thoát ? "
            isOk={() => {
              setIsOpen(false);
              setIsShowMessage(false);
            }}
            isClose={() => setIsShowMessage(false)}
            title="Thông báo "
          />
        )}
      </>
    </LayoutAdmin>
  );
};
export default ProductsManage;
