"use client"
import { Box, Text, Button, Image, VStack, HStack } from "@chakra-ui/react"
import Link from "next/link";
import { FiClock, FiEdit, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
// import Image from "next/image";

import { CourseInterface } from "@/app/(dashboard)/courses/page"
import { useRouter } from "next/navigation";
import { UserData } from "@/app/(dashboard)/courses/[id]/page";
import { InvalidTokenError, jwtDecode } from "jwt-decode";
import axiosConfigs from "@/config/axios.config";
import { AlertMessageInterface } from "../AlertMessage";
import { AxiosError } from "axios";
import { moneyFormat } from "@/app/Tools";

import style from "./style.module.css"

export interface CourseBoxParams {
  courseData: CourseInterface;
  setAlertVisibility: (newVisibility: boolean) => void
  setAlertMessageParams: (newAlertParams: Omit<AlertMessageInterface, "visibility">) => void
}

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
        setAlertMessageParams({ message: "Um erro inesperado aconteceu, contate o desenvolvedor.", status: "error" })
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
    <VStack className={style.container} >

      <Link href={`/courses/${id}`} className={style.link}>
        <Image className={style.image} src={url} alt={name} borderRadius="0.4rem"/>
        <Text className={style.title} >{name}</Text>
        
        <HStack className={style.workloadContainer}> 
          <FiClock/>
          <Text>Carga horária:</Text>
          <Text as="strong">{workload}h</Text>
        </HStack>

        <Text className={style.price}>R${moneyFormat(descountedPrice)}</Text>

      </Link>

        <Button className={style.button} loading={isLoading} onClick={addAtCart} >
          <FiShoppingCart />
          Adicionar ao carrinho
        </Button>
    </VStack>


  )
}