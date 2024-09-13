"use client"
import { Box, Button, FormControl, FormLabel, Input, Heading} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function TelaCadastro() {
    const [nome, setNome] = useState("");
    const router = useRouter();
    
    const handleConfirm = (evento) => {
        evento.preventDefault()
        if(nome.length){
            router.push("/curso")
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"

        >
            <Heading mb="6">Login</Heading>
            <Box as="form" onSubmit={handleConfirm}>
                <FormControl id="nome" mb="4" width="100%" maxW="md" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required={true}
                    />
                </FormControl>
                <Button colorScheme="teal" type="submit">
                    Confirmar
                </Button>
            </Box>
        </Box>
    );
}
