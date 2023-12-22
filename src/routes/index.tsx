import Home from "@/pages/Client/Home";
import Courses from "@/pages/Client/Courses";
import CoursesDetail from "@/pages/Client/CoursesDetail";
import NewsDetail from "@/pages/Client/NewsDetail";
import News from "@/pages/Client/News";
import AboutUs from "@/pages/Client/AboutUs";
import ErrorPage from "@/pages/Error";
import Login from "@/pages/Auth/login";
import FAQPage from "@/pages/Client/FAQPage";
import Lessons from "@/pages/Client/Lessons";
import ContactUs from "@/pages/Client/ContactUs";
import AboutUsManage from "@/pages/Admin/AboutUsManage";
import CoursesManage from "@/pages/Admin/Courses/CoursesManage";
import LessonsManage from "@/pages/Admin/LessonsManage";
import NewsManage from "@/pages/Admin/News/NewsManage";
import OrderManage from "@/pages/Admin/OrderManage";
import ProductsManage from "@/pages/Admin/Products/ProductsManage";
import ProfileManage from "@/pages/Admin/ProfileManage";
import UsersManage from "@/pages/Admin/UsersManage";
import ClassManage from "@/pages/Admin/ClassManage";
import FAQManage from "@/pages/Admin/FaqManage";
import CoursesManageAdd from "@/pages/Admin/Courses/CoursesManageAdd";
import ProductManageAdd from "@/pages/Admin/Products/ProductManageAdd";
import ManagerInfo from "@/pages/Admin/ManagerInfo";
import BusinessInfo from "@/pages/Admin/BusinessInfo";
import AddNews from "@/pages/Admin/News/NewsManageAdd";
export interface IPramsRoute {
  path: string;
  element: JSX.Element;
}
export const PublicRoute: IPramsRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/tin-tuc/:id", element: <NewsDetail /> },
  { path: "/tin-tuc", element: <News /> },
  { path: "/khoa-hoc/:id", element: <CoursesDetail /> },
  { path: "/khoa-hoc", element: <Courses /> },
  { path: "/bai-hoc", element: <Lessons /> },
  // { path: "/Debit", element: <Debit /> },
  // { path: "/Schedule", element: <Schedule /> },
  // { path: "/OrderSuccess", element: <OrderSuccess /> },
  { path: "/ve-chung-toi", element: <AboutUs /> },
  { path: "/lien-he", element: <ContactUs /> },
  // { path: "/Terms", element: <Terms /> },
  // { path: "/Privacy", element: <Privacy /> },
  { path: "/dang-nhap-admin", element: <Login /> },
  // { path: "/Register", element: <Register /> },
  { path: "/FAQ", element: <FAQPage /> },
  { path: "/*", element: <ErrorPage /> },
];
export const AdminRoute: IPramsRoute[] = [
  { path: "/Admin/CoursesManage", element: <CoursesManage /> },
  { path: "/Admin/AboutUsManage", element: <AboutUsManage /> },
  { path: "/Admin/CoursesManage/Add", element: <CoursesManageAdd /> },
  { path: "/Admin/LessonsManage", element: <LessonsManage /> },
  { path: "/Admin/new", element: <NewsManage /> },
  { path: "/Admin/new/add", element: <AddNews /> },
  { path: "/Admin/OrderManage", element: <OrderManage /> },
  { path: "/Admin/ProductsManage", element: <ProductsManage /> },
  { path: "/Admin/ProductsManage/Add", element: <ProductManageAdd /> },
  { path: "/Admin/ProfileManage", element: <ProfileManage /> },
  { path: "/Admin/UsersManage", element: <UsersManage /> },
  { path: "/Admin/ClassManage", element: <ClassManage /> },
  { path: "/Admin/FAQ", element: <FAQManage /> },
  { path: "/Admin/info/", element: <ManagerInfo /> },
  { path: "/Admin/info/business", element: <BusinessInfo /> },
];
