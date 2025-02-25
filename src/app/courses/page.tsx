"use client"

import { Box, HStack, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";

import CourseBox from "@/components/CaixaCurso/CourseBox";
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

  async function findCourses():Promise<void>{
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
  }

  useEffect(() => {
    (async() =>{
      setIsLoadingCourses(true)
      await findCourses();
      setIsLoadingCourses(false)
    })()
  }, [])

  useEffect(()=>{
  },[])


  return (
    <HStack as="main" paddingBottom="5rem">
      <AlertMessage message={alertMessageParams.message} status={alertMessageParams.status} visibility={alertVisibility}/>
      
      {isLoadingCourses &&
        <Box display="flex" alignItems="center" justifyContent="center" height="40vh"
        >
          <Spinner
            width={"5rem"}
            height={"5rem"}
            color="#fe7502" />
        </Box>
      }
      <Text padding="1rem" textAlign="center" as="h2" fontSize="2rem" color="#fe7502">{emptyCoursesMessage}</Text>
      <Box
        as="div" display="flex" flexWrap="wrap" width="100%"
        mx="auto" justifyContent="space-around" marginTop="2.5rem"
        marginBottom="2.5rem"
        >
        
        
        {courses.map((course, index) => (
          <CourseBox courseData={course} key={index} />
        ))}
      </Box>
    </HStack>
  );
}
