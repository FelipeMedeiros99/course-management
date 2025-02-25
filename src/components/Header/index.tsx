"use client"
import { Box, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
// import MenuRotas from "../MenuRotas";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter()
  function sair(){100
    router.push("/")
  }

  return (
    <Box
      as="header"
      top="0px"
      width="100%"
      bg="#fe7502"
      color="white"
      height="8rem"
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
        maxHeight="4rem"
        mx="auto"
      />
      <Heading
        as="h1"
        size="md"
        mt={2}
      >
        INAED CURSOS
      </Heading>
    </Box>
  );
}
