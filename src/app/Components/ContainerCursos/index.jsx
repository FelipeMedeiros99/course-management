import listaCursos from "@/app/data"
import ContainerCurso from "../CaixaCurso"
import { Box } from "@chakra-ui/react"

export default function ContainerCursos(props) {
    return (

        <Box >
            {listaCursos.map((dados, index) => (
                <ContainerCurso props={dados} />
            ))}
        </Box>
    )
}