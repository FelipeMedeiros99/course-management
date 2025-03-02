"use client";
import { Box, Heading, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";

import CaixaProdutoCarrinho from "@/components/ProductCartBox";
import axiosConfigs from "@/config/axios.config";

export interface UserDataInterface {
  id: number,
  email: string,
  name: string,
  iat?: number,
  exp?: number
}

export interface CourseDataInterface {
  id: number,
  isOrderCompleted: boolean,
  course: {
    id: number,
    name: string,
    url: string,
    price: number,
    descountedPrice: number,
    workload: number,
    content: string
  }
}


export default function CarrinhoUsuario() {
  const [isLoadingCourses, setIsLoadingCourses] = useState<boolean>(true);
  const [coursesData, setCoursesData] = useState<CourseDataInterface[]>([]);
  const [userData, setUserData] = useState<UserDataInterface>({ name: "", email: "", id: NaN });
  const router = useRouter()

  console.log(coursesData)
  console.log(userData)

  useEffect(() => {
    try {
      const token = localStorage.getItem("userToken")
      if (token !== null) {
        const userData = jwtDecode(token) as UserDataInterface
        setUserData(userData)
      }
    } catch (e) {
      console.log(e)
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (userData.id) {
        try {
          const response = await axiosConfigs.getUserCart(userData.id);
          setCoursesData(response.data);
        } catch (e) {
          console.log("Erro ao buscar produtos: ", e);
          router.push("/sign-in")
          
        } finally {
          setIsLoadingCourses(false);
        }
      };
    })()
  }, [userData]);

  return (
    <HStack w="100%" minH="calc(100% - 12rem)" padding="2rem">

      <VStack
        maxW="50rem"
        w="100%"
        minH="100%"
        mx="auto"
        p="6"
        boxShadow="lg"
        borderRadius="md"
        bg="gray.50"
        mt="6"
      >
        <Heading
        as="h2"
        size="lg"
        mb="4"
        textAlign="center"
        color="#fe7502"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        Carrinho
        <FiShoppingCart style={{ marginLeft: "0.5rem" }} />
      </Heading>

      <Box>
         {isLoadingCourses ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="40vh"
          >
            <Spinner
              width={"100px"}
              height={"100px"}
              color="#fe7502"
            />
          </Box>
        ) : (
          coursesData.length > 0 ? (
            coursesData.map((courseData, index) => (
              <CaixaProdutoCarrinho
                courseData={courseData}
                userId={userData.id}
                setCoursesData={setCoursesData}
              />
            ))
          ) : (
            <Text color="#595959">Você ainda não adicionou nada ao seu carrinho</Text>
          )
        )}
      </Box>
      </VStack>
    </HStack>
  );
}
