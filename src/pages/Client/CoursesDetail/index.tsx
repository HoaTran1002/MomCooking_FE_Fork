import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import view1 from "@/assets/images/Views/a2.jpg";
import { Link } from "react-router-dom";
// import SliderCarousel from "@/components/SliderCarousel";
import { IProductsCourse } from "@/interface/courses.interface";
// import ProductDetail from "./ProductDetail";
import { product } from "@/data/product";
import Pagetitle from "@/components/PageTitle";
import ScrollAnimate from "@/components/ScrollAnimate";
import ModalBox from "@/components/ModalBox";
const CoursesDetail = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpenDetailProduct = (): void => {
    setOpen(true);
  };
  const handleCloseDetailProduct = (): void => {
    setOpen(false);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <div>
        <Pagetitle title="Chi tiết khóa học" />
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>viet nam traditional food</span>
            <span className="text-base px-24">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              fugit aliquid est, voluptate atque at reiciendis amet delectus
              tenetur, perferendis repellat voluptatum consectetur ut
              exercitationem in? Nobis enim corporis quas!
            </span>
          </div>
          <div
            style={{
              backgroundImage: `url(${view1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="container">
          <div className="bg-[#f1f1f1] py-16 ">
            <div className="flex gap-8 items-center justify-center py-8">
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-medium">{product?.length}</span>
                <span className="text-lg">products</span>
              </div>
              <div className="w-[1px] block h-[100px] bg-black"></div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-medium">Mon - Fri: <span className="text-red-600 font-medium">100$</span></span>
                <span className="text-2xl font-medium">Sat - Sun: <span className="text-red-600 font-medium">130$</span></span>
              </div>
            </div>
            <div className="flex flex-col gap-12 items-center justify-center max-sm:px-5 max-sm:h-full">
              {product.map((r: IProductsCourse, index: number) => (
                <ScrollAnimate key={index}>
                  <div className="max-w-[890px] w-full h-[300px] max-sm:h-full flex max-sm:flex-col">
                    <div className="w-2/4 h-full max-sm:w-full">
                      <img
                        src={r.productImage}
                        className="w-full object-cover h-full"
                        alt=""
                      />
                    </div>
                    <div className="w-2/4 max-sm:w-full h-full bg-[#f7f7f7] py-3 px-7 flex flex-col items-center justify-center gap-2">
                      <h2 className="font-normal text-3xl max-sm:text-center">
                        {r.productName}
                      </h2>
                      <span className="text-center font-light">
                        {r.description}
                      </span>
                      <div
                        onClick={handleOpenDetailProduct}
                        className="p-3 cursor-pointer bg-black mt-5 text-white text-sm uppercase"
                      >
                        Watch
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center py-3">
            <Link
              to={"/lien-he"}
              className="py-2 px-6 bg-black min-w-max text-white font-medium rounded-lg"
            >
              <i className="ri-calendar-line mr-2"></i>
              Liên hệ với chúng tôi để đặt lịch ngay
            </Link>
          </div>
          <ModalBox
            styleModalClass="w-[600px]"
            isOpen={open}
            onClose={handleCloseDetailProduct}
          >
            <div className="px-2 py-1 mt-12 flex flex-col gap-3">
              <img
                src={
                  "https://media.istockphoto.com/id/1466673520/photo/no-baked-blueberry-layered-cheesecake.webp?b=1&s=170667a&w=0&k=20&c=Fg6B34n3LnO-LELKOELk67D_Z812ylDdm1ev-wmxz3Q="
                }
                className="w-full h-80 object-cover rounded"
                alt=""
              />
              <h3 className="text-2xl text-center font-medium">
                Bánh kem việt quất phô mai
              </h3>
            </div>
          </ModalBox>
        </div>
      </div>
    </LayoutMain>
  );
};
export default CoursesDetail;
