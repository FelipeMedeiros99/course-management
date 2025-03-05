"use client";

// modulos externos
import { useState, useCallback, useEffect } from 'react';
import { Box, Input, Textarea, VStack, Heading, Image, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { AxiosError } from 'axios';
import { InvalidTokenError } from 'jwt-decode';

import { CourseInterface } from '../courses/page'; 
import axiosConfigs from '@/config/axios.config';
import AlertMessage, { AlertMessageInterface } from '@/components/AlertMessage';
import { convertToValidFloat } from '@/app/Tools';

interface InputCourseObjectInterface {
  identifier: "name" | "content" | "descountedPrice" | "price" | "url" | "workload";
  label: string;
  rules: object;
  placeholder: string;
}

const inputsObject: InputCourseObjectInterface[] = [
  {
    identifier: "name",
    label: "Nome do curso",
    placeholder: "ex: Análise de dados",
    rules: {
      required: `Obrigatório informar nome`,
      maxLength: { value: 100, message: `O tamanho máximo é 100 caracteres` }
    },
  },
  {
    identifier: "url",
    label: "Url da imagem",
    placeholder: "ex: https://imagem-de-analise-de-dados.com.br",
    rules: {
      required: `Obrigatório informar o link da imagem`,
      maxLength: { value: 200, message: `O tamanho máximo é 200 caracteres` },
      pattern: { value: /^(https?:\/\/)?([\w\-]+(\.[\w\-]+)+)(:\d{2,5})?(\/.*)?$/, message: "Insira uma URL válida" }
    }
  },
  {
    identifier: "price",
    label: "Preço",
    placeholder: "ex: 999.99",
    rules: {
      required: `Obrigatório informar o preço`,
      pattern: { value: /^\d+((\.|\,)\d{0,2})?$/, message: "Insira um preço válido" },
    }
  },
  {
    identifier: "descountedPrice",
    label: "Preço com desconto",
    placeholder: "ex: 999.99",
    rules: {
      required: `Obrigatório informar o preço`,
      pattern: { value: /^\d+((\.|\,)\d{0,2})?$/, message: "Insira um preço válido" }
    }
  },
  {
    identifier: "workload",
    label: "Carga horária",
    placeholder: "ex: 8.5",
    rules: {
      required: `Obrigatório informar a carga horária`,
      pattern: { value: /^\d+((\.|\,)\d{0,2})?$/, message: "Insira uma carga horária válida" }
    }
  },
  {
    identifier: "content",
    label: "Conteúdo (descrição)",
    placeholder: "ex: O curso ensina como criar algorítmos para análise de dados...",
    rules: {
      required: `Obrigatório informar uma descrição`,
    }
  },
]

export default function RegisterCourse(
  courseData: CourseInterface = {
    id: NaN,
    content: "",
    descountedPrice: NaN,
    name: "",
    price: NaN,
    url: "",
    workload: NaN
  }) {
  const params = useSearchParams()
  const courseId = params.get("courseId")
  const { register, watch, reset, handleSubmit, formState: { errors } } = useForm<CourseInterface>({ defaultValues: courseData });
  const url = watch("url");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessageParams, setAlertMessageParams] = useState<Omit<AlertMessageInterface, "visibility">>({ message: "", status: "neutral" });
  const [alertVisibility, setAlertVisibility] = useState(false);

  async function validFunction(fn: () => Promise<void>) {
    try {
      await fn()
    } catch (error: AxiosError | any) {
      setAlertVisibility(true)
      if (error instanceof InvalidTokenError) {
        setAlertMessageParams({ status: "error", message: "O token expirou, faça login novamente" });
      } else {
        const messageError = error?.response?.data?.message || "";
        switch (messageError) {
          case "Invalid token format":
          case "Expired token":
            setAlertMessageParams({ status: "error", message: "O token expirou, faça login novamente" });
            break;

          default:
            setAlertMessageParams({ status: "error", message: "Um erro inesperado aconteceu" });
            console.log("erro: ", error)
        }
      }
      setTimeout(() => {
        setAlertVisibility(false)
        router.push("/sign-in")
      }, 4000)
    }
  }

  useEffect(() => {
    (async () => {
      if (courseId) {
        validFunction(async () => {
          const response = await axiosConfigs.getCourse(+courseId)
          reset(response.data)
        })
      }
    })()
  }, [])

  const onSubmit = async (data: Omit<CourseInterface, "id">) => {
    setIsLoading(true)
    validFunction(async () => {
      if (courseId) {
        const response = await axiosConfigs.editCourse({
          ...data,
          id: +courseId,
          price: convertToValidFloat(data.price),
          descountedPrice: convertToValidFloat(data.descountedPrice),
          workload: convertToValidFloat(data.workload)
        });
        if (response.status === 202) {
          setAlertVisibility(true)
          setAlertMessageParams({ message: "Curso editado com sucesso", status: 'success' })
          setTimeout(() => {
            router.push("/courses")
            setAlertVisibility(false)
          }, 4000)
          reset()
        }
      } else {
        const response = await axiosConfigs.createCourse({
          ...data,
          price: convertToValidFloat(data.price),
          descountedPrice: convertToValidFloat(data.descountedPrice),
          workload: convertToValidFloat(data.workload)
        });
        if (response.status === 201) {
          setAlertVisibility(true)
          setAlertMessageParams({ message: "Curso criado com sucesso", status: 'success' })
          setTimeout(() => {
            setAlertVisibility(false)
          }, 4000)
          reset()
        }
      }
    }
    )
    setIsLoading(false)
  }

  return (
    <VStack minH="calc(100% - 12rem)" padding="2rem">
      <AlertMessage message={alertMessageParams.message} status={alertMessageParams.status} visibility={alertVisibility} />
      <VStack maxW="100rem" boxShadow="0 0 0.2rem #636161" w="100%" maxWidth="35rem" padding="2rem">
        <Heading as="h2" mb="6" fontSize="2xl" textAlign="center" color="#fe7502">Cadastro de Curso</Heading>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} w="100%">
          {inputsObject.map((inputData) => (
            <Field
              disabled={isLoading}
              maxW="30rem"
              label={inputData.label}
              invalid={!!errors?.[inputData.identifier]}
              errorText={errors?.[inputData.identifier]?.message}
            >
              {
                inputData.identifier !== "content" ?
                  <Input
                    placeholder={inputData.placeholder}
                    {...register(inputData.identifier, inputData.rules)}
                  /> :
                  <Textarea
                    resize="none"
                    height="8rem"
                    placeholder={inputData.placeholder}
                    {...register(inputData.identifier, inputData.rules)}
                  />
              }
            </Field>
          ))}

          <Button
            type="submit"
            backgroundColor="#206eb3"
            w="100%"
            maxW="30rem"
            marginTop="1rem"
            _hover={{ backgroundColor: "#134a7a" }}
            loading={isLoading}
          >
            Salvar
          </Button>
        </VStack>

        {url && (
          <Box>
            <Image src={url} alt="Imagem do Curso" boxSize="200px" borderRadius="1rem" />
          </Box>
        )}
      </VStack>
    </VStack>
  );
}
