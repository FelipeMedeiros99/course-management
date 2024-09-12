import { Box, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import styles from "./style.module.css"
import { converterEmMoedas } from "@/app/Tools";
import Link from "next/link";

export default function ContainerCurso({ props }) {
    const { nome, preco, cargaHoraria, precoComDesconto, conteudo, imagem, id } = props;

    return (
        <Link href={`/curso/${id}`}>
            <Box
                as="div"
                width="250px"
                height="400px"
                boxShadow='0 0 3px black'
                borderRadius="5px"
                padding={2}
                margin={2}
                color="#545454"
            >
                <Image
                    src={imagem}
                    alt={nome}
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    borderRadius="md"
                    mx="auto"

                />
                <Text
                    display="flex"
                    alignItems="center"
                    fontSize="xl"
                    fontWeight="700"
                    height="100px"
                    lineHeight="1"
                    overflow="auto"
                >{nome}</Text>

                <Text
                    fontSize="md"
                    height="50px"
                    textAlign="bottom"
                >Carga horária: <strong>{cargaHoraria}</strong></Text>
                <Text
                    fontSize="xl"
                    fontWeight="900">R${converterEmMoedas(precoComDesconto)}</Text>
            </Box>

        </Link>

    )
}