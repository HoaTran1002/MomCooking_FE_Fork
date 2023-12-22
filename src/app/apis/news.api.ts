import server from "@/config/axios";
export interface CreateData {
  title: string;
  author: string;
  content: string;
  file: File;
}
export const apiCreateNews = async (data: CreateData): Promise<any> => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("author", data.author);
  formData.append("content", data.content);

  if (data.file) {
    formData.append("file", data.file);
  }
  const resolve = await server.post("/news/createNews", formData);
  return resolve;
};
export const apiGetNews = async (page: number, size: number) => {
  const resolve = await server.get(`news/getAll/${page}/${size}`);

  return resolve;
};
