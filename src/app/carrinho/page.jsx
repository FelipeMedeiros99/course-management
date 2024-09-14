import { Box, Text, Heading } from "@chakra-ui/react";
import CaixaProdutoCarrinho from "@/app/Components/CaixaProdutoCarrinho";

export default function CarrinhoUsuario({ params, searchParams }) {
    const idCarrinhoUsuario = params.id;
    const nome = decodeURIComponent(searchParams.nome);
    const produtos = JSON?.parse(decodeURIComponent(searchParams.produtos));

    return (
        <Box 
            maxW="800px" 
            mx="auto" 
            p="6" 
            boxShadow="lg" 
            borderRadius="md" 
            mt="6"
        >
            <Heading as="h2" size="lg" mb="4" textAlign="center" color="#fe7502">
                Carrinho do Usuário
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb="2" color="blue.500">
                ID do Carrinho: {idCarrinhoUsuario}
            </Text>
            <Text fontSize="lg" mb="6" color="gray.700">
                Nome: {nome}
            </Text>
            <Box>
                {produtos.map(({ imagem, nome, preco, cargaHoraria, precoComDesconto, conteudo, id }, index) => (
                    <CaixaProdutoCarrinho
                        key={id}
                        imagem={imagem}
                        nome={nome}
                        preco={preco}
                        cargaHoraria={cargaHoraria}
                        precoComDesconto={precoComDesconto}
                        conteudo={conteudo}
                        id={id}
                    />
                ))}
            </Box>
        </Box>
    );
}
