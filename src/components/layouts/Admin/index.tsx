// import React from 'react'
import HeaderAdmin from "./Header/HeaderAdmin";
import FooterAdmin from "./Footer/FooterAdmin";
import SideBar from "./SideBar";

interface IPropsMainAdmin {
  children: JSX.Element;
}
const LayoutAdmin = ({ ...props }: IPropsMainAdmin): JSX.Element => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-2 ">
        <SideBar />
      </div>
      <div className="col-span-10">
        <HeaderAdmin />
        <div className="main-app p-5 overflow-y-scroll bg-[#f6f6f6] w-full h-[90vh]">
          {props.children}
        </div>
        <FooterAdmin />
      </div>
    </div>
  );
};
export default LayoutAdmin;
