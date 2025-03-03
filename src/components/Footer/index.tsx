import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import logo from "@/assets/images/logo.png"


export default function Footer() {
  return (
    <VStack 
        as="footer" 
        width="100%"
        height="4rem"
        bg="#fe7502" 
        color="white" 
        py={1} 
        textAlign="center" 
        justifyContent={"center"}
    >
      <HStack width="3rem" height="3rem">
        <Text color="white" fontWeight="700">CURSOS ONLINE</Text>
        <Image src={logo} alt="Logo" />
      </HStack>

      
    </VStack>
  );
}
