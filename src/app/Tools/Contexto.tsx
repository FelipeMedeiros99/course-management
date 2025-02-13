"use client"
import { createContext } from "react";

export interface CourseDataInterface{
  id: number;
  name: string;
  url: string;
  price: number;
  descountedPrice: number;
  workload: number;
  content: string
}

export interface UserDataInterface{
  id: number | null;
  name: string;
  email: string;
}

interface UseContextParams{
  isNavigationActive: boolean; 
  setIsNavigationActive: (newNavegation: boolean)=>void;
  coursesList: CourseDataInterface[];
  setCoursesList: (newCoursesList: CourseDataInterface[])=>void;
  userData: UserDataInterface;
  setUserData: (newUserData: UserDataInterface) => void;

}
const Context = createContext({} as UseContextParams)

export default Context