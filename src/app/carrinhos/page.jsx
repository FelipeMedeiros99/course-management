import { Box, Heading, Text, Flex } from "@chakra-ui/react"
import Link from "next/link"

const carrinho = [

    {
        id: 1,
        nome: "joao",
        produtos: [{
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
            nome: "Curso de gestão",
            preco: 8567.50,
            cargaHoraria: "120h",
            precoComDesconto: 8000,
            conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
            id: 12
        },
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
            nome: "Curso de gestão",
            preco: 8567.50,
            cargaHoraria: "120h",
            precoComDesconto: 8000,
            conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
            id: 12
        }]
    },
    {
        id: 2,
        nome: "Pedro Lima",
        produtos: [{
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
            nome: "Curso de gestão",
            preco: 8567.50,
            cargaHoraria: "120h",
            precoComDesconto: 8000,
            conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
            id: 12
        },
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
            nome: "Curso de gestão",
            preco: 8567.50,
            cargaHoraria: "120h",
            precoComDesconto: 8000,
            conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
            id: 12
        }]
    },
    {
        id: 3,
        nome: "Lima Pedro",
        produtos: [{
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
            nome: "Curso de gestão",
            preco: 8567.50,
            cargaHoraria: "120h",
            precoComDesconto: 8000,
            conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
            id: 12
        },
        {
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hExi1X1xmX7UHZyw9b2wx79Xv_fOvXaYAvvqwUtyqeEmrSlQXfMS1sl2COBiU69VR1g&usqp=CAU",
            nome: "Curso de gestão",
            preco: 8567.50,
            cargaHoraria: "120h",
            precoComDesconto: 8000,
            conteudo: "https://youtu.be/OedsS_4BnpM?list=PLqZ2ci9UnMnIUFo3Wo_QuQJWhpOf_Q4h5",
            id: 12
        }]
    }
]


export default function Carrinho() {
    return (
        <Box p="6" maxW="container.lg" mx="auto" bg="gray.50" borderRadius="md" boxShadow="md">
            <Heading as="h2" mb="6" fontSize="2xl" textAlign="center" color="#fe7502">
                Lista de Carrinhos
            </Heading>

            {carrinho.map(({ id, nome, produtos }) => (
                <Link
                    key={id}
                    href={`/carrinhos/${id}?nome=${encodeURIComponent(nome)}&produtos=${encodeURIComponent(JSON.stringify(produtos))}`}
                    passHref
                >
                    <Flex
                        direction="row"
                        align="center"
                        justify="space-between"
                        bg="white"
                        borderRadius="md"
                        p="4"
                        mb="4"
                        boxShadow="sm"
                        _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
                        transition="all 0.3s"
                        cursor="pointer"
                    >
                        <Text fontWeight="semibold" fontSize="lg" color="teal.800">
                            {nome}
                        </Text>
                    </Flex>
                </Link>
            ))}
        </Box>
    )
}