// import React from "react";
import Logo from "@/assets/images/Logo/logo-mom.jpg";
// import Divider from "@/components/Divider";
import { allSettingsMainAdmin } from "@/data/layouts";
import { IPropsheader } from "../../Client/client.interface";
// import {  useLocation } from "react-router-dom";
import ItemNavbar from "@/components/NavbarLeft/ItemNavbar";
const SideBar = (): JSX.Element => {
  // const location = useLocation();
  return (
    <div className="w-full h-full bg-white  p-2">
      <div className=" flex items-center justify-center pb-4">
        <img src={Logo} alt="" className="h-16 w-16 rounded" />
      </div>
      <span className="text-sm text-[#777777] font-medium block text-center py-3">
        Super Admin Panel
      </span>
      <div className="py-3 flex flex-col gap-2">
        {allSettingsMainAdmin.map((r: IPropsheader, index: number) => (
          <ItemNavbar key={index} item={r} />
        ))}
      </div>
    </div>
  );
};
export default SideBar;
