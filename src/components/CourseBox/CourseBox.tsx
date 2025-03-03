"use client"
import { Box, Text, Image, Button, AlertContentProps } from "@chakra-ui/react"
import Link from "next/link";
import { FiClock, FiEdit, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

import { CourseInterface } from "@/app/(dashboard)/courses/page"
import { useRouter } from "next/navigation";
import { UserData } from "@/app/(dashboard)/courses/[id]/page";
import { InvalidTokenError, jwtDecode } from "jwt-decode";
import axiosConfigs from "@/config/axios.config";
import { AlertMessageInterface } from "../AlertMessage";
import { AxiosError } from "axios";
import { moneyFormat } from "@/app/Tools";

export interface CourseBoxParams {
  courseData: CourseInterface;
  setAlertVisibility: (newVisibility: boolean) => void
  setAlertMessageParams: (newAlertParams: Omit<AlertMessageInterface, "visibility">) => void
}
// import { converterEmMoedas } from "@/app/Tools";
// import ModeloBotao from "../ModeloBotao";
// import adicionarAoCarrinho from "@/app/Tools/adicionarAoCarrinho";
// import SpinCarregando from "../SpinCarregando";
// import { FiShoppingCart } from "react-icons/fi";
// import { FiEdit } from "react-icons/fi";
// import { FaDollarSign } from "react-icons/fa";

// {
//   "id": 2,
//   "name": "Web",
//   "url": "http://placeimg.com/640/480/abstract",
//   "price": 838.79,
//   "descountedPrice": 575.79,
//   "workload": 534,
//   "content": "Chief"
// }


// const {
//     nome,
//     preco,
//     carga_horaria: cargaHoraria,
//     preco_com_desconto: precoComDesconto,
//     conteudo,
//     url_foto: imagem,
//     id } = props;

export default function CourseBox({ courseData, setAlertVisibility, setAlertMessageParams }: CourseBoxParams) {
  const { content, descountedPrice, id, name, price, url, workload } = courseData;
  const [isLoading, setIsLoading] = useState(false)
  const link = `${id}`
  const router = useRouter()

  const addAtCart = async () => {
    try {
      setAlertVisibility(false)
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
        console.log(error)
      }
      router.push("/sign-in")

    } finally {
      setTimeout(() => {
        setAlertVisibility(false)
      }, 4000)
    }
  }


  return (
    <Box
      as="div"
      width="300px"
      height="460px"
      boxShadow='0 0 3px black'
      borderRadius="5px"
      padding={2}
      margin={2}
      color="#545454"
      position="relative"
    >

      <Link href={`/courses/${id}`}>
        <Image
          src={url}
          alt={name}
          width="100%"
          height="200px"
          objectFit="cover"
          borderRadius="md"
          mx="auto"

        />
        <Text
          display="flex"
          alignItems="center"
          fontSize="xl"
          fontWeight="700"
          height="100px"
          lineHeight="1"
          overflow="auto"
          textDecor="underline"
        >{name}</Text>

        <Text fontSize="md" height="25px" display="flex" alignItems="center">
          <FiClock style={{ marginRight: '8px' }} size="15px" />
          Carga horária:
          <Box as="strong" ml={1}>{workload}h</Box>
        </Text>
        <Text fontSize="xl" fontWeight="900" >R${moneyFormat(descountedPrice)}</Text>
      </Link>
      <Box as="div" position="absolute" bottom='0' width="100%" left="0" padding="2">
        <Button
          margin="0"
          loading={isLoading}
          onClick={addAtCart}
          backgroundColor="#206eb3"
          _hover={{ backgroundColor: "#175388" }}
          color="white"
        >
          <FiShoppingCart />
          "Adicionar ao carrinho"
        </Button>
      </Box>

    </Box>


  )
}