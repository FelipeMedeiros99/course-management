import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import styles from "./style.module.css"
import { converterEmMoedas } from "@/app/Tools";

export default function ContainerCurso({props}) {
    const { nome, preco, cargaHoraria, precoComDesconto, conteudo, imagem } = props;
   
    return (

        <Box 
            as="div"
            width="200px"
            height="400px"
            boxShadow='0 0 3px black'
            borderRadius="5px"
            padding={2}
            margin={2}
        >
            <Image
                src={imagem}
                alt={nome}
                width="100%"
                height="200px"
                objectFit="cover" 
                borderRadius="md" // Adiciona bordas arredondadas
                mx="auto" // Centraliza a imagem horizontalmente
                
            />
            <p className={styles.nome}>{nome}</p>
            <p className={styles.preco}>R${converterEmMoedas(precoComDesconto)}</p>
            <p className={styles.cargaHoraria}>Carga horária: <span>{cargaHoraria}</span></p>
        </Box>
    )
}