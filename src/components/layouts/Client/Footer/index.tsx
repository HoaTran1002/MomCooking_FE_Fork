// import React from 'react'
import Logo from "@/assets/images/Logo/logo-mom.jpg";
import { useTranslation } from "react-i18next";
// import facebook from "@/assets/images/Socials/facebook.png";
// import youtube from "@/assets/images/Socials/youtube.png";
// import instagram from "@/assets/images/Socials/instagram.png";
// import twitter from "@/assets/images/Socials/twitter.png";
import { Link } from "react-router-dom";
// import { IPropsFooterItem, ItemsFooter } from "../client.interface";
// import { FooterItems } from "@/data/layouts";
const Footer = (): JSX.Element => {
  const {t} = useTranslation("layout")
  return (
    <>
      <div className="grid grids-cols-3 grids-rows-2 bg-zinc-900 text-white ">
        <div className="row-span-1 col-span-1 max-sm:col-span-3 pb-10 ">
          <div className="flex items-center flex-col gap-12">
            <div className="pt-16 flex items-center flex-col gap-2">
              <h2 className="text-3xl tracking-widest">{t("footer.contactTitle")}</h2>
              <span className="text-gray-300">momcooking@momcooking.com</span>
              <span className="text-gray-300">+8412356789</span>
            </div>
            <div className="flex items-center flex-col justify-center gap-5 w-full ">
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-center">123 Nguyễn Văn A </span>
                <span>Quận 1, TP.Hồ Chí Minh</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 col-span-1 max-sm:col-span-3 ">
          <Link
            to={"/"}
            className="flex items-center flex-col gap-10 justify-center h-full"
          >
            <img src={Logo} alt="" className="w-[140px] h-[140px] rounded-lg" />
            <span className="uppercase tracking-widest text-2xl">
              mom cooking class
            </span>
          </Link>
        </div>
        <div className="row-span-1 col-span-1 max-sm:col-span-3 pb-10">
          <div className="pt-16 flex items-center flex-col gap-2">
            <h2 className="text-3xl tracking-widest">{t("footer.serviceTitle")}</h2>
            <span className="text-gray-300">Mon - Fri: 11am - 10pm​</span>
            <span className="text-gray-300">Sat - Sun: 11am - 12am</span>
          </div>
        </div>
        <div className="row-span-2 col-span-3 py-2 flex max-sm:flex-col justify-center items-center gap-2 bg-zinc-950 text-xs">
          <span className="">Make with ❤️ by team KAIT </span>
          <span className=""> © copyright 2023 KAIT web developer</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
