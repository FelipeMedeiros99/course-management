import { Box, Heading, Text } from "@chakra-ui/react"
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
        nome: "Pedro",
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
        nome: "Lima",
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
        <Box as="div">
            <Heading as="h2">Lista de Carrinhos</Heading>

            {carrinho.map(({id, nome, produtos}, index) => (
                <Link key={index} href={`carrinho/${id}?nome=${nome}&produtos=${encodeURIComponent(JSON.stringify(produtos))}`}>
                    <Box as="div"
                        display="flex"
                        alignItems="center"
                        margin="10px"
                        borderRadius="5px"
                        padding="5px"
                        width="100%"
                        height="50px"
                        maxW="300px"
                        boxShadow="0 0 6px black"

                    >
                        <Text>{nome}</Text>
                    </Box>
                </Link>
            ))}
        </Box>
    )
}