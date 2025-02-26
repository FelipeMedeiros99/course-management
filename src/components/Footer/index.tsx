import { Box, VStack } from "@chakra-ui/react";
import Image from "next/image";

import footerImage from "@/assets/images/logo_footer.png"


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
      <Image 
        src={footerImage}
        alt="Logo do INAED"
      />
      
    </VStack>
  );
}
