import { Box, Text, Image, Badge, Stack } from "@chakra-ui/react";

export default function CaixaProdutoCarrinho({ imagem, nome, preco, cargaHoraria, precoComDesconto, conteudo, id }) {
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
                    <Badge colorScheme="green" fontSize="lg">
                        R$ {preco}
                    </Badge>
                </Stack>

                <Text fontSize="sm" color="gray.600" mb="2">
                    Carga Horária: {cargaHoraria}
                </Text>

                <Text fontSize="xs" color="gray.400">
                    ID do Produto: {id}
                </Text>
            </Box>
        </Box>
    );
}
