"use client"

// modulos externos
import { Box, FormControl, FormLabel, Input, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

//modulos internos
import { nomeMaiusculo } from "./Tools";
import Contexto from "./Tools/Contexto";
import ModeloBotao from "./Components/ModeloBotao";
import SpinCarregando from "./Components/SpinCarregando";


export default function TelaCadastro() {
    // Hooks
    const [nome, setNome] = useState("");
    const [carregando, setCarregando] = useState(false)
    const { setNavegacaoAtiva } = useContext(Contexto)
    const router = useRouter();
    
    // vars
    const linkServidor = process.env.NEXT_PUBLIC_LINK_SERVER
    const servidor = `${linkServidor}/login`

    // funcoes
    async function velidarDadosLogin(evento){
        evento.preventDefault()
        setCarregando(true)

        if (nome.length >= 3) {
            const data = {"nome": nomeMaiusculo(nome)}
            try {
                // buscando usuario no servidor
                const promessa = await axios.post(servidor, data)
                localStorage.setItem("usuario", JSON.stringify(promessa.data))
                router.push("/cursos")
            } catch (e) {
                console.log("deu erro: ", e.response || e.request || e)
            } finally {
                setCarregando(false)
            }

        }
        setCarregando(false)

    };

    // efeitos
    useEffect(() => {
        // ativa e desativa o nav do header
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
            <Heading mb="6" color="#fe7502">Login</Heading>   
            <Box as="form" onSubmit={velidarDadosLogin}>
                <FormControl id="nome" mb="4" width="100%" maxW="md" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required={true}
                        minLength={3}
                    />
                </FormControl>
                <ModeloBotao
                    backgroundColor="#206eb3"
                    _hover={{backgroundColor:"#124877"}}
                    color="white"
                    type="submit"
                    isDisabled={carregando}>    
                    {!carregando ?
                        "Confirmar" :
                        <SpinCarregando />
                    }
                </ModeloBotao>
                {carregando && <Text wordBreak="break-word" fontSize="sm" color={"#525252"} maxW="230px" textAlign="center">Por favor, aguarde! Às vezes o servidor pode apresentar lentidão</Text>}
            </Box>
        </Box>
    );
}
