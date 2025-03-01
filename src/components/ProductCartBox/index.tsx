"use client"
import { useState } from "react";
import { Box, Text, Image, ButtonGroup, Spinner, Button } from "@chakra-ui/react";
import axios from "axios";
import { moneyFormat } from "@/app/Tools";
import { CourseDataInterface } from "@/app/cart/page";


interface ProductCartBoxInterface {
  courseData: CourseDataInterface;
  userId: number;
  setCoursesData: (newData: CourseDataInterface[]) => void;
}

export default function ProductCartBox({ courseData, userId, setCoursesData }: ProductCartBoxInterface) {

  const [carregando, setCarregando] = useState(false);
  const { course } = courseData;

  // async function removerDoCarrinho() {
  //     setCarregando(true)
  //     try {
  //         const promisse = await axios.delete(link)
  //         //atualizando carrinho
  //         setCursosNoCarrinho(promisse.data)
  //     } catch (e) {
  //         console.log("erro ao tentar remover do carrinho", e)
  //     }
  //     setCarregando(false)
  //     // setProdutoSelecionado()
  // }



  // async function fecharPedido() {
  //     setCarregando(true)
  //     try {
  //         const promisse = await axios.put(link)
  //         setCursosNoCarrinho(promisse.data)
  //     } catch (e) {
  //         console.log("Erro ao fechar pedido: ", e)
  //     }
  //     setCarregando(false)
  // }


  return (
    <Box
      display="flex"
      flexDir={{ md: "row", base: "column", }}
      alignItems="center"
      justifyContent={{ sm: "center", md: "left" }}
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
      <Image src={course.url} alt={course.name} borderRadius="md" mb="4" mr="8" maxW="300px" />

      <Box width="100%">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {course.name}
        </Text>

        <Box as="p" fontSize="lg" color="gray.600">
          10x de <Text as="span" fontSize="xl" fontWeight="bold"> R$ {moneyFormat(Number(course.price) / 10)}</Text>
        </Box>
        <Box as="p" color="green.600" fontSize="lg" fontWeight="bold">
          ou R$ {moneyFormat(course.descountedPrice)} à vista
        </Box>



        <Text fontSize="sm" color="gray.600" mb="2">
          Carga Horária: {course.workload}
        </Text>

        <Text fontSize="xs" color="gray.400">
          ID do Produto: {course.id}
        </Text>


        {!courseData.isOrderCompleted ?
          <ButtonGroup
            display="flex"
            flexDir={{ base: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
          >
            <Button
              // onClick={fecharPedido}
              color="white"
              minW="150px"
              backgroundColor="#206eb3"
              _hover={{ backgroundColor: "#175388" }}

            >
              {carregando ?
                <Spinner /> :
                "Fechar pedido"
              }
            </Button>
            <Button
              // onClick={removerDoCarrinho}
              color="white"
              minW="150px"
              backgroundColor="#ff4500"
              _hover={{ backgroundColor: "#ad2f02" }}
            >
              {carregando ?
                <Spinner /> :
                "Remover do carrinho"}
            </Button>
          </ButtonGroup> :

          <Text color={"#28a745"}>Você já possui este curso!</Text>
        }
      </Box>

    </Box>
  );
}
