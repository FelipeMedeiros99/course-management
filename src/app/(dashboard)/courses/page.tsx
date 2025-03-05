"use client"

import { Box, HStack, Spinner, Text, VStack } from "@chakra-ui/react"
import { useCallback, useContext, useEffect, useState } from "react";

import CourseBox from "@/components/CourseBox/CourseBox";
import axiosConfigs from "@/config/axios.config";
import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export interface CourseInterface{
  id: number;
  content: string;
  descountedPrice: number; 
  name: string;
  price: number;
  url: string
  workload: number
}

export default function Main() {
  const [isLoadingCourses, setIsLoadingCourses] = useState(false)
  const [courses, setCourses] = useState<CourseInterface[]>([])
  const [alertVisibility, setAlertVisibility] = useState(false)
  const [alertMessageParams, setAlertMessageParams] = useState<Omit<AlertMessageInterface, "visibility">>({ message: "", status: "neutral" })
  const [emptyCoursesMessage, setEmptyCoursesMessage] = useState("")
  const router = useRouter()

  const findCourses = useCallback(async():Promise<void>=>{
    try {
      const promise = await axiosConfigs.getCourses();
      setCourses(promise?.data)
      if(promise?.data.length === 0 ){
        setEmptyCoursesMessage("Aguarde, em breve teremos novidades!")
      }

    } catch (error: AxiosError | any) {
      setAlertVisibility(true)
      const messageError = error?.response?.data?.message || "";

      switch(messageError){
        case "Invalid token format": 
          setAlertMessageParams({status: "error", message: "Token inválido"});
          break;

        case "Expired token":
          setAlertMessageParams({status: "error", message: "O token expirou, faça login novamente"});
          break;

        default:
          setAlertMessageParams({status: "error", message: "Um erro inesperado aconteceu"});
          console.log("erro: ", error)
        }
      setTimeout(()=>{
        setAlertVisibility(false)
        router.push("/sign-in")        
      }, 4000)
      setCourses([])
    } 
  }, [setCourses, setAlertVisibility, setAlertMessageParams, router])

  useEffect(() => {
    (async() =>{
      setIsLoadingCourses(true)
      await findCourses();
      setIsLoadingCourses(false)
    })()
  }, [findCourses])


  return (
    <VStack as="main" minH="calc(100vh - 12rem )">
      <AlertMessage message={alertMessageParams.message} status={alertMessageParams.status} visibility={alertVisibility}/>
      
      {isLoadingCourses &&
        <VStack display="flex" w="100%" justifyContent="center" alignItems="center" padding="8rem">
          <Spinner
            width={"7rem"}
            height={"7rem"}
            color="#fe7502" />
        </VStack>
      }
      {emptyCoursesMessage && <Text padding="1rem" textAlign="center" as="h2" fontSize="2rem" color="#fe7502">{emptyCoursesMessage}</Text>}
      <HStack flexWrap="wrap" width="100%" justifyContent="center" margin="2.5rem 0"
        >
        {courses.map((course, index) => (
          <CourseBox courseData={course} key={index} setAlertMessageParams={setAlertMessageParams} setAlertVisibility={setAlertVisibility}/>
        ))}
      </HStack>
    </VStack>
  );
}
