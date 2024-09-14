import { Box } from "@chakra-ui/react"
import CaixaCurso from "../CaixaCurso"
import listaCursos from "@/app/data"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ContainerCursos(props) {
    const [listaCursos, setListaCursos] = useState([])
    const linkServer = process.env.NEXT_PUBLIC_LINK_SERVER

    
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