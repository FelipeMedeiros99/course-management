import { Box, Heading, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box 
        as="footer" 
        bg="#fe7502" 
        color="white" 
        py={4} 
        textAlign="center" 
        justifyContent={"center"}
    >
      <Image 
        src="/imagens/inaed_logo.png" 
        alt="Logo do INAED" 
        width={100} 
        height={100}
        mx="auto" // Alinha a imagem ao centro
      />
      
      {/* Título customizado */}
      <Heading as="h1" size="lg" mt={2}>
        INAED CURSOS
      </Heading>
    </Box>
  );
}
