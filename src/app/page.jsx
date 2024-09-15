    "use client"
    import { Box, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";
    import { useEffect, useState, useContext } from "react";
    import { useRouter } from "next/navigation";
    import Contexto from "./Tools/Contexto";
    import axios from "axios";
    import { nomeMaiusculo } from "./Tools";

    export default function TelaCadastro() {
        const [nome, setNome] = useState("");
        const router = useRouter();
        const { setNavegacaoAtiva } = useContext(Contexto)
        const linkServidor = process.env.NEXT_PUBLIC_LINK_SERVER


        const handleConfirm = async (evento) => {
            evento.preventDefault()
            if (nome.length) {
                const servidor = `${linkServidor}/login`
                const data = {
                    "nome": nomeMaiusculo(nome)
                }

                try {
                    const promessa = await axios.post(servidor, data)
                    localStorage.setItem("usuario", JSON.stringify(promessa.data))
                    router.push("/cursos")
                    
                } catch (e) {
                    console.log("deu erro: ", e.response || e.request || e)
                }
            }
        };

        useEffect(() => {
            setNavegacaoAtiva(false)
        }, [])

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
