"use client"

import { Box, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";

// import CaixaCurso from "@/app/Components/CaixaCurso"
import axiosConfigs from "@/config/axios.config";

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
  // hooks
  const [loadingCourses, setLoadingCourses] = useState(false)
  const [courses, setCourses] = useState<CourseInterface[]>([])

  async function findCourses():Promise<void>{
    try {
      const promise = await axiosConfigs.getCourses();
      if(promise?.status === 200){
        setCourses(promise?.data)
      }
    } catch (error) {
      console.log("erro ao buscar curso: ", error)
      setCourses([])
    }
  }

  useEffect(() => {
    (async() =>{
      setLoadingCourses(true)
      await findCourses();
      setLoadingCourses(false)
    })()
  }, [])


  return (
    <Box as="main">
      {/* {loadingCourses &&
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="40vh"
        >

          <Spinner
            width={"100px"}
            height={"100px"}
            color="#fe7502" />
        </Box>
      } */}

      {/* <Box
        as="div" display="flex" flexWrap="wrap" width="100%"
        mx="auto" justifyContent="center" marginTop="40px"
        marginBottom="40px"
      > */}
        {/* {listaCursos.map((dados, index) => (
          <CaixaCurso props={dados} key={index} />
        ))} */}
      {/* </Box> */}
    </Box>
  );
}
