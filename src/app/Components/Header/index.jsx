import { Box, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
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
      <Link href="/">
        <Image
          src="/imagens/inaed_logo.png"
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
          textDecoration="underline"
        >
          INAED CURSOS
        </Heading>
      </Link>
    </Box>
  );
}
