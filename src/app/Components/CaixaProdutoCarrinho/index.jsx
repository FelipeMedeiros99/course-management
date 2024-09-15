import { Box, Text, Image, Badge, Stack, ButtonGroup, Button } from "@chakra-ui/react";
import ModeloBotao from "../ModeloBotao";
import axios from "axios";

export default function CaixaProdutoCarrinho({idDoCarrinho, produtosSelecionados, setProdutoSelecionado, imagem, nome, preco, cargaHoraria, precoComDesconto, conteudo, id }) {
    async function removerDoCarrinho(){
        const link =  `${process.env.NEXT_PUBLIC_LINK_SERVER}/carrinho?id=${idDoCarrinho}&usuario_id=${JSON.parse(localStorage.getItem("usuario")).id}`
        console.log(link)
        try{
            const promisse = await axios.delete(link)
            //atualizando carrinho
            setProdutoSelecionado(promisse.data)
            console.log("removido: ", promisse)
        }catch(e){
            console.log("erro ao tentar remover do carrinho", e.response)
        }
        
        // setProdutoSelecionado()
    }

    return (
        <Box    
            display="flex"
            flexDir={{md:"row", base:"column", }}
            alignItems="center"
            justifyContent={{sm:"center", md: "space-around"}}
            as="div" 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md" 
            p="4" 
            mb="6" 
            bg="white"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.03)" }}

        >
            <Image src={imagem} alt={nome} borderRadius="md" mb="4"  maxW="300px"/>

            <Box>
                <Text fontSize="xl" fontWeight="bold" mb="2">
                    {nome}
                </Text>

                <Stack direction="row" align="center" justify="space-between" mb="2">
                    <Badge fontSize="lg">
                        Parcelado: R$ {preco}
                    </Badge>
                </Stack>
                
                <Stack direction="row" align="center" justify="space-between" mb="2">
                    <Badge colorScheme="green" fontSize="lg">
                        Avista: R$ {precoComDesconto}
                    </Badge>
                </Stack>

                

                <Text fontSize="sm" color="gray.600" mb="2">
                    Carga Horária: {cargaHoraria}
                </Text>

                <Text fontSize="xs" color="gray.400">
                    ID do Produto: {id}
                </Text>


                <ButtonGroup>
                    <ModeloBotao  color="white" backgroundColor="#206eb3">Fechar pedido</ModeloBotao>
                    <ModeloBotao onClick={removerDoCarrinho} color="white" backgroundColor="#ff4500">Remover do carrinho</ModeloBotao>
                </ButtonGroup>
            </Box>
        
        </Box>
    );
}
