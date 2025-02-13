"use client"
import { Box, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
// import MenuRotas from "../MenuRotas";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function Header({ativo}: {ativo:boolean}) {
  const router = useRouter()
  function sair(){
    router.push("/")
  }

  return (
    <Box
      as="header"
      top="0px"
      width="100%"
      bg="#fe7502"
      color="white"
      height="auto"
      py={4}
      textAlign="center"
      justifyContent="center"
      position="relative"
    >
      <Image
        src="./imagens/inaed_logo.png"
        alt="Logo do INAED"
        width="auto"
        height="auto"
        maxHeight="70px"
        mx="auto"
      />
      <Heading
        as="h1"
        size="md"
        mt={2}
      >
        INAED CURSOS
      </Heading>

      {/* <MenuRotas ativo={ativo}/> */}

      {ativo && 
        <Box position="absolute" right="15px" top="15px" onClick={sair}>
          <RiLogoutBoxRLine size="35px"/>
        </Box>
        }

    </Box>
  );
}
