import * as React from "react";
import CardData from "./CardData";
import { ICourse } from "@/interface/courses.interface";
import { deleteCourse, updateCourse } from "@/app/apis/courses.api";
import useFetch from "@/hooks/useFetch.hook";
import { useAlertMessage } from "@/contexts/AlertContext";
import ModalMessage from "../ModalMessage";
import ModalBox from "../ModalBox";
import UploadImage from "../UploadImage";
import UploadManyImages from "../UploadManyImages";
import Input from "../Input";
import { CoursesContext, IStateReset } from "@/hooks/useContext.hook";
interface IPropListData {
  courses?: ICourse[] | null;
}

const EmptyList = (): JSX.Element => {
  return (
    <div className="w-full rounded-lg bg-white p-5 flex items-center justify-center flex-col gap-3 text-[#666666]">
      <span className="text-6xl">
        <i className="ri-inbox-2-line"></i>
      </span>
      <span className="text-2xl font-medium">
        Không có khóa học nào tại đây
      </span>
    </div>
  );
};

const ListData = ({ courses }: IPropListData): JSX.Element => {
  const [selectedCourse, setSelectedCourse] = React.useState<
    ICourse | undefined
  >(undefined);
  const [isDelete, setIsDelete] = React.useState<boolean>(true);
  const [deleteCoursestate, callDeleteCourse] = useFetch();
  const [updateCoursestate, callUpdateCourse] = useFetch();
  if (updateCoursestate) {
    console.log("declared but never use");
  }
  const { setIsReset }: IStateReset = React.useContext(CoursesContext);
  const { addAlert } = useAlertMessage();
  console.log(deleteCoursestate);

  const handleDeleteCourse = () => {
    const request: { _id: string | undefined } = {
      _id: selectedCourse?._id,
    };
    callDeleteCourse(async () => {
      try {
        await deleteCourse(request);
        await setSelectedCourse(undefined);
        await addAlert;
        await addAlert({
          title: "Thành công ",
          message: "Xóa khóa học thành công",
          type: "success",
        });
        if (setIsReset) {
          setIsReset((prevIsReset) => !prevIsReset);
        }
      } catch (err: any) {
        addAlert({
          title: "Lỗi ",
          message: deleteCoursestate.error,
          type: "error",
        });
      }
    });
  };
  const handleEditCourse = () => {
    callUpdateCourse(async () => {
      try {
        if (selectedCourse !== undefined) {
          await updateCourse(selectedCourse);
          await addAlert({
            title: "Thành công ",
            message: "Đã cập nhập thông tin khóa học thành công",
            type: "success",
          });
          if (setIsReset) {
            setIsReset((prevIsReset) => !prevIsReset);
          }
        } else {
          addAlert({
            title: "Lỗi ",
            message: "Không tìm thấy khóa học này",
            type: "error",
          });
        }
      } catch (error) {
        addAlert({
          title: "Lỗi ",
          message: String(error),
          type: "error",
        });
      }
    });
    handleCloseModel();
  };
  const handleOpenModel = (course: ICourse | undefined) => {
    setSelectedCourse(course);
  };
  const handleCloseModel = () => {
    setSelectedCourse(undefined);
  };
  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        {courses ? (
          courses.length !== 0 ? (
            courses.map((item: ICourse, index: number) => (
              <CardData
                key={index}
                course={item}
                onDelete={() => {
                  handleOpenModel(item);
                  setIsDelete(true);
                }}
                onEdit={() => {
                  handleOpenModel(item);
                  setIsDelete(false);
                }}
              />
            ))
          ) : (
            <EmptyList />
          )
        ) : (
          <EmptyList />
        )}
      </div>
      {selectedCourse !== undefined && isDelete && (
        <ModalMessage
          title="Thông báo"
          content="Bạn có chắc muốn xóa khóa học này"
          isClose={handleCloseModel}
          isOk={handleDeleteCourse}
        />
      )}
      <ModalBox
        isOpen={selectedCourse !== undefined && !isDelete}
        onClose={handleCloseModel}
        styleModalClass="pt-10"
      >
        <div className="overflow-y-scroll h-full p-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
              <h3 className="text-xl font-medium py-2">
                Hình nền của khóa học
              </h3>
              <UploadImage />
            </div>
            <div className="col-span-9">
              <h3 className="text-xl font-medium py-2">
                Các hình ảnh liên quan khác
              </h3>
              <UploadManyImages />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-medium">Thông tin về khóa học</h2>
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div>
                <Input
                  labelName="Tên khóa học"
                  value={selectedCourse?.title}
                  placeholder="VD: Khóa học làm bánh kem"
                  onChange={(e) =>
                    setSelectedCourse((pre) => ({
                      ...pre,
                      title: e.target.value,
                    }))
                  }
                />
                <Input
                  type="text-area"
                  value={selectedCourse?.description}
                  labelName="Mô tả khóa học"
                  onChange={(e) =>
                    setSelectedCourse((pre) => ({
                      ...pre,
                      description: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Input
                  labelName="Giá khóa học"
                  placeholder="$20"
                  value={selectedCourse?.price}
                  onChange={(e) =>
                    setSelectedCourse((pre) => ({
                      ...pre,
                      price: e.target.value,
                    }))
                  }
                />
                <Input
                  labelName="Giá khóa học sau khi giảm giá"
                  placeholder="$20"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-gradient-to-br from-[#8a3fd9] to-[#c163ff] text-white py-3 px-5 rounded"
              onClick={handleEditCourse}
            >
              <i className="ri-add-line"></i>
              <span className="ml-2 text-lg">Chỉnh sửa khóa học</span>
            </button>
          </div>
        </div>
      </ModalBox>
    </>
  );
};

export default React.memo(ListData);
