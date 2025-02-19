import axios, { AxiosResponse } from "axios";

interface UserDataSignUpInterface{
  email: string;
  password: string;
  confirmPassword: string;
}

const  config = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LINK_SERVER,
  timeout: 7000,
})

const signUp = async (data: UserDataSignUpInterface): Promise<AxiosResponse>=>{
  const response = await config.post("/sign-up", data);
  return response
}

const axiosConfigs = {
  signUp
}

export default axiosConfigs;