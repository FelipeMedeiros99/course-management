"use client"

import { Box, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";

// import CaixaCurso from "@/app/Components/CaixaCurso"
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
  const router = useRouter()

  async function findCourses():Promise<void>{
    setIsLoadingCourses(true)
    try {
      const promise = await axiosConfigs.getCourses();
      setCourses(promise?.data)

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
    }finally{
      setIsLoadingCourses(false)
    }
    
  }

  useEffect(() => {
    (async() =>{
      setIsLoadingCourses(true)
      await findCourses();
      setIsLoadingCourses(false)
    })()
  }, [])


  return (
    <Box as="main">
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


      <Box
        as="div" display="flex" flexWrap="wrap" width="100%"
        mx="auto" justifyContent="center" marginTop="2.5rem"
        marginBottom="2.5rem"
        >
        {
          courses.length===0 &&
          <Text padding="1rem" textAlign="center" as="h2" fontSize="2rem" color="#fe7502">Aguarde, em breve teremos novidades!</Text>
        }
        {/* {listaCursos.map((dados, index) => (
          <CaixaCurso props={dados} key={index} />
        ))} */}
      </Box>
    </Box>
  );
}
