import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import "./style.css";
import slider_home_page_1 from "@/assets/images/Slider/bg-slider-home-page.png";
import slider_home_page_2 from "@/assets/images/Slider/bg-slider-home-page-1.png";
import video_pasta from "@/assets/video/pasta_tol.mp4";
import video_slice from "@/assets/video/slice_chelly.mp4";
import ViewAround from "@/assets/images/Views/a1.jpg";
import dot from "@/assets/images/dot.png";
import ViewAround1 from "@/assets/images/Views/views2.png";
import ViewAround2 from "@/assets/images/Views/z4689941080887_08a34fc53c3e1611e70000aecc659bbd.jpg";
import ViewAround4 from "@/assets/images/Views/z4689941094081_17a75bcd7d0a6442ef4e7c240230ff2d.jpg";
import ViewAround3 from "@/assets/images/Views/views3.png";
import { Link } from "react-router-dom";
import SliderCarousel from "@/components/SliderCarousel";
import {
  ICoursesCardReview,
  IProductsCourse,
} from "@/interface/courses.interface";
import { IMoments } from "@/interface/moments.interface";
import { courses } from "@/data/courses";
import { moments } from "@/data/moments";
import Pagetitle from "@/components/PageTitle";
// import { ResponsiveObject } from "react-slick";
// import Input from "@/components/Input";
import { product } from "@/data/product";
import ScrollAnimate from "@/components/ScrollAnimate";
import { useTranslation } from "react-i18next";
import SubFooter from "@/components/layouts/Client/Footer/subFooter";
// import LocalStorage from "@/utils/localStorage";
const Home = (): JSX.Element => {
  const { t } = useTranslation("home");
  // const responsiveHomeSlider: ResponsiveObject[] = [
  //   {
  //     breakpoint: 1600,
  //     settings: {
  //       slidesToScroll: 1,
  //       slidesToShow: 4,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToScroll: 1,
  //       slidesToShow: 2,
  //     },
  //   },
  // ];
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <>
        <Pagetitle title="Trang chủ" />
        <div className="w-screen h-screen">
          <SliderCarousel
            fade={true}
            className="w-full h-full"
            autoplaySpeed={3000}
            autoplay={true}
            dots={false}
          >
            <div className="">
              <img
                loading="lazy"
                src={slider_home_page_2}
                alt=""
                className=" h-screen w-screen object-cover"
              />
            </div>
            <div className="">
              <img
                loading="lazy"
                src={slider_home_page_1}
                alt=""
                className=" h-screen w-screen object-cover"
              />
            </div>
          </SliderCarousel>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-screen tracking-widest font-normal bg-slate-950/30 flex items-center z-10 text-white uppercase max-sm:text-2xl max-sm:font-medium text-center sm:justify-center sm:text-3xl sm:font-normal">
            {t("sloganBanner")}
            <div className="absolute w-full bottom-8 left-0 right-0 flex items-center justify-center">
              <a
                href="#the_first"
                className="animate-bounce absolute text-white cursor-pointer"
              >
                <i className="ri-arrow-down-double-line text-5xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          id="the_first"
          className="sm:grid sm:grid-cols-5 max-sm:grid-cols-2 max-sm:grid  sm:h-[370px] max-sm:h-auto bg-[#f7f7f7]"
        >
          <div className="max-sm:h-[350px] sm:col-span-1 max-sm:col-span-2 ">
            <div
              style={{
                backgroundImage: `url(${ViewAround})`,
                backgroundOrigin: "inherit",
              }}
              className="sm:w-full max-sm:w-full h-[370px]   max-sm:h-[350px] bg-cover relative flex items-center justify-center"
            >
              <div className="w-3/5 flex items-center justify-center aspect-square  rounded-full border-white border-solid border-2 ">
                <ScrollAnimate>
                  <span className="text-white text-xl cursor-default font-medium uppercase tracking-widest ">
                    My Shop
                  </span>
                </ScrollAnimate>
              </div>
            </div>
          </div>
          <div className="max-sm:h-[350px] sm:col-span-1 max-sm:col-span-1">
            <div className="sm:w-full max-sm:w-full h-[370px] max-sm:h-[350px] bg-zinc-900 flex items-center justify-center">
              <ScrollAnimate>
                <Link
                  to={"/khoa-hoc"}
                  className="text-white relative uppercase tracking-widest text-xl font-medium before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-200 before:-bottom-1 before:absolute cursor-pointer"
                >
                  Courses
                </Link>
              </ScrollAnimate>
            </div>
          </div>
          <div className="max-sm:h-[350px] sm:col-span-1 max-sm:col-span-1 ">
            <SliderCarousel
              autoplay={true}
              autoplaySpeed={1500}
              arrows={false}
              className="sm:h-[370px] max-sm:h-[350px] "
            >
              {courses.map((r: ICoursesCardReview, index: number) => (
                <div key={index} className="overflow-hidden relative">
                  <div className="absolute bg-slate-950/25 w-full h-full"></div>
                  <img
                    loading="lazy"
                    src={r.imgUrl}
                    alt=""
                    className="h-[370px] max-sm:h-[350px] w-full object-cover"
                  />
                  <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
                    <Link
                      to={"/khoa-hoc/1"}
                      className="text-white inline-block uppercase tracking-widest text-center text-xl font-medium"
                    >
                      {r.title}
                    </Link>
                  </div>
                </div>
              ))}
            </SliderCarousel>
          </div>
          <div className="max-sm:h-[350px] sm:col-span-2 max-sm:col-span-2 ">
            <div className="w-full h-[370px] max-sm:h-[350px]">
              <video
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
                className="w-full h-full object-center object-cover"
              >
                <source src={video_pasta} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5  max-sm:grid-cols-2 max-sm:grid ">
          <div className="col-span-2 max-sm:h-[350px] max-sm:col-span-2">
            <div
              style={{ backgroundImage: `url(${ViewAround1})` }}
              className="  sm:max-h-96 sm:h-[370px] max-sm:h-[350px] bg-cover bg-no-repeat bg-center bg relative flex items-center justify-center"
            ></div>
          </div>
          <div className="col-span-2 max-sm:h-[350px] max-sm:col-span-2">
            <div
              style={{ backgroundImage: `url(${ViewAround2})` }}
              className="w-full h-[370px] max-sm:h-[350px] bg-cover"
            >
              <div className="w-full h-full bg-zinc-900/80 flex items-center justify-center">
                <ScrollAnimate>
                  <Link
                    to={"/bai-hoc"}
                    className="text-white relative uppercase tracking-widest text-xl font-medium before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-200 before:-bottom-1 before:absolute cursor-pointer"
                  >
                    our{" "}
                    <span className="inline-block w-7 h-[2px] bg-white align-middle"></span>{" "}
                    lessons
                  </Link>
                </ScrollAnimate>
              </div>
            </div>
          </div>
          <div className="col-span-1 max-sm:h-[350px] max-sm:col-span-2">
            <SliderCarousel
              autoplay={true}
              autoplaySpeed={1500}
              arrows={false}
              className="h-[370px]"
            >
              {product.map((r: IProductsCourse, index: number) => (
                <div key={index} className="">
                  <Link
                    to={"#"}
                    className="block rounded-sm overflow-hidden relative "
                  >
                    <div className="absolute bg-slate-950/25 w-full h-full"></div>
                    <img
                      loading="lazy"
                      src={r.productImage}
                      alt=""
                      className="h-[370px] w-full object-cover"
                    />
                    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
                      <h2 className="text-white uppercase tracking-widest text-center text-xl font-medium">
                        {r.productName}
                      </h2>
                    </div>
                  </Link>
                </div>
              ))}
            </SliderCarousel>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-5  max-sm:grid-cols-2 max-sm:grid ">
          <div className="col-span-1 max-sm:col-span-2">
            <div className="w-full h-[370px] max-sm:h-[350px]">
              <video
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
                className="w-full h-full object-center object-cover"
              >
                <source src={video_slice} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-span-1 max-sm:col-span-2">
            <div
              style={{ backgroundImage: `url(${dot})` }}
              className="w-full h-[370px] max-sm:h-[350px] bg-cover flex items-center justify-center"
            >
              <ScrollAnimate>
                <span className="text-b;acl relative uppercase tracking-widest text-xl font-medium before:w-0 before:h-[2px] before:bg-black hover:before:w-full before:transition-all before:duration-200 before:-bottom-1 before:absolute cursor-pointer">
                  our{" "}
                  <span className="inline-block w-7 h-[3px] bg-black align-middle"></span>{" "}
                  moments
                </span>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-span-1 max-sm:col-span-2">
            <SliderCarousel
              autoplay={true}
              autoplaySpeed={1500}
              arrows={false}
              className="h-[370px]"
            >
              {moments.map((r: IMoments, index: number) => (
                <div key={index} className="">
                  <img
                    loading="lazy"
                    src={r.imageUrl}
                    alt=""
                    className="h-[370px] w-full object-cover"
                  />
                </div>
              ))}
            </SliderCarousel>
          </div>
          <div className="col-span-1 max-sm:col-span-2">
            <div className="flex flex-col bg-white items-center justify-center h-[370px] max-sm:h-[350px] gap-3">
              <ScrollAnimate>
                <div className="flex flex-col items-center justify-center gap-3">
                  <span className="scroll-animate text-black relative uppercase tracking-widest text-xl font-medium before:w-0 before:h-[2px] before:bg-black hover:before:w-full before:transition-all before:duration-200 before:-bottom-1 before:absolute cursor-pointer">
                    contact & location
                  </span>
                  <i className="ri-map-pin-2-line text-4xl"></i>
                </div>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-span-1 max-sm:col-span-2">
            <div
              style={{ backgroundImage: `url(${ViewAround3})` }}
              className="w-full h-[370px] max-sm:h-[350px] bg-cover flex items-center justify-center"
            ></div>
          </div>
        </div>
        <SubFooter />
        <div
          className="w-screen h-[600px] bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url(${ViewAround4})`,
          }}
        ></div>
      </>
    </LayoutMain>
  );
};
export default Home;
