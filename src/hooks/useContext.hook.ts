// import { ICourse } from "@/interface/courses.interface";
import { createContext } from "react";
// import { State, initState } from "./useFetch.hook";
export interface IStateReset {
  isReset?: boolean;
  setIsReset?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CoursesContext = createContext<IStateReset>({ isReset: true });
