import server from "@/config/axios";
export interface ILogin {
  userName: string;
  password: string;
}
export const loginAuth = (record: ILogin) => {
  return async (): Promise<any> => {
    try {
      const result = await server
        .post("/auth/login", record)
        .catch(function (error) {
          throw new Error(error.toJSON());
        });
      return result;
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error.message;
      console.log(error);
      throw new Error(message);
    }
  };
};
