import { useState } from "react";
import LayoutAuth from "@/components/layouts/Auth/layout";
import Input from "@/components/Input";
import { Link, useNavigate } from "react-router-dom";
import Pagetitle from "@/components/PageTitle";
import useFetch from "@/hooks/useFetch.hook";
import { ILogin, loginAuth } from "@/app/apis/auth.api";
import LocalStorage from "@/utils/localStorage";

const Login = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginState, callLoginApi] = useFetch();
  const navigate = useNavigate();
  // const onChangeUserName = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setUserName(e.target.value);
  // };
  // const onChangePassWord = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setPassword(e.target.value);
  // };
  console.log(userName, password);

  const submitLogin = async () => {
    if (userName == "" || password == "") {
      return;
    }
    const dataLogin: ILogin = {
      userName: userName,
      password: password,
    };
    try {
      await callLoginApi(loginAuth(dataLogin));
      if (loginState?.payload?.data?.accessToken) {
        console.log(loginState.payload);
        LocalStorage.setItem("jwt", loginState?.payload.data?.accessToken);
        navigate("/AdminHome");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   const jwt = LocalStorage.getItem("jwt");
  //   if (jwt) {
  //     navigate("/AdminHome");
  //   }
  // });
  return (
    <LayoutAuth>
      <>
        <Pagetitle title="Đăng nhập" />
        <span
          className="absolute p-2 top-2 left-2 cursor-pointer"
          onClick={(): void => {
            navigate(-1);
          }}
        >
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </span>
        <h2 className="text-2xl text-center font-no p-2">
          ĐĂNG NHẬP TÀI KHOẢN
        </h2>
        <div className="flex flex-col gap-1 px-3 mt-4">
          <Input
            onChange={(e) => setUserName(e.target.value)}
            labelName="Email"
            placeholder="Nhập email"
            type="email"
            icon={<i className="ri-mail-line"></i>}
          />

          <Input
            onChange={(e) => setPassword(e.target.value)}
            labelName="Mật khẩu"
            placeholder="Nhập mật khẩu"
            type="password"
            icon={<i className="ri-key-2-line"></i>}
          />
        </div>
        <div className="mt-3 flex flex-col justify-center items-center gap-2">
          <button
            onClick={submitLogin}
            className="w-full py-1 text-lg bg-black text-white rounded-md text-center"
          >
            ĐĂNG NHẬP
          </button>
          <span className="italic text-sm ">
            Bạn chưa có tài khoản,
            <Link to={"/Register"}>
              <span className="font-medium not-italic">Đăng ký ngay</span>
            </Link>
          </span>
          <span className="italic text-sm ">
            Quên mật khẩu?
            <Link to={"/Login"}>
              <span className="font-medium not-italic">
                &nbsp; nhấn để lấy lại mật khẩu
              </span>
            </Link>
          </span>
        </div>
      </>
    </LayoutAuth>
  );
};
export default Login;
