"use client"

import { Box, Input, Heading, Text, Button, VStack, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { motion } from "framer-motion"
import Link from "next/link";

import axiosConfigs from "@/config/axios.config";
import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";

import style from "../styles.module.css"

interface Inputs {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => validUserDataSignup(data)

  const [isLoading, setIsLoading] = useState(false)
  const [alertVisibility, setAlertVisibility] = useState(false)
  const [alertMessageParams, setAlertMessageParams] = useState<Omit<AlertMessageInterface, "visibility">>({ message: "", status: "neutral" })
  const router = useRouter();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z0-9]+)?$/i

  const validUserDataSignup = async (inputs: Inputs) => {
    setIsLoading(true)
    const { password, confirmPassword } = inputs;

    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "custom",
        message: "Senhas não coincidem",
      })
    } else {
      try {
        const promise = await axiosConfigs.signUp(inputs)
        if (promise.status === 201) {
          setAlertVisibility(true)
          setAlertMessageParams({ message: "Usuário cadastrado com sucesso", status: "success" })
          setTimeout(() => {
            setAlertVisibility(false)
          }, 3500)
          setTimeout(()=>{
            router.push("sign-in")
          }, 4000)
        }
      } catch (e: any) {
        console.log(e)
        setAlertVisibility(true)
        if (e?.status === 409) {
          setAlertMessageParams({ message: "Este email já está cadastrado", status: "error" })
        } else if (e?.status === 400) {
          setAlertMessageParams({ message: "Todos os dados precisam ser preenchidos", status: "error" })
        } else if (e?.status === 500) {
          setAlertMessageParams({ message: "Erro no servidor", status: "error" })
        }
        else {
          setAlertMessageParams({ message: e?.response?.data?.message || "Erro desconhecido, contate o desenvolvedor", status: "error" })
        }
        setTimeout(() => setAlertVisibility(false), 3500)
      }
    }
    setIsLoading(false)

  };

  return (
    <>
      <AlertMessage message={alertMessageParams.message} status={alertMessageParams.status} visibility={alertVisibility}/>
      <Heading className={style.h2}>Cadastro</Heading>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <VStack >
          <Field className={style.label} label="Email" invalid={!!errors.email} errorText={errors?.email?.message}>
            <Input
              
              className={style.input}
              disabled={isLoading}
              {...register("email", {
                required: { value: true, message: "Obrigatório informar o email" },
                maxLength: { value: 100, message: "O email deve possuir, no máximo, 100 caracteres." },
                pattern: { value: emailRegex, message: "Informe um email válido" }
              })}
            />
          </Field>

          <Field label="Nome completo" invalid={!!errors.name} errorText={errors?.name?.message}>
            <Input
              className={style.input}
              disabled={isLoading}
              {...register("name", {
                required: { value: true, message: "Obrigatório informar o nome" },
                minLength: { value: 2, message: "O nome deve possuir pelo menos 2 caracteres" },
                maxLength: { value: 100, message: "O nome deve possuir, no máximo, 100 caracteres." }
              })}
            />
          </Field>

          <Field label="Senha" invalid={!!errors?.password} errorText={errors?.password?.message}>
            <PasswordInput
              className={style.input}
              disabled={isLoading}
              {...register("password", {
                minLength: { value: 6, message: "A senha precisa possuir no mínimo 6 caracteres" },
                maxLength: { value: 100, message: "A senha não deve ter mais de 100 caracteres" },
                required: { value: true, message: "A senha é obrigatória" }
              })}
            />
          </Field>

          <Field label="Confirme a senha" invalid={!!errors?.confirmPassword} errorText={errors?.confirmPassword?.message}>
            <PasswordInput
              className={style.input}
              disabled={isLoading}
              {...register("confirmPassword", {
                required: { value: true, message: "A confirmação de senha é obrigatória" }
              })}
            />
          </Field>

          <Button type="submit" className={style.button} disabled={isLoading}>
            {!isLoading ?
              "Confirmar" :
              <Spinner />
            }
          </Button>
          
          <Link className={style.link} href={"/sign-in"}>Já possui cadastro? Faça login!</Link>
        </VStack>
      </Box>
    </>
  );
}
