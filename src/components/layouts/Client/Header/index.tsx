import React from "react";
import "./style.css";
import LogoImage from "@/assets/images/Logo/logo-mom-removebg-preview.png";
import { Link, useLocation } from "react-router-dom";

import SelectLanguage from "@/components/SelectLanguage";
import NavbarLeft from "@/components/NavbarLeft";
import { IPropsheader } from "../client.interface";
// import userTest from "@/assets/images/User/Usertest.png";
import { AllSettingHeader } from "@/data/layouts";

import { useScroll } from "@/contexts/ScrollContext";
import { useTranslation } from "react-i18next";
const Header = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  // const [openSetting, setOpenSetting] = React.useState<boolean>(false);
  const { scrolled } = useScroll();
  const location = useLocation();
  const { t } = useTranslation("menu");

  const handleCloseNavbar = (): void => {
    setOpen(false);
  };
  const handleOpenNavbar = (): void => {
    setOpen(true);
  };
  // const handelOpenSetting = (): void => {
  //   setOpenSetting((r) => !r);
  // };

  return (
    <div className="header z-50">
      <div className="inline-flex z-50 items-center justify-center h-full absolute top-10 left-5">
        <div
          className={` transition-all duration-300 gap-2 sm:flex ${scrolled ? "bg-white shadow-2xl" : "bg-white "
            } px-6 py-2 rounded-md`}
        >
          <Link to={"/"}>
            <img src={LogoImage} alt="" className="h-12 w-12" />
          </Link>
        </div>
      </div>
      <div className="inline-flex z-50 items-center w-max justify-center h-full  absolute top-10 left-2/4 flex-none -translate-x-2/4 max-sm:flex max-sm:justify-end max-sm:w-full">
        <div
          className={`max-sm:hidden w-max transition-all gap-8 items-center duration-300  sm:flex ${scrolled ? "bg-white shadow-2xl" : "bg-transparent"
            } px-6 py-4 rounded-md`}
        >
          {AllSettingHeader.map((r: IPropsheader, index: number) => {
            return (
              <Link
                key={index}
                to={r.path!}
                className={`font-normal text-lg ${scrolled
                    ? "text-black before:bg-black"
                    : "text-white before:bg-white"
                  } relative before:absolute before:-bottom-1 before:transition-all before:duration-300  before:w-[5px] before:h-[2px]  before:left-2/4 before:rounded-full before:-translate-x-2/4 ${location.pathname === r.path ? "before:w-full" : ""
                  } hover:before:w-full before:transition-all duration-500`}
              >
                  {t(r.name as "home" | "courses" | "lessons" | "news" | "contact" | "about_us" )}
              </Link>

            )
          })}
        </div>
        <div
          className={`sm:hidden mr-4 p-2 transition-all duration-300 ${scrolled ? "bg-white shadow-2xl rounded-md" : "bg-transparent"
            }`}
          onClick={handleOpenNavbar}
        >
          <i
            className={`ri-menu-line icons-navbar text-4xl ${scrolled ? "text-gray-600" : "text-white"
              } `}
          ></i>
        </div>
      </div>
      <div className="inline-flex z-50 items-center justify-center h-full absolute top-10 right-5">
        <div
          className={`max-sm:hidden transition-all duration-300   ${scrolled ? "bg-white shadow-2xl" : "bg-transparent"
            } px-6 py-2 rounded-md`}
        >
          <SelectLanguage />
          {/* <Link
            to={"/Login"}
            className={`rounded-xl  font-medium border border-solid  px-4 py-1 ${scrolled ? "bg-black border-black text-white" : "bg-transparent text-white  border-white"}`}
          >
            Đăng Nhập
          </Link> */}
          {/* <div className={`relative  ${scrolled ? "text-gray-600" : "text-white"}`}>
            <div className={`absolute bg-white transition-all overflow-hidden shadow-2xl mt-4 rounded-sm top-full py-3 w-full h-max ${!openSetting?"opacity-0  invisible":"opacity-100 visible"}`}>
              {settingsWhenLoginSuccess.map(
                  (r: IPropsheader, index: number) => (
                    <div key={index} className="text-black text-xl font-light" onClick={()=>setOpenSetting(false)}>
                      <Link to={r.path} className="hover:bg-gray-700/10 transition-all flex items-center pl-2 gap-2 font-light" >
                        <span className="font-thin">
                          {r.icon}
                        </span>
                        <span className="">
                          {r.name}
                        </span>
                      </Link>
                    </div>
                  )
                )}
            </div>
          </div> */}
        </div>
      </div>
      {open && (
        <NavbarLeft open={open} close={handleCloseNavbar}>
          <>
            <div className="mb-12">
              <div
                className="absolute top-5 left-5 p-2"
                onClick={handleCloseNavbar}
              >
                <i className="ri-arrow-left-s-line text-white text-4xl"></i>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
              {AllSettingHeader.map((r: IPropsheader, index: number) => (
                <div key={index} className="text-white text-2xl font-light">
                  <Link to={r.path!} className="block text-center font-light">
                    <span className="ml-5">{t(r.name as "home" | "courses" | "lessons" | "news" | "contact" | "about_us" )}</span>
                  </Link>
                </div>
              ))}
            </div>
            {/* <Divider />
            <div className="flex flex-col gap-3">
              {settingsWhenLoginSuccess.map(
                (r: IPropsheader, index: number) => (
                  <div key={index} className="text-white text-2xl font-light">
                    <Link to={r.path} className="block text-center font-light">
                      <span className="ml-5">
                        {r.name}
                      </span>
                    </Link>
                  </div>
                )
              )}
            </div>
            <Divider /> */}
            {/* <div className="flex items-center justify-center gap-3"> */}
            {/* <Link
                to={"/Login"}
                className="rounded-xl w-full text-center border border-solid border-white font-medium text-white px-4 py-1"
              >
                Đăng Nhập
              </Link>
              <Link
                to={"/Register"}
                className="rounded-xl w-full text-center border border-black bg-white font-medium text-black px-4 py-1"
              >
                Đăng Ký
              </Link> */}
            {/* <Link
                  to={"/Register"}
                  className="rounded-xl w-full text-center border border-black bg-white font-medium text-black px-4 py-1"
                >
                  Đăng Xuất
                </Link> */}
            {/* </div> */}
          </>
        </NavbarLeft>
      )}
    </div>
  );
};
export default Header;
