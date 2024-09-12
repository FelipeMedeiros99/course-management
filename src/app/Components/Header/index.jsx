import { Box, Heading, Image } from "@chakra-ui/react";

export default function Header() {
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
    >
      <Image 
        src="/imagens/inaed_logo.png" 
        alt="Logo do INAED" 
        width="auto"
        height="auto"
        maxHeight="70px"
        mx="auto"
      />
      
      {/* Título customizado */}
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
