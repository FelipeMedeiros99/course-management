"use client"
import { useState } from "react";
import { Box, Text, Image, ButtonGroup, Spinner, Button, HStack, VStack } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { moneyFormat } from "@/app/Tools";
import { CourseDataInterface } from "@/app/(dashboard)/cart/page";
import axiosConfigs from "@/config/axios.config";
import { AlertMessageInterface } from "../AlertMessage";
import { InvalidTokenError } from "jwt-decode";
import { useRouter } from "next/navigation";


interface ProductCartBoxInterface {
  courseData: CourseDataInterface;
  userId: number;
  setCoursesData: (newData: CourseDataInterface[]) => void;
  setAlertMessageParams: (newAlertdata: Omit<AlertMessageInterface, "visibility">) => void;
  setAlertVisibility: (newVisibility: boolean) => void;
}

export default function ProductCartBox({ courseData, userId, setCoursesData, setAlertMessageParams, setAlertVisibility }: ProductCartBoxInterface) {

  const [carregando, setCarregando] = useState(false);
  const { course } = courseData;
  const router = useRouter()

  async function validFunction(fn: () => Promise<void>) {
    setCarregando(true)
    try {
      await fn()
    } catch (error: AxiosError | any) {
      setAlertVisibility(true)
      if (error instanceof InvalidTokenError) {
        setAlertMessageParams({ status: "error", message: "O token expirou, faça login novamente" });
      } else {
        const messageError = error?.response?.data?.message || "";
        switch (messageError) {
          case "Invalid token format":
          case "Expired token":
            setAlertMessageParams({ status: "error", message: "O token expirou, faça login novamente" });
            break;

          default:
            setAlertMessageParams({ status: "error", message: "Um erro inesperado aconteceu" });
            console.log("erro: ", error)
        }
      }
      setTimeout(() => {
        setAlertVisibility(false)
        router.push("/sign-in")
      }, 4000)
    } finally {
      setCarregando(false)
    }

  }

  const updateCart = async () => {
    const coursesRequestResponse = await axiosConfigs.getUserCart(userId)
    setCoursesData(coursesRequestResponse.data)
  }

  async function removeAtCart() {
    validFunction(async () => {
      await axiosConfigs.removeCourseAtCart(userId, courseData.id);
      await updateCart()
    })
  }

  async function finishOrder() {
    validFunction(async () => {
      const promisse = await axiosConfigs.updateCart(userId, courseData.id)
      await updateCart()
    })
  }


  return (
    <HStack
      display="flex"
      flexDir={{ md: "row", base: "column", }}
      alignItems="center"
      justifyContent={{ sm: "center", md: "left" }}
      borderWidth="0.2rem"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      padding="1rem 1rem 2rem 1rem"
      mb="0.5rem"
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.03)" }}

    >
      <VStack width="18rem" minWidth="18rem" height="15rem" justifyContent="center" padding="0.5rem">
        <Image src={course.url} alt={course.name} borderRadius="0.5rem" />
      </VStack>

      <VStack alignItems="start" marginLeft="0.5rem">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {course.name}
        </Text>
        <Box as="p" color="green.600" fontSize="lg" fontWeight="bold">
          R$ {moneyFormat(course.descountedPrice)} à vista
        </Box>

        <Box as="p" fontSize="lg" color="gray.600">
          ou 10x de <Text as="span" fontSize="xl" fontWeight="bold"> R$ {moneyFormat(Number(course.price) / 10)}</Text>
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
              onClick={finishOrder}
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
              onClick={removeAtCart}
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
      </VStack>

    </HStack>
  );
}
