import { converterEmMoedas } from "@/app/Tools";
import { Box, Image, Text, Button, ButtonGroup } from "@chakra-ui/react";
import ModeloBotao from "../../Components/ModeloBotao"


export default function DetalhesCurso({ params, searchParams }) {
  const { nome, preco, cargaHoraria, precoComDesconto, conteudo, imagem, id } = searchParams;

  return (
    <Box
      as="div"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="auto"
      minH="110vh"
      width="100%"
      flexDirection={{ base: "column", md: "row" }} 
      padding="20px"  
    >
      <Box
        as="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={{ base: "100%", md: "50%" }} // Imagem ocupa 100% da largura em mobile, 50% em maior
        maxW="400px"
        height="auto"
      >
        <Image
          src={imagem}
          alt={nome}
          width={{base: "auto", md: "100%"}}
          height="auto" 
          objectFit="cover"
          borderRadius="md"
          boxShadow="md" // Sombra para destaque
        />
      </Box>

      <Box
        as="div"
        width={{ base: "100%", md: "50%" }} // Informações ocupam 50% da largura em telas grandes 
        padding={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2} // Espaço entre os textos
      >
        <Text fontSize="2xl" fontWeight="bold">{nome}</Text>
        <Text fontSize="md" color="gray.600">{conteudo}</Text>
        <Text fontSize="lg">Carga Horária: {cargaHoraria}</Text>
        <Text fontSize="lg">Preço: R${converterEmMoedas(Number(preco))}</Text>
        <Text fontSize="lg" fontWeight="bold" color="green.500">Desconto: R${converterEmMoedas(Number(precoComDesconto))  }</Text>
        
        <ButtonGroup 
          paddingTop="30px" 
          display="flex" 
          flexDirection={{base:"column", sm:"column", md:"row"}}
          alignItems="center"
          justifyContent="center"
        >
          
          <ModeloBotao bg="#206eb3">Adicionar ao carrinho</ModeloBotao>
          <ModeloBotao bg="#fbff29">Editar curso</ModeloBotao>
          <ModeloBotao bg="#fe7502">Deletar curso</ModeloBotao>
        </ButtonGroup>
      </Box>
    </Box>


  );
}
