"use client"
import { Box, Heading, VStack } from "@chakra-ui/react";
import Image from "next/image"
import { usePathname } from "next/navigation";

import logoInaed from "@/assets/images/inaed_logo.png";
import { NavBar } from "../NavBar";

export default function Header() {
  const localPath = usePathname();
  return (
    <VStack
      as="header"
      top="0px"
      width="100%"
      bg="#fe7502"
      color="white"
      height="8rem"
      textAlign="center"
      justifyContent="center"
    >
      {localPath !== "/sign-in" && localPath !== "/sign-up" &&
      <Box position="absolute" right="1rem">
        <NavBar/>
      </Box>}

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
