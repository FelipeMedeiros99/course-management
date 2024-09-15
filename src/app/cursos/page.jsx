"use client"
import { Box } from "@chakra-ui/react"
import { useContext, useEffect } from "react";
import Contexto from "../Tools/Contexto";
import CaixaCurso from "@/app/Components/CaixaCurso"
import axios from "axios"

export default function Main() {
  const {setNavegacaoAtiva} = useContext(Contexto);
  useEffect(()=>{
    setNavegacaoAtiva(true)
  }, [])

  const linkServer = process.env.NEXT_PUBLIC_LINK_SERVER
    
    const {listaCursos, setListaCursos} = useContext(Contexto)
    
    async function buscarCursos() {
        try{
            const promessa = await axios.get(`${linkServer}/cursos`);
            return promessa.data;
        }catch(error){
            console.log("erro ao buscar curso: ", error)
            return []
        }
    }

    useEffect(()=>{
        async function carregarCursos(){
            const resposta = await buscarCursos();
            setListaCursos(resposta)
        }
        carregarCursos()
    }, [])


    console.log(listaCursos)

  return (
    <Box as="main">
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
                <CaixaCurso props={dados} key={index}/>
            ))}
        </Box>
    </Box>
  );
}
