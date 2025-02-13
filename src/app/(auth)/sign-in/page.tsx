"use client"

import { Box, Input, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";

import Contexto from "../../Tools/Contexto";
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
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z0-9]+)?$/i
  const linkServidor = process.env.NEXT_PUBLIC_LINK_SERVER
  const servidor = `${linkServidor}/login`

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

  console.log(errors)

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
        <VStack>
          <Field label="Email" invalid={!!errors.email} errorText={errors?.email?.message}>
            <Input
              {...register("email", {
                required: {value: true, message: "Obrigatório informar o email"}, 
                maxLength: {value: 100, message: "O email deve possuir, no máximo, 100 caracteres."},
                pattern: {value: emailRegex, message: "Informe um email válido"}
              })}
            />
          </Field>

          <Field label="Senha" invalid={!!errors?.password} errorText={errors?.password?.message}>
            <PasswordInput
              {...register("password", {
                minLength: { value: 6, message: "A senha precisa possuir no mínimo 6 caracteres"},
                maxLength: { value: 100, message: "A senha não deve ter mais de 100 caracteres"},
                required: { value: true, message: "A senha é obrigatória"}
              })}
            />
          </Field>
        </VStack>
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
