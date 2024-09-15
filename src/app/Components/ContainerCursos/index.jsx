import { Box } from "@chakra-ui/react"
import CaixaCurso from "../CaixaCurso"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Contexto from "@/app/Tools/Contexto"

export default function ContainerCursos(props) {
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
    )
}