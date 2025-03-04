"use client"

import { Box, Input, Heading, Text, Button, VStack, Spinner } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";
import { motion } from "framer-motion";

import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
import axiosConfigs from "@/config/axios.config";

import style from "../styles.module.css"

interface Inputs {
  email: string;
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => validUserDataLogin(data)

  const [isLoading, setIsLoading] = useState(false)
  const [alertVisibility, setAlertVisibility] = useState(false)
  const [alertMessageParams, setAlertMessageParams] = useState<Omit<AlertMessageInterface, "visibility">>({ message: "", status: "neutral" })
  const router = useRouter();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z0-9]+)?$/i

  const validUserDataLogin = async (inputs: Inputs) => {
    setIsLoading(true)
    const { email, password } = inputs;

    if (email.length >= 3) {
      try {
        const response = await axiosConfigs.signIn(inputs)
        localStorage.setItem("userToken", response?.data)
        router.push("/courses")

      } catch (e: any) {
        const errorMessage = e?.response?.data.message
        setAlertVisibility(true)
        switch(errorMessage){
          case "Email not registered":
            setAlertMessageParams({message: "Email não cadastrado", status: "error"})
            break;

          case("Incorrect password"):
            setAlertMessageParams({message: "Senha incorreta", status: "error"})
            break;
            
          default:
            console.log(e)
            if(e?.response?.status===500){
              setAlertMessageParams({message: "Erro no servidor, tente novamente", status: "error"})
            }else{
              setAlertMessageParams({message: "Erro desconhecido, contate o desenvolvedor", status: "error"})
            }
        }
      } finally {
        setTimeout(()=>setAlertVisibility(false), 4000)
        setIsLoading(false)
      }

    }
    setIsLoading(false)
  };

  return (
    <>
      <AlertMessage message={alertMessageParams.message} status={alertMessageParams.status} visibility={alertVisibility} />      
      
      <Heading color="#fe7502" className={style.h2}>Login</Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack >
          <Field className={style.labe} label="Email" invalid={!!errors.email} errorText={errors?.email?.message}>
            <Input
              className={style.input}
              value="felipe@gmail.com"
              disabled={isLoading}
              {...register("email", {
                required: { value: true, message: "Obrigatório informar o email" },
                maxLength: { value: 100, message: "O email deve possuir, no máximo, 100 caracteres." },
                pattern: { value: emailRegex, message: "Informe um email válido" }
              })}
            />
          </Field>

          <Field className={style.label} label="Senha" invalid={!!errors?.password} errorText={errors?.password?.message}>
            <PasswordInput
              className={style.input}
              value="123456"
              disabled={isLoading}
              {...register("password", {
                minLength: { value: 6, message: "A senha precisa possuir no mínimo 6 caracteres" },
                maxLength: { value: 100, message: "A senha não deve ter mais de 100 caracteres" },
                required: { value: true, message: "A senha é obrigatória" }
              })}
            />
          </Field>

          <Button className={style.button} type="submit" disabled={isLoading}>
            {!isLoading ?
              "Confirmar" :
              <Spinner />
            }
          </Button>
          <Link className={style.link} href={"/sign-up"}>Não possui cadastro? Cadastre-se!</Link>
        </VStack>
      </Box>
    </>
  );
}
