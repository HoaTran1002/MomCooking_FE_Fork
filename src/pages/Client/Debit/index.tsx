import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import { listDebits } from "@/data/debit";
import TableDebit from "./TableDebit";
import Pagetitle from "@/components/PageTitle";
import view1 from "@/assets/images/Views/z4689941072190_e70f3ef9e5b8497daa343c8635bba872.jpg"
const Debit = (): JSX.Element => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <div className="">
        <Pagetitle title="Công nợ" />
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span >
              debt payment history
            </span>
          </div>
          <div style={{
            backgroundImage: `url(${view1})`
          }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          >
          </div>
        </div>
        <div className=" flex items-center justify-center px-3">
          <div className="w-[900px] max-w-[900px] py-10">
            <TableDebit listItem={listDebits} />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};
export default Debit;
