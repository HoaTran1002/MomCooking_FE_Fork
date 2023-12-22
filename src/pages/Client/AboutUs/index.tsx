import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import views1 from "@/assets/images/Views/z4689941072190_e70f3ef9e5b8497daa343c8635bba872.jpg";
// import "./style.css";
// import { achievements, steps } from "@/data/aboutus";
import View2 from "@/assets/images/Views/z4689941080887_08a34fc53c3e1611e70000aecc659bbd.jpg"
import View3 from "@/assets/images/Views/image_6.png"
// import { IAboutAchievement, IAboutStep } from "@/interface/aboutus.interface";
import Cheft1 from "@/assets/images/Chef/jason-briscoe-7MAjXGUmaPw-unsplash.jpg"
import Cheft2 from "@/assets/images/Chef/jeff-siepman-z-IxdGQ7lPU-unsplash.jpg"
import Cheft3 from "@/assets/images/Chef/louis-hansel-v3OlBE6-fhU-unsplash.jpg"
import Cheft4 from "@/assets/images/Chef/mario-ciF10nRBW7o-unsplash.jpg"
import Cheft5 from "@/assets/images/Chef/vitor-monthay-673jcnrm8bM-unsplash.jpg"
import Pagetitle from "@/components/PageTitle";
import SubFooter from "@/components/layouts/Client/Footer/subFooter";
interface ICheft {
  name:string,
  img:string
}
const AboutUs = (): JSX.Element => {
  const listCheft:ICheft[] = [
    {name:"Nguyễn Văn A",img:Cheft1},
    {name:"Nguyễn Văn B",img:Cheft2},
    {name:"Nguyễn Văn C",img:Cheft3},
    {name:"Nguyễn Văn D",img:Cheft4},
    {name:"Nguyễn Văn E",img:Cheft5},
  ]
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <>
        <Pagetitle title="Về chúng tôi" />
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>About us</span>
            <span className="text-base px-24">we are mom cooking</span>
          </div>
          <div
            style={{
              backgroundImage: `url(${views1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="py-10 max-sm:px-[50px] sm:px-[200px]">
          <div className="pb-8">
            <h2 className="uppercase text-3xl font-semibold pb-5 ">Câu chuyện của chúng tôi </h2>
            <p className="leading-7 pb-9 px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum eveniet nobis ab ea, ex, eligendi minima sequi doloribus, debitis temporibus quo at necessitatibus voluptates quia vitae! Dolores, tempora amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam doloremque impedit fugiat minima laborum explicabo asperiores, vitae rem enim necessitatibus quo ut cum placeat accusantium magnam deleniti vero dolore!</p>
            <p className="leading-7 pb-9 px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum eveniet nobis ab ea, ex, eligendi minima sequi doloribus, debitis temporibus quo at necessitatibus voluptates quia vitae! Dolores, tempora amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam doloremque impedit fugiat minima laborum explicabo asperiores, vitae rem enim necessitatibus quo ut cum placeat accusantium magnam deleniti vero dolore!</p>
          </div>
          <div className="pb-[120px]">
            <div className="h-[400px] w-full bg-cover bg-no-repeat bg-center rounded-sm" style={{ backgroundImage: `url(${View2})` }}  >

            </div>
          </div>
          <div className="pb-[150px] sm:grid sm:grid-cols-12  gap-12 w-full">
            <div className="sm:col-span-6 relative h-[300px] flex items-center flex-col justify-center ">
              <span className="absolute top-2 left-2 ">
                <i className="ri-double-quotes-l text-6xl"></i>
              </span>
              <div className="flex flex-col gap-4">
                <p className=" text-4xl font-normal italic">
                  Không sợ việc gì khó <br />
                  Chỉ sợ lòng không bền
                </p>
                <span className="font-medium text-gray-700">
                  NGUYÊN VĂN A, BẾP TRƯỞNG
                </span>

              </div>
              <span className="absolute bottom-2 right-2 ">
                <i className="ri-double-quotes-r text-6xl"></i>
              </span>
            </div>
            <div className="sm:col-span-6 ">
              <div className="h-[300px] w-full bg-cover bg-no-repeat bg-center rounded-sm" style={{ backgroundImage: `url(${View3})` }}  >

              </div>
            </div>

          </div>
          <div className="pb-8 grid sm:grid-cols-12 gap-12">
            <div className="sm:col-span-6">
              <div style={{columnCount:2,columnGap:"20px"}}>
                {
                  listCheft.map((item:ICheft,index:number)=>(
                    <div key={index} className="w-full mb-5 rounded-lg overflow-hidden">
                      <img src={item.img} alt={item.name}  />

                    </div>
                  ))
                }
              </div>
            </div>
            <div className="sm:col-span-6">
              <h2 className="uppercase text-3xl font-semibold pb-5">Đội ngũ của chúng tôi </h2>
              <p className="leading-7 pb-9 px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum eveniet nobis ab ea, ex, eligendi minima sequi doloribus, debitis temporibus quo at necessitatibus voluptates quia vitae! Dolores, tempora amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam doloremque impedit fugiat minima laborum explicabo asperiores, vitae rem enim necessitatibus quo ut cum placeat accusantium magnam deleniti vero dolore!</p>
              <p className="leading-7 pb-9 px-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laborum eveniet nobis ab ea, ex, eligendi minima sequi doloribus, debitis temporibus quo at necessitatibus voluptates quia vitae! Dolores, tempora amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam doloremque impedit fugiat minima laborum explicabo asperiores, vitae rem enim necessitatibus quo ut cum placeat accusantium magnam deleniti vero dolore!</p>
            </div>
          </div>
        </div>
          <SubFooter/>
      </>
    </LayoutMain>
  );
};
export default AboutUs;
