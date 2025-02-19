"use client"

import { Box, Input, Heading, Text, Button, VStack, Spinner } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";
import axios from "axios";

import Context from "@/context";

interface Inputs {
  email: string;
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => validUserDataLogin(data)

  const [carregando, setCarregando] = useState(false)
  const { setIsNavigationActive } = useContext(Context)
  const router = useRouter();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z0-9]+)?$/i
  const linkServidor = process.env.NEXT_PUBLIC_LINK_SERVER
  const servidor = `${linkServidor}/login`

  console.log(linkServidor)

  const validUserDataLogin = async (inputs: Inputs) => {
    setCarregando(true)
    const { email, password } = inputs;

    if (email.length >= 3) {

      try {
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

  useEffect(() => {
    setIsNavigationActive(false)
  }, [setIsNavigationActive])

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
        <VStack >
          <Field label="Email" invalid={!!errors.email} errorText={errors?.email?.message}>
            <Input
              {...register("email", {
                required: { value: true, message: "Obrigatório informar o email" },
                maxLength: { value: 100, message: "O email deve possuir, no máximo, 100 caracteres." },
                pattern: { value: emailRegex, message: "Informe um email válido" }
              })}
            />
          </Field>

          <Field label="Senha" invalid={!!errors?.password} errorText={errors?.password?.message}>
            <PasswordInput
              {...register("password", {
                minLength: { value: 6, message: "A senha precisa possuir no mínimo 6 caracteres" },
                maxLength: { value: 100, message: "A senha não deve ter mais de 100 caracteres" },
                required: { value: true, message: "A senha é obrigatória" }
              })}
            />
          </Field>

          <Button
            bgColor={"#206eb3"}
            _hover={{ backgroundColor: "#124877" }}
            color="white"
            type="submit"
            disabled={carregando}
            w="100%"
            marginTop="1rem"
          >
            {!carregando ?
              "Confirmar" :
              <Spinner />
            }
          </Button>


          <Box fontStyle="italic" color="#535353" _hover={{textDecor: "underline"}} marginTop="0.5rem">
            <Link href={"/sign-up"}>Não possui cadastro? Cadastre-se!</Link>
          </Box>
        </VStack>
        {carregando && <Text wordBreak="break-word" fontSize="sm" color={"#525252"} maxW="230px" textAlign="center">Por favor, aguarde! Às vezes o servidor pode apresentar lentidão</Text>}
      </Box>
    </Box>
  );
}
