"use client"
import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image"
import Link from "next/link";
// import MenuRotas from "../MenuRotas";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

import logoInaed from "@/assets/images/inaed_logo.png";

export default function Header() {
  return (
    <VStack
      as="header"
      top="0px"
      width="100%"
      bg="#fe7502"
      color="white"
      height="8rem"
      py={4}
      textAlign="center"
      justifyContent="center"
    >
      <Image
        src={logoInaed}
        alt="Logo do INAED"
        width={64}
        height={64}


      />
      <Heading
        as="h1"
        size="md"
        mt={2}
      >
        INAED CURSOS
      </Heading>
    </VStack>
  );
}
