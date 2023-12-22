import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import FAQuestion, { IPropsFAQuestion } from "@/components/F_A_Q";
import Pagetitle from "@/components/PageTitle";
import { questions } from "@/data/faquestion";
import faqimage from "@/assets/images/Views/z4689941094081_17a75bcd7d0a6442ef4e7c240230ff2d.jpg"
import { useTranslation } from "react-i18next";
const FAQPage = (): JSX.Element => {
  const {t} = useTranslation("faq")
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <div>
        <Pagetitle title="FAQ" />
        <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
          <span >
            {t('titleFaq')}
          </span>
          <span className="text-base px-24">
           {t('sloganFaq')}
          </span>
        </div>
        <div style={{
          backgroundImage: `url(${faqimage})`
        }}
          className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
        >
        </div>
        <div className="bg-[#f7f7f7] py-16 px-10 ">
          <div className="flex flex-col gap-8 sm:px-[200px] max-sm:px-[100px]">
            {questions.map((r: IPropsFAQuestion, index: number) => (
              <FAQuestion answer={r.answer} question={r.question} key={index} />
            ))}
          </div>

        </div>
      </div>
    </LayoutMain>
  );
};
export default FAQPage;
