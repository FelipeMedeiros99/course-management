"use client"
// modulos externos
import { Box, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import axios from "axios"


// modulos internos
import CaixaCurso from "@/app/Components/CaixaCurso"
import Contexto from "../Tools/Contexto";


export default function Main() {
  // hooks
  const [carregandoCursos, setCarregandoCursos] = useState(false)
  const { setNavegacaoAtiva, listaCursos, setListaCursos} = useContext(Contexto);
  
  // vars
  const linkServer = process.env.NEXT_PUBLIC_LINK_SERVER

  // effects
  useEffect(() => {
    setNavegacaoAtiva(true)
  }, [])

  useEffect(() => {
    async function carregarCursos() {
      setCarregandoCursos(true)
      const resposta = await buscarCursos();
      setListaCursos(resposta)
      setCarregandoCursos(false)
    }
    carregarCursos()
  }, [])


  // functions
  async function buscarCursos() {
    try {
      const promessa = await axios.get(`${linkServer}/cursos`);
      return promessa.data;
    } catch (error) {
      console.log("erro ao buscar curso: ", error)
      return []
    }
  }

  return (
    <Box as="main">
      {carregandoCursos &&
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
      }
      <Box
        as="div" display="flex" flexWrap="wrap" width="100%"
        mx="auto" justifyContent="center" marginTop="40px"
        marginBottom="40px"
      >
        {listaCursos.map((dados, index) => (
          <CaixaCurso props={dados} key={index} />
        ))}
      </Box>
    </Box>
  );
}
