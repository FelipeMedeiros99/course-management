"use client"

import { Box, Input, Heading, Text, Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Field } from "@/components/ui/field";

import Contexto from "./Tools/Contexto";
import ModeloBotao from "@/components/ModeloBotao";
import SpinCarregando from "@/components/SpinCarregando";


interface Inputs {
  email: string;
  password: string
}

export default function SignIn() {


  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => validUserDataLogin(data)

  const [carregando, setCarregando] = useState(false)
  const { setIsNavigationActive } = useContext(Contexto)
  const router = useRouter();

  // vars
  const linkServidor = process.env.NEXT_PUBLIC_LINK_SERVER
  const servidor = `${linkServidor}/login`

  // funcoes
  const validUserDataLogin = async (inputs: Inputs) => {
    console.log(inputs)
    setCarregando(true)
    const { email, password } = inputs;

    if (email.length >= 3) {

      try {
        // buscando usuario no servidor
        const promessa = await axios.post(servidor, email)
        localStorage.setItem("usuario", JSON.stringify(promessa.data))
        router.push("/cursos")
      } catch (e: any) {
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
    setIsNavigationActive(false)
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
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Box as="form" id="nome" mb="4" width="100%" maxW="md">
          <Field label="Email" errorText="">
            <Input
              {...register("email")}
            />
          </Field>

          <Field label="Senha" errorText="">
            <Input
              {...register("password")}
            />
          </Field>
        </Box>
        <Button
          bgColor={"#206eb3"}
          _hover={{ backgroundColor: "#124877" }}
          color="white"
          type="submit"
          disabled={carregando}
        >
          {!carregando ?
            "Confirmar" :
            <SpinCarregando />
          }
        </Button>
        {carregando && <Text wordBreak="break-word" fontSize="sm" color={"#525252"} maxW="230px" textAlign="center">Por favor, aguarde! Às vezes o servidor pode apresentar lentidão</Text>}
      </Box>
    </Box>
  );
}
