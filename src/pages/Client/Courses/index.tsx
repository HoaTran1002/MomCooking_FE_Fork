import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
// import SliderCarousel from "@/components/SliderCarousel";
// import CoursesItemCard from "./CoursesItemCard";
// import FAQuestion, { IPropsFAQuestion } from "@/components/F_A_Q";
import { ICoursesCardReview } from "@/interface/courses.interface";
// import Divider from "@/components/Divider";
import { courses } from "@/data/courses";
import Pagetitle from "@/components/PageTitle";
// import { questions } from "@/data/faquestion";
import view1 from "@/assets/images/Views/z4689941072190_e70f3ef9e5b8497daa343c8635bba872.jpg";
import { Link } from "react-router-dom";
import ScrollAnimate from "@/components/ScrollAnimate";
import { useTranslation } from "react-i18next";
const Courses = (): JSX.Element => {
  const {t} = useTranslation("courses")
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <>
        <Pagetitle title="Khóa học" />
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>{t('courses')}</span>
            <span className="text-base px-24">
              {t('sloganCourses')}
            </span>
          </div>
          <div
            style={{
              backgroundImage: `url(${view1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="bg-[#f1f1f1] py-16 ">
          <div className="flex flex-col gap-12 items-center justify-center max-sm:px-5 max-sm:h-full">
            {courses.map((r: ICoursesCardReview, index: number) => (
              // <CoursesItemCard
              //   key={index}
              //   imgUrl={r.imgUrl}
              //   name={r.title}
              //   description={r.title}
              //   link={r.path}
              // />
              <ScrollAnimate>
                <div
                  key={index}
                  className="max-w-[890px] w-full h-[300px] max-sm:h-full flex max-sm:flex-col"
                >
                  <div className="w-2/4 h-full max-sm:w-full">
                    <img
                      src={r.imgUrl}
                      className="w-full object-cover h-full"
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 max-sm:w-full h-full bg-[#f7f7f7] py-3 px-7 flex flex-col items-center justify-center gap-2">
                    <h2 className="font-normal text-3xl max-sm:text-center">
                      {r.title}
                    </h2>
                    <span className="text-center font-light">{r.subTitle}</span>
                    <Link
                      to={r.path}
                      className="p-3 bg-black mt-5 text-white text-sm uppercase"
                    >
                      Watch Now
                    </Link>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* <Divider />
          <div>
            <h2 className="text-xl font-medium px-3 py-4">
              <i className="ri-arrow-right-s-fill"></i>
              Các điều luật
            </h2>
            <div>
              <ul className="ml-4 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <i className="ri-circle-line text-xs"></i>
                  <span className="text-xl">Luật 1</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-circle-line text-xs"></i>
                  <span className="text-xl">Luật 2</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-circle-line text-xs"></i>
                  <span className="text-xl">Luật 3</span>
                </li>
              </ul>
            </div>
          </div>
          <Divider />
          <div>
            <h2 className="text-xl font-medium px-3 py-4">
              <i className="ri-questionnaire-line mr-2"></i>
              FAQ
            </h2>
            <div className="flex flex-col gap-4">
              {questions.map((r: IPropsFAQuestion, index: number) => (
                <FAQuestion
                  answer={r.answer}
                  question={r.question}
                  key={index}
                />
              ))}
            </div>
          </div> */}
        </div>
      </>
    </LayoutMain>
  );
};
export default Courses;
