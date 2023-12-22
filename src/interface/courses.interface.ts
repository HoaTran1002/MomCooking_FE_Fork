export interface IProductsCourse {
  _id?: string;
  productName: string;
  productImage: string;
  description: string;
}
export interface ICoursesCardReview {
  imgUrl?: string;
  title: string;
  subTitle: string;
  path: string;
}
export interface IVideo {
  url: string;
  duration?: number;
}
export interface IRoadmap {
  name: string;
  startTime: Date;
  endTime: Date;
  knowledge: string;
  skill: string;
}
export interface ICourse {
  _id?: string;
  description?: string;
  category?:string;
  title?: string;
  image?: string;
  images?: [{ item?: string }];
  price?: string;
  video?: string;
  videos?: [{ item?: IVideo }];
  roadmaps?: [{ item?: IRoadmap }];
}

export interface ILevel{
  _id?:string;
  name?:string;
}
