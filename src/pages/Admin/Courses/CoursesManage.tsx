import LayoutAdmin from "@/components/layouts/Admin";
import Pagetitle from "@/components/PageTitle";
import useFetch from "@/hooks/useFetch.hook";
import { getAllCourses } from "@/app/apis/courses.api";
import React, { useEffect } from "react";
import ListData from "@/components/CoursesManage/ListData";
import { CoursesContext } from "@/hooks/useContext.hook";
import LoadingPage from "@/components/Loading/LoadingPage";
// import FloatingActionButtons from "@/components/CoursesManage/FloatAction";
import { useAlertMessage } from "@/contexts/AlertContext";
import FilterCourses from "@/components/CoursesManage/FilterCourses";

const CoursesManage = (): JSX.Element => {
  const [courseState, callCouseApi] = useFetch();
  const [isReset, setIsReset] = React.useState<boolean>(true);
  const { addAlert } = useAlertMessage();
  useEffect(() => {
    callCouseApi(getAllCourses);
    addAlert({
      title: "Thông báo",
      message: "Đang tải dữ liệu",
      type: "warning",
    });
  }, [isReset]);
  useEffect(() => {
    if (courseState?.error !== "") {
      addAlert({
        title: "Lỗi",
        message: courseState?.error,
        type: "error",
      });
    } else if (
      courseState?.payload !== undefined &&
      courseState?.payload !== null
    ) {
      addAlert({
        title: "Thông tin",
        message: "Đã cập nhập dữ liệu về khóa học",
        type: "info",
      });
    }
  }, [courseState?.loading]);
  console.log(courseState);
  const courseData = courseState.payload?.data.data;
  return (
    <LayoutAdmin>
      <CoursesContext.Provider value={{ isReset, setIsReset }}>
        <Pagetitle title="Course" />
        {courseState.loading ? (
          <LoadingPage />
        ) : (
          <>
            <FilterCourses />
            <ListData courses={courseData} />
          </>
        )}
      </CoursesContext.Provider>
    </LayoutAdmin>
  );
};
export default CoursesManage;
