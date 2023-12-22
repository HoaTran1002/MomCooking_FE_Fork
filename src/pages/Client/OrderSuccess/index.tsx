import React from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import { useNavigate } from "react-router-dom";
import view1 from "@/assets/images/Views/z4689941072190_e70f3ef9e5b8497daa343c8635bba872.jpg"
import { useAlertMessage } from "@/contexts/AlertContext";
const OrderSuccess = (): JSX.Element => {
  const navigate = useNavigate();
  const {addAlert} = useAlertMessage()
  const handleGotoDebit = ():void=>{
    addAlert(
      {
        title:"Thông báo",
        message:"Bạn vừa đăng ký lịch học ",
        type:"info"
      }
    )
    navigate('/Debit')
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <div className="">
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span >
              Payment success
            </span>
            <span className="text-base px-24">
              Cảm ơn bạn đã đăng ký lớp học của chúng tôi, thông tin chi tiết sẽ
              được hiển thị chi tiết trong công nợ tại đây <br />
              <br />
              <button
                onClick={handleGotoDebit}
                className="text-white font-medium py-2 px-5 bg-black rounded"
              >
                Công nợ
              </button>
            </span>
          </div>
          <div style={{
            backgroundImage: `url(${view1})`
          }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          >
          </div>
        </div>

      </div>
    </LayoutMain>
  );
};
export default OrderSuccess;
