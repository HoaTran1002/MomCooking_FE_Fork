import {
  IPropsFooterItem,
  IPropsheader,
} from "../components/layouts/Client/client.interface";
export enum PathEnum {
  Home = "home",
  Courses = "courses",
  Lessons = "lessons",
  News = "news",
  Contact = "contact",
  FAQ = "FAQ",
  AboutUs = "about_us",
}
export const AllSettingHeader: IPropsheader[] = [
  { name: "home", path: "/", icon: <i className="ri-home-line"></i> },
  {
    name: "courses",
    path: "/khoa-hoc",
    icon: <i className="ri-menu-5-line"></i>,
  },
  {
    name: "lessons",
    path: "/bai-hoc",
    icon: <i className="ri-list-indefinite"></i>,
  },
  { name: "news", path: "/tin-tuc", icon: <i className="ri-newspaper-line"></i> },
  {
    name: "contact",
    path: "/lien-he",
    icon: <i className="ri-message-3-line"></i>,
  },
  {
    name: "FAQ",
    path: "/FAQ",
    icon: <i className="ri-questionnaire-line"></i>,
  },
  {
    name: "about_us",
    path: "/ve-chung-toi",
    icon: <i className="ri-questionnaire-line"></i>,
  },
];

export const settingsWhenLoginSuccess: IPropsheader[] = [
  {
    name: "My Class",
    path: "/Schedule",
    icon: <i className="ri-calendar-todo-fill"></i>,
  },
  {
    name: "My Debt",
    path: "/Debit",
    icon: <i className="ri-wallet-3-fill"></i>,
  },
  {
    name:"My Info",
    path:"/Profile",
    icon:<i className="ri-user-5-line"></i>
  }
];

export const FooterItems: IPropsFooterItem[] = [
  {
    name: "introduce",
    children: [
      {
        nameTitle: "Most popular",
        path: "/",
      },
      {
        nameTitle: "We have a best chef",
        path: "/",
      },
      {
        nameTitle: "Contact us",
        path: "/",
      },
      {
        nameTitle: "Ours moments",
        path: "/",
      },
    ],
  },
  {
    name: "courses",
    children: [
      {
        nameTitle: "Kid course",
        path: "/",
      },
      {
        nameTitle: "Bread course",
        path: "/",
      },
      {
        nameTitle: "Private course",
        path: "/",
      },
    ],
  },
  {
    name: "company",
    children: [
      {
        nameTitle: "About us",
        path: "/About us",
      },
      {
        nameTitle: "Privacy policy",
        path: "/",
      },
      {
        nameTitle: "FAQ",
        path: "/",
      },
    ],
  },
];

export const allSettingsMainAdmin: IPropsheader[] = [
  {
    name: "Khóa học",
    icon: <i className="ri-artboard-line"></i>,
    children:[
      {
        name:"Danh sách khóa học",
        path:"/Admin/CoursesManage"
      },
      {
        name:"Thêm khóa học",
        path:"/Admin/CoursesManage/Add"
      }
    ]
  },
  {
    name: "Sản phẩm",
    icon: <i className="ri-menu-5-line"></i>,
    children:[
      {
        name:"Danh sách sản phẩm",
        path: "/Admin/ProductsManage",
      },{
        name:"Thêm sản phẩm",
        path: "/Admin/ProductsManage/Add",
      }
    ]
  },
  {
    name: "Câu hỏi FAQ",
    icon: <i className="ri-questionnaire-line"></i>,
    children:[
      {
        name:"Danh sách câu hỏi FAQ",
        path: "/Admin/FAQ",
      }
    ]
  },
  {
    name: "Tin tức",
    icon: <i className="ri-newspaper-line"></i>,
    children:[
      {
        name:"Danh sách tin tức",
        path:"/Admin/new/"
      },
      {
        name:"Tạo trang tin tức mới",
        path:"/Admin/new/add"
      }
    ]
  },
  {
    name: "Thông tin cơ bản",
    icon: <i className="ri-profile-line"></i>,
    children:[
      {
        name:"Doanh nghiệp",
        path:"/Admin/info/business"
      }
    ]
  }
];

export const allSettingsSubAdmin: IPropsheader[] = [
  {
    name: "Profile",
    path: "/Admin/ProfileManage",
    icon: <i className="ri-user-3-line"></i>,
  },
];
