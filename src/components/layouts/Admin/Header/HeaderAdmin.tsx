// import React from "react";
import Input from "@/components/Input";
import Tooltip from "@/components/Tooltip";
const HeaderAdmin = (): JSX.Element => {
  return (
    <div className="px-5 gap-20 py-2  border-b-2 border-solid border-gray-200 flex items-center justify-between">
      <div>
        <span className="p-2 bg-purple-100 rounded border border-solid cursor-pointer border-purple-300">
          <i className="ri-layout-left-2-line text-xl text-purple-600"></i>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400">Welcome,</span>
        <span className="font-medium ">Nguyễn Văn A</span>
      </div>
      <div className="flex-auto">
        <Input
          className="w-full flex-1"
          icon={<i className="ri-search-2-line"></i>}
          placeholder="Tìm kiếm mục tại đây"
        />
      </div>
      <div className="flex items-center gap-6">
        <Tooltip>
          <span className="h-11 w-11 text-xl rounded-full border-solid border-gray-200 border cursor-pointer flex items-center justify-center bg-white">
            <i className="ri-notification-3-line"></i>
          </span>
        </Tooltip>
        <Tooltip>
          <span className="h-11 w-11 text-xl rounded-full border-solid border-gray-200 border cursor-pointer flex items-center justify-center bg-white">
            <i className="ri-logout-box-line"></i>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};
export default HeaderAdmin;
