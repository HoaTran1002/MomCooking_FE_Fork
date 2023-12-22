import React, { ChangeEvent } from "react";
import LayoutMain from "@/components/layouts/Client/Main";
import Input from "@/components/Input";
import view1 from "@/assets/images/Views/z4689941072190_e70f3ef9e5b8497daa343c8635bba872.jpg";
import TableOrderCourses from "./tableOrderCourses";
import { listOrderCourses, listTableCourses } from "@/data/orders";
import { useNavigate } from "react-router-dom";
import { useAlertMessage } from "@/contexts/AlertContext";
const Order = (): JSX.Element => {
  const navigate = useNavigate();
  const hanleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };
  const { addAlert } = useAlertMessage();
  const [checkTemSer, setCheckTemSer] = React.useState<boolean>(false);
  const [show, setShow] = React.useState<boolean>(false);

  const handleSubmitOrder = () => {
    setShow((r) => !r);
    addAlert({
      title: "Thông báo",
      message: "Đăng ký thành công",
      type: "success",
      duration: 5000,
    });
    if (show) {
      console.log("fig bug");
    }
    navigate("/OrderSuccess");
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <>
        <div className="relative">
          <div className="absolute text-4xl w-screen h-[750px] bg-slate-950/20 flex items-center justify-center px-3 z-10 text-white uppercase tracking-widest font-normal text-center flex-col gap-3">
            <span>online payment</span>
          </div>
          <div
            style={{
              backgroundImage: `url(${view1})`,
            }}
            className="w-screen h-[750px] bg-cover bg-fixed bg-bottom"
          ></div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-[100vh] shadow-xl rounded-sm py-8 px-5 -translate-y-2/4 bg-white z-40">
            <Input
              labelName="Họ và tên"
              type="text"
              value="Nguyễn Văn A"
              readOnly={true}
              icon={<i className="ri-user-line"></i>}
              onChange={() => hanleChangeInput}
            />
            <Input
              labelName="Email"
              type="text"
              value="blkhoa17@gmail.com"
              readOnly={true}
              icon={<i className="ri-mail-line"></i>}
              onChange={() => hanleChangeInput}
            />
            <Input
              labelName="Số điện thoại"
              type="text"
              value="0123456789"
              readOnly={true}
              icon={<i className="ri-phone-line"></i>}
              onChange={() => hanleChangeInput}
            />
          </div>
        </div>
        <div className="gap-5 container w-[800px] max-sm:w-screen flex items-center flex-col justify-center -translate-y-28">
          <div className="col-span-1 w-full">
            <div className="mt-3">
              <div className="bg-black  w-full py-1 text-white px-3 text-lg font-medium">
                CHỌN KHÓA HỌC
              </div>
            </div>
            <div className="mt-3">
              <label
                htmlFor="countries"
                className="block mb-2 text-md font-medium text-gray-900 "
              >
                Chọn bài học{" "}
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option className="w-44 bg-black text-white ">
                  -- chọn --
                </option>
                <option className="w-44 bg-black text-white">
                  Khóa free trial{" "}
                </option>
                <option className="w-44 bg-black text-white">
                  Khóa private{" "}
                </option>
                <option className="w-44 bg-black text-white">
                  Khóa online{" "}
                </option>
              </select>
            </div>
          </div>
          <div className="col-span-1 w-full">
            <div className="mt-3">
              <TableOrderCourses listItem={listTableCourses} />
            </div>
          </div>
          <div className="col-span-1 w-full">
            <div className="mt-3">
              <div className="bg-black  w-full py-1 text-white px-3 text-lg font-medium">
                THANH TOÁN
              </div>
            </div>
            <div className="mt-3">
              <TableOrderCourses listItem={listOrderCourses} isOrder={true} />
            </div>
          </div>
          <div className="col-span-1 w-full">
            <div className="mt-3">
              <div className="bg-black  w-full py-1 text-white px-3 text-lg font-medium">
                THÔNG TIN CHUYỂN KHOẢN
              </div>
            </div>
            <div className="mt-3">
              <div>
                <h2>
                  Tên tài khoản:{" "}
                  <span className="text-lg font-medium">NGUYEN VAN A</span>{" "}
                </h2>
              </div>
              <div>
                <h2>
                  Tên ngân hàng:{" "}
                  <span className="text-lg font-medium">ACB Bank</span>{" "}
                </h2>
              </div>
              <div>
                <h2>
                  Số tài khoản:{" "}
                  <span className="text-lg font-medium">123456789</span>{" "}
                </h2>
              </div>
              <span className="italic text-md font-normal py-2 block">
                * Vui lòng chụp ảnh sau khi đã chuyển khoản thành công với mục
                dưới đây
              </span>
            </div>
          </div>
          <div className="col-span-1 w-full">
            <div className="mt-3">
              <div className="bg-black  w-full py-1 text-white px-3 text-lg font-medium">
                ẢNH BIÊN NHẬN CHUYỂN KHOẢN NGÂN HÀNG
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full max-sm:h-32 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <i className="ri-upload-cloud-2-line text-5xl"></i>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-3">
              <span>
                {checkTemSer ? (
                  <span onClick={(): void => setCheckTemSer((r) => !r)}>
                    <i className="text-3xl text-slate-600 ri-checkbox-fill"></i>
                  </span>
                ) : (
                  <span onClick={(): void => setCheckTemSer((r) => !r)}>
                    <i className="text-3xl text-slate-600 ri-checkbox-blank-line"></i>
                  </span>
                )}
              </span>
              <p
                className="max-sm:text-sm font-medium"
                onClick={(): void => setCheckTemSer((r) => !r)}
              >
                Tôi xác nhận rằng tôi đã đọc Điều khoản và Điều kiện, hiệu lực
                của (các) khóa học bắt đầu từ ngày đăng ký khóa học với khoản
                thanh toán được xác nhận, có giá trị tương ứng trong thời hạn
                hiệu lực đã nêu. Tôi cũng xác nhận rằng việc chấm dứt toàn bộ
                (các) khóa học hoặc một phần của (các) khóa học là không được
                phép đối với chương trình khuyến mãi này, bất kể tiến độ tham
                dự.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-9 -translate-y-20">
          <div
            onClick={handleSubmitOrder}
            className="bg-black text-white cursor-pointer font-medium text-lg py-2 px-5 rounded "
          >
            XÁC NHẬN VÀ ĐĂNG KÝ
          </div>
        </div>
      </>
    </LayoutMain>
  );
};
export default Order;
