"use client"
import { converterEmMoedas } from "@/app/Tools";
import { Box, Image, Text, Button, ButtonGroup, background } from "@chakra-ui/react";
import ModeloBotao from "../../Components/ModeloBotao"
import { useRouter } from "next/navigation";
import adicionarAoCarrinho from "@/app/Tools/adicionarAoCarrinho";


export default function DetalhesCurso({ params, searchParams }) {


  const nome = decodeURIComponent(searchParams.nome || '')
  const preco = decodeURIComponent(searchParams.preco || '')
  const cargaHoraria = decodeURIComponent(searchParams.cargaHoraria || '')
  const precoComDesconto = decodeURIComponent(searchParams.precoComDesconto || '')
  const conteudo = decodeURIComponent(searchParams.conteudo || '')
  const imagem = decodeURIComponent(searchParams.imagem || '')
  const id = decodeURIComponent(params.id || '')
  const router = useRouter()

  function editarCurso() {
    const url = `/cadastrar?nome=${encodeURIComponent(nome)}&preco=${encodeURIComponent(preco)}&cargaHoraria=${encodeURIComponent(cargaHoraria)}&precoComDesconto=${encodeURIComponent(precoComDesconto)}&conteudo=${encodeURIComponent(conteudo)}&imagem=${encodeURIComponent(imagem)}&id=${encodeURIComponent(id)}`;
    router.push(url)
  }

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
          width={{ base: "auto", md: "100%" }}
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
        <Text fontSize="lg" fontWeight="bold" color="green.500">Desconto: R${converterEmMoedas(Number(precoComDesconto))}</Text>

        <ButtonGroup
          paddingTop="30px"
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"

        >

          <ModeloBotao
            bg="#206eb3"
            color="white"
            onClick={() => adicionarAoCarrinho(id)}
            _hover={{ backgroundColor: "#0e3e68" }}>
            Adicionar ao carrinho
          </ModeloBotao>

          <ModeloBotao 
            onClick={editarCurso} 
            color="white" 
            bg="#fbff29"
            _hover={{backgroundColor:"#a3a519"}}
            >Editar curso</ModeloBotao>
        </ButtonGroup>
      </Box>
    </Box>


  );
}
