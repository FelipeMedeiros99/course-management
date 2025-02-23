"use client"
// modulos externos
import { Box, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";


// modulos internos
// import CaixaCurso from "@/app/Components/CaixaCurso"
import Context from "@/context";
import axiosConfigs from "@/config/axios.config";


export default function Main() {
  // hooks
  const [loadingCourses, setLoadingCourses] = useState(false)
  // const { setNavegacaoAtiva, listaCursos, setListaCursos} = useContext(Context);
  
  // effects
  // useEffect(() => {
  //   setNavegacaoAtiva(true)
  // }, [])

  useEffect(() => {
    async function carregarCursos() {
      setLoadingCourses(true)
      const resposta = await buscarCursos();
      setListaCursos(resposta)
      setLoadingCourses(false)
    }
    carregarCursos()
  }, [])


  // functions
  async function buscarCursos() {
    try {
      const promise = await axiosConfigs.getCourses();
       console.log(promise.data);
    } catch (error) {
      console.log("erro ao buscar curso: ", error)
      return []
    }
  }

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
