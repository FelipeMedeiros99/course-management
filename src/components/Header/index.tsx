"use client"
import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image"
import { usePathname } from "next/navigation";

import logo from "@/assets/images/logo.png";
import { NavBar } from "../NavBar";

export default function Header() {
  const localPath = usePathname();
  return (
    <VStack
      color="white"
      as="header"
      width="100%"
      bg="#fe7502"
      height="8rem"
      justifyContent="center"
    >
      {localPath !== "/sign-in" && localPath !== "/sign-up" &&
        <Box position="absolute" right="1rem">
          <NavBar />
        </Box>}

      <Box w="5rem" h="5rem">
        <Image src={logo} alt="logo"/>
      </Box>
      <Heading
        color="white"
        as="h1"
        size="md"
      >
        CURSOS ONLINE
      </Heading>
    </VStack>
  );
}
