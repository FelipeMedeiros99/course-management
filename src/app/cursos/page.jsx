"use client"
import { Box } from "@chakra-ui/react"
import ContainerCursos from "../Components/ContainerCursos";
import { useContext, useEffect } from "react";
import Contexto from "../Tools/Contexto";


export default function Main() {
  const {setNavegacaoAtiva} = useContext(Contexto);
  useEffect(()=>{
    setNavegacaoAtiva(true)
  }, [])
  return (
    <Box as="main">
      <ContainerCursos/>
    </Box>
  );
}
