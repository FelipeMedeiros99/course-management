import { Box, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box 
        as="footer" 
        width="100%"
        bg="#fe7502" 
        color="white" 
        py={1} 
        textAlign="center" 
        justifyContent={"center"}
        position="absolute"
        bottom={0}
    >

      <Image 
        src="/imagens/logo_footer.png" 
        alt="Logo do INAED" 
        width={200} 
        height="auto"
        mx="auto" // Alinha a imagem ao centro
      />
      
    </Box>
  );
}
