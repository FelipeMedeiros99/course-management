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

const  config = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LINK_SERVER,
  timeout: 7000,
})

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

const axiosConfigs = {
  signUp,
  signIn,
  getCourses
}

export default axiosConfigs;