import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"


export default function ContainerCurso({ nome, preco, cargaHoraria, precoComDesconto, conteudo, imagem }) {

    return (

        <Box 
            as="div"
        >
        
            <Image src={imagem} alt={nome} width={100} height={100} />
            <p>{nome}</p>
            <p>{preco}</p>
            <p>{cargaHoraria}</p>
            <p>{precoComDesconto}</p>
            <p>{conteudo}</p>
        </Box>
    )
}