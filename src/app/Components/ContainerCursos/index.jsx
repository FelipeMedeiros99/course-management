import listaCursos from "@/app/data"
import CixaCurso from "../CaixaCurso"
import { Box } from "@chakra-ui/react"

export default function ContainerCursos(props) {
    return (

        <Box 
            as="div"
            display="flex"
        >
            {listaCursos.map((dados, index) => (
                <CaixaCurso props={dados} key={index}/>
            ))}
        </Box>
    )
}