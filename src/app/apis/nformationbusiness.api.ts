import server from "@/config/axios";

export const getAllInfo = async (): Promise<any> => {
    try {
      const data = await server.get("/course/getAll")
      return data;
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error.message;
      throw new Error(message);
    }
  };
  