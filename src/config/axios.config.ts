import { CourseInterface } from "@/app/(dashboard)/courses/page";
import axios, { AxiosResponse } from "axios";

interface UserDataSignUpInterface{
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

interface UserDataSignInInterface{
  email: string;
  password: string;
}

const config = axios.create({
  baseURL: "http://185.173.110.137:5000",
  // baseURL: "http://18.231.155.115:5001",
  // baseURL: "http://localhost:5000",
  timeout: 7000
})

config.interceptors.request.use((config)=>{
  const token = localStorage.getItem("userToken")
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error)=>{
  return Promise.reject(error)
});

const signUp = async (data: UserDataSignUpInterface): Promise<AxiosResponse>=>{
  const response = await config.post("/sign-up", data);
  return response;
}

const signIn = async (data: UserDataSignInInterface): Promise<AxiosResponse>=>{
  const response = await config.post("/sign-in", data);
  return response;
}

const getCourses = async ()=>{
  const response = await config.get("/courses")

  return response;
}

const getCourse = async (id:number)=>{
  const response = await config.get(`/courses/${id}`);
  return response;
}

const createCourse = async(data: Omit<CourseInterface, 'id'>)=>{
  const response = await config.post("/courses", data);
  return response;
}

const editCourse = async(data: CourseInterface)=>{
  const response = await config.put("/courses", data);
  return response;
}

const addCourseAtCart = async (userId: number, courseId: number)=>{
  const response = await config.post("/cart", {
    userId,
    courseId
  });
  return response;
}

const getUserCart = async(userId:number)=>{
  const response = await config.get(`/cart/${userId}`);
  return response;
}

const removeCourseAtCart = async(userId:number, cartId: number)=>{
  const data = {
    userId,
    cartId
  }
  const response = await config.delete(`/cart`, {data});
  return response;
}

const updateCart = async(userId: number, cartId: number)=>{
  const data = {
    userId,
    cartId
  };

  const reponse = await config.put("/cart", data);
  return reponse;
}

const axiosConfigs = {
  signUp,
  signIn,
  getCourses,
  getCourse,
  createCourse,
  editCourse,
  addCourseAtCart,
  getUserCart,
  removeCourseAtCart,
  updateCart,
}

export default axiosConfigs;
