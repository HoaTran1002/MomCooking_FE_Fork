import server from "@/config/axios";
import { ICourse } from "@/interface/courses.interface";

export const getAllCourses = async (): Promise<any> => {
  try {
    const data = await server.get("/course/getAll")
    return data;
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};

export const createCourse = async ({
  description,
  image,
  price,
  images,
  roadmaps,
  title,
  video,
  videos,
  
}: ICourse): Promise<any> => {
  try {
    await server.post("/course/create", {
      description,
      image,
      price,
      images,
      roadmaps,
      title,
      video,
      videos
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};

export const updateCourse = async ({
  _id,
  description,
  image,
  price,
  images,
  roadmaps,
  title,
  video,
  videos
}: ICourse ): Promise<any> => {
  try {
    await server.put(`/course/${_id}/update`, {
      _id,
      description,
      image,
      price,
      images,
      roadmaps,
      title,
      video,
      videos
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};

export const deleteCourse = async ({
  _id,
}: ICourse): Promise<any> => {
  try {
    await server.delete(`/course/${_id}/remove`)
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message;
    throw new Error(message);
  }
};
