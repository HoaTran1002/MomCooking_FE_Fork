export interface INews {
  id?: string;
  titleName: string;
  timePost: string;
  imgUrl: string;
}

export interface INewDetail {
  id?: string;
  title: string;
  author: string;
  imgUrl: string;
  imgName?: string;
  content?: string;
  timePost: string;
}
