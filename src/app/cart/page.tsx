"use client";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";

import CaixaProdutoCarrinho from "@/components/CaixaProdutoCarrinho";

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

  useEffect(() => {
    try{
      const token = localStorage.getItem("userToken")
      if (token !== null) {
        const userData = jwtDecode(token) as UserDataInterface
        console.log(userData)
        setUserData(userData)
      }
    }catch(e){
      console.log(e)
    }
  }, []);

  // useEffect(() => {
  //   if (idUsuario) {
  //     const buscarProdutos = async () => {
  //       try {
  //         const link = `${process.env.NEXT_PUBLIC_LINK_SERVER}/carrinho/${idUsuario}`;
  //         const resposta = await axios.get(link);
  //         setCoursesData(resposta.data);
  //       } catch (e) {
  //         console.log("Erro ao buscar produtos: ", e);
  //       } finally {
  //         setIsLoadingCourses(false);
  //       }
  //     };

  //     buscarProdutos();
  //   }
  // }, [idUsuario]);

  return (
    <></>
    // <Box
    //   maxW="800px"
    //   mx="auto"
    //   p="6"
    //   boxShadow="lg"
    //   borderRadius="md"
    //   bg="gray.50"
    //   mt="6"
    // >
    //   <Heading
    //     as="h2"
    //     size="lg"
    //     mb="4"
    //     textAlign="center"
    //     color="#fe7502"
    //     display="flex"
    //     alignItems="center"
    //     justifyContent="center">
    //     Carrinho
    //     <FiShoppingCart style={{ marginLeft: "8px" }} />
    //   </Heading>

    //   <Text marginBottom="3px">Olá, {userData}!</Text>
    //   {/* Olá, {userData}! */}
    //   <Box>
    //     {isLoadingCourses ? (
    //       <Box
    //         display="flex"
    //         alignItems="center"
    //         justifyContent="center"
    //         height="40vh"
    //       >
    //         <Spinner
    //           width={"100px"}
    //           height={"100px"}
    //           color="#fe7502"
    //         />
    //       </Box>
    //     ) : (
    //       coursesData.length > 0 ? (
    //         coursesData.map(({ codigo_carrinho: idDoCarrinho, url_foto, nome, preco, carga_horaria: cargaHoraria, preco_com_desconto: precoComDesconto, conteudo, id, comprado }, index) => (
    //           <CaixaProdutoCarrinho
    //             comprado={comprado}
    //             idDoCarrinho={idDoCarrinho}
    //             key={id}
    //             imagem={url_foto}
    //             nome={nome}
    //             preco={preco}
    //             cargaHoraria={cargaHoraria}
    //             precoComDesconto={precoComDesconto}
    //             conteudo={conteudo}
    //             id={id}
    //             setCoursesData={setCoursesData}
    //           />
    //         ))
    //       ) : (
    //         <Text color="#595959">Você ainda não adicionou nada ao seu carrinho</Text>
    //       )
    //     )}
    //   </Box>
    // </Box>
  );
}
