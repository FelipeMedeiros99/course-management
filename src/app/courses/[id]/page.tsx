"use client"

import { Box, Text, Button, ButtonGroup, Image, HStack, VStack, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { InvalidTokenError, jwtDecode } from "jwt-decode"
import { FiShoppingCart } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { AxiosError, AxiosResponse } from "axios";

import { CourseInterface } from "../page";
import axiosConfigs from "@/config/axios.config";
import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
import { moneyFormat } from "@/app/Tools";
// import adicionarAoCarrinho from "@/app/Tools/adicionarAoCarrinho";

export interface UserData {
  id: number,
  email: string,
  name: string,
  iat: number,
  exp: number
}

export default function DetalhesCurso({ params }: { params: { id: string } }) {

  const router = useRouter()
  const [courseData, setCourseData] = useState<CourseInterface>({ content: "", descountedPrice: 0, id: NaN, name: "", price: NaN, url: "", workload: 0 });
  const [alertVisibility, setAlertVisibility] = useState(false)
  const [alertMessageParams, setAlertMessageParams] = useState<Omit<AlertMessageInterface, "visibility">>({ message: "", status: "neutral" });

  const addAtCart = async () => {
    try {
      const token = localStorage.getItem("userToken")
      const userData: UserData | null = jwtDecode(token!);
      const response = await axiosConfigs.addCourseAtCart(userData?.id!, courseData.id)
      if (response.status === 202) {
        setAlertVisibility(true)
        setAlertMessageParams({ message: "Curso adicionado ao carrinho", status: "success" })
      };
    } catch (error: InvalidTokenError | AxiosError | any) {
      setAlertVisibility(true)
      if (error?.status === 409) {
        return setAlertMessageParams({ message: "Este curso já está no seu carrinho", status: "success" })
      } else if (error instanceof InvalidTokenError) {
        setAlertMessageParams({ message: "O token expirou, faça login novamente", status: "error" })
      } else {
        setAlertMessageParams({ message: "Um erro inesperado aconteceu, tente novamente mais tarde", status: "error" })
        console.log(error)
      }
      router.push("/sign-in")

    } finally {
      setTimeout(() => {
        setAlertVisibility(false)
      }, 4000)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const id = +params.id;
        const response = await axiosConfigs.getCourse(id);
        setCourseData(response.data)
      } catch (error: AxiosError | any) {
        setAlertVisibility(true)
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
        setTimeout(() => {
          setAlertVisibility(false)
          router.push("/sign-in")
        }, 4000)
      }
    })()

  }, [])

  function editarCurso() {
    router.push(`/register?courseId=${courseData.id}`)
  }

  return (
    <VStack
      minH="calc(100% - 12rem)"
      width="100%"
      justifyContent="center"
    >
      <AlertMessage message={alertMessageParams.message} status={alertMessageParams.status} visibility={alertVisibility} />
      {courseData.content ?
        <HStack
          justifyContent="center"
          padding="1rem"
          flexDirection={{ base: "column", md: "row" }}
          borderRadius="1rem"
          boxShadow="0 0rem 0.2rem #0000007a"
        >
          <Box
            as="div"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={{ base: "100%", md: "50%" }}
            maxW="400px"
            height="auto"
          >
            <Image
              src={courseData.url}
              alt={courseData.name}
              width={{ base: "auto", md: "100%" }}
              height="auto"
              objectFit="cover"
              borderRadius="md"
              boxShadow="md"
            />
          </Box>
          <VStack
            width={{ base: "100%", md: "50%" }}
            alignItems={{ base: "center", md: "flex-start" }}
            padding="1rem"
          >
            <Text fontSize="2xl" fontWeight="bold">{courseData.name}</Text>
            <Text fontSize="md" color="gray.600">{courseData.content}</Text>
            <Text fontSize="lg" display="flex" height="30px" alignItems="center">
              <FiClock style={{ marginRight: '8px' }} size="15px" /> Carga Horária: {courseData.workload}
            </Text>
            <Text fontSize="lg">10x de <Text as="span" fontWeight="700">R${moneyFormat(courseData.price / 10)}</Text></Text>
            <Text fontSize="lg" fontWeight="bold" color="green.500">ou R${moneyFormat(courseData.descountedPrice)} à vista</Text>
            <ButtonGroup
              width="100%"
              display="flex"
              flexDirection={{ base: "column" }}
              alignItems="center"
              justifyContent="center"
            >
              <Button
                width="100%"
                bg="#206eb3"
                color="white"
                onClick={addAtCart}
                _hover={{ backgroundColor: "#0e3e68" }}
              >
                <FiShoppingCart />
                Adicionar ao carrinho
              </Button>
              <Button
                width="100%"
                onClick={editarCurso}
                color="white"
                bg="#e5521e"
                _hover={{ backgroundColor: "#a73d16" }}
              >
                <FiEdit />
                Editar curso
              </Button>
            </ButtonGroup>
          </VStack>
        </HStack> :
        <Spinner width={"7rem"} height={"7rem"} color="#fe7502" />
      }


    </VStack>

  );
}
