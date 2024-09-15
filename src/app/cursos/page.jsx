"use client"
import { Box, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import Contexto from "../Tools/Contexto";
import CaixaCurso from "@/app/Components/CaixaCurso"
import axios from "axios"

export default function Main() {
  const { setNavegacaoAtiva } = useContext(Contexto);
  const [carregandoCursos, setCarregandoCursos] = useState(false)

  useEffect(() => {
    setNavegacaoAtiva(true)
  }, [])

  const linkServer = process.env.NEXT_PUBLIC_LINK_SERVER

  const { listaCursos, setListaCursos } = useContext(Contexto)

  async function buscarCursos() {
    try {
      const promessa = await axios.get(`${linkServer}/cursos`);
      return promessa.data;
    } catch (error) {
      console.log("erro ao buscar curso: ", error)
      return []
    }
  }

  useEffect(() => {
    async function carregarCursos() {
      setCarregandoCursos(true)
      const resposta = await buscarCursos();
      setListaCursos(resposta)
      setCarregandoCursos(false)
    }

    carregarCursos()

  }, [])


  console.log(listaCursos)

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
        as="div"
        display="flex"
        flexWrap="wrap"
        width="100%"
        mx="auto"
        justifyContent="center"
        marginTop="40px"
        marginBottom="40px"
      >
        {listaCursos.map((dados, index) => (
          <CaixaCurso props={dados} key={index} />
        ))}
      </Box>
    </Box>
  );
}
