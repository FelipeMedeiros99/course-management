import listaCursos from "@/app/data"
import { Box } from "@chakra-ui/react"
import CaixaCurso from "../CaixaCurso"

export default function ContainerCursos(props) {
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