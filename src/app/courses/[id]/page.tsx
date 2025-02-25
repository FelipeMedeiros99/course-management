"use client"

import { Box, Image, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { AxiosError } from "axios";

import { CourseInterface } from "../page";
import axiosConfigs from "@/config/axios.config";
import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
// import adicionarAoCarrinho from "@/app/Tools/adicionarAoCarrinho";


export default function DetalhesCurso({params}: {params: {id: string}}){

  const router = useRouter()

  // const pathName = usePathname()
  // const nome = decodeURIComponent(searchParams.nome || '')
  // const preco = decodeURIComponent(searchParams.preco || '')
  // const cargaHoraria = decodeURIComponent(searchParams.cargaHoraria || '')
  // const precoComDesconto = decodeURIComponent(searchParams.precoComDesconto || '')
  // const conteudo = decodeURIComponent(searchParams.conteudo || '')
  // const imagem = decodeURIComponent(searchParams.imagem || '')
  // const id = decodeURIComponent(params.id || '')

  const [courseData, setCourseData] = useState<CourseInterface>({content: "", descountedPrice: 0, id: NaN, name: "", price: NaN, url: "", workload: 0});
  const [alertVisibility, setAlertVisibility] = useState(false)
  const [alertMessageParams, setAlertMessageParams] = useState<Omit<AlertMessageInterface, "visibility">>({ message: "", status: "neutral" });

  useEffect(()=>{
    (async()=>{
      try{
        const id = +params.id
        const response = await axiosConfigs.getCourse(id) 
        console.log(response)
      }catch (error: AxiosError | any) {
        setAlertVisibility(true)
        const messageError = error?.response?.data?.message || "";
  
        switch(messageError){
          case "Invalid token format": 
            setAlertMessageParams({status: "error", message: "Token inválido"});
            break;
  
          case "Expired token":
            setAlertMessageParams({status: "error", message: "O token expirou, faça login novamente"});
            break;
  
          default:
            setAlertMessageParams({status: "error", message: "Um erro inesperado aconteceu"});
            console.log("erro: ", error)
          }
        setTimeout(()=>{
          setAlertVisibility(false)
          router.push("/sign-in")        
        }, 4000)
      }
    })()

  }, [])

  function editarCurso() {
    // const url = `/cadastrar?nome=${encodeURIComponent(nome)}&preco=${encodeURIComponent(preco)}&cargaHoraria=${encodeURIComponent(cargaHoraria)}&precoComDesconto=${encodeURIComponent(precoComDesconto)}&conteudo=${encodeURIComponent(conteudo)}&imagem=${encodeURIComponent(imagem)}&id=${encodeURIComponent(id)}`;
    // router.push(url)
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
      <AlertMessage message={alertMessageParams.message} status={alertMessageParams.status} visibility={alertVisibility}/>
      {/* <Box
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
        <Text fontSize="lg" display="flex" height="30px" alignItems="center">
          <FiClock style={{ marginRight: '8px' }} size="15px" /> Carga Horária: {cargaHoraria}
        </Text>
        <Text fontSize="lg">10x de <Text as="span" fontWeight="700">R${converterEmMoedas(Number(preco) / 10)}</Text></Text>
        <Text fontSize="lg" fontWeight="bold" color="green.500">ou R${converterEmMoedas(Number(precoComDesconto))} à vista</Text>

        <ButtonGroup
          paddingTop="30px"
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"

        >

          <Button
            bg="#206eb3"
            color="white"
            onClick={() => adicionarAoCarrinho(id)}
            _hover={{ backgroundColor: "#0e3e68" }}
            rightIcon={<FiShoppingCart />}  // Adiciona o ícone de carrinho de compras
          >
            Adicionar ao carrinho
          </Button>

          <Button
            onClick={editarCurso}
            color="white"
            bg="#e5521e"
            _hover={{ backgroundColor: "#a73d16" }}
            rightIcon={<FiEdit />}  // Adiciona o ícone de edição (lápis)
          >
            Editar curso 
          </Button>
        </ButtonGroup>
      </Box> */}
    </Box>

  );
}
