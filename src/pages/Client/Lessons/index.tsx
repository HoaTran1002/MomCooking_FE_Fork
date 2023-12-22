import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
// import SliderCarousel from "@/components/SliderCarousel";
// import { ICoursesCardReview } from "@/interface/courses.interface";
// import CoursesItemCard from "../Courses/CoursesItemCard";
// import { courses } from "@/data/courses";
import { Link } from "react-router-dom";
import view1 from "@/assets/images/Views/z4689941072190_e70f3ef9e5b8497daa343c8635bba872.jpg";
import Pagetitle from "@/components/PageTitle";
import ScrollAnimate from "@/components/ScrollAnimate";
import View1 from "@/assets/images/Views/z4689941080887_08a34fc53c3e1611e70000aecc659bbd.jpg"
import View2 from "@/assets/images/Views/z4689941106305_ea41e5bc7ec36a69c9327f18fdca6bb2.jpg"
import { useTranslation } from "react-i18next";
interface ILesson {
  name: string,
  imgUrl: string,
  path: string
}
const Lessons = (): JSX.Element => {
  const { t } = useTranslation("lesson")
  const listLesson: ILesson[] = [
    { name: t("freeLesson"), path: "#", imgUrl: View1 },
    { name: t("longTermLesson"), path: "#", imgUrl: View2 },
    { name: t("privateLesson"), path: "#", imgUrl: View1 },
  ]
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <>
        <Pagetitle title="Bài học" />
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>{t("lessons")}</span>
            <span className="text-base px-24">
              {t('desLesson')}
            </span>
          </div>
          <div
            style={{
              backgroundImage: `url(${view1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="bg-[#f1f1f1] py-16 px-3">
          <div className="flex flex-col gap-12 items-center justify-center ">
            {listLesson.map((_lesson: ILesson, index: number) => (
              index % 2 === 0 ? (
                <ScrollAnimate>
                  <div
                    key={index}
                    className="max-w-[890px] w-full h-[300px] max-sm:h-full flex max-sm:flex-col"
                  >
                    <div className="w-2/4 h-full max-sm:w-full">
                      <img
                        src={_lesson.imgUrl}
                        className="w-full object-cover h-full"
                        alt=""
                      />
                    </div>
                    <div className="w-2/4 max-sm:w-full h-full bg-[#f7f7f7] py-3 px-7 flex flex-col items-center justify-center gap-2">
                      <h2 className="font-normal text-3xl text-center leading-10">
                        { _lesson.name }
                      </h2>
                      {/* <span className="text-center font-light">{r.subTitle}</span> */}
                      <Link
                        to={_lesson.path}
                        className="p-3 bg-black mt-5 text-white text-sm uppercase"
                      >
                        Watch Now
                      </Link>
                    </div>
                  </div>
                </ScrollAnimate>
              ) : (
                <ScrollAnimate>
                  <div
                    key={index}
                    className="max-w-[890px] w-full h-[300px] max-sm:h-full flex max-sm:flex-col"
                  >
                    <div className="w-2/4 max-sm:w-full h-full bg-[#f7f7f7] py-3 px-7 flex flex-col items-center justify-center gap-2">
                      <h2 className="font-normal text-3xl text-center leading-10">
                        { _lesson.name }
                      </h2>
                      {/* <span className="text-center font-light">{r.subTitle}</span> */}
                      <Link
                        to={_lesson.path}
                        className="p-3 bg-black mt-5 text-white text-sm uppercase"
                      >
                        Watch Now
                      </Link>
                    </div>
                    <div className="w-2/4 h-full max-sm:w-full">
                      <img
                        src={_lesson.imgUrl}
                        className="w-full object-cover h-full"
                        alt=""
                      />
                    </div>

                  </div>
                </ScrollAnimate>


              )
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
export default Lessons;
