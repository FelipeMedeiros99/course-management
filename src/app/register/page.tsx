"use client";

// modulos externos
import { useState } from 'react';
import { Box, Input, Textarea, NumberInput, VStack, Heading, Image, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { CourseInterface } from '../courses/page';
import { InputType } from 'zlib';

interface InputCourseObjectInterface{
  inputName: "name" |"content" | "descountedPrice" | "price" | "url" | "workload";
  inputType: "text" | "number" | "url";
  label: string;
  maxLength: number;
}

export default function CadastroCurso() {

    const { register, watch ,handleSubmit, formState: {errors}} = useForm<CourseInterface>()
    const url = watch("url")
    // hooks
    // const [formData, setFormData] = useState({
    //     nome: decodeURIComponent(query?.nome || ''),
    //     preco: decodeURIComponent(query?.preco || ''),
    //     cargaHoraria: decodeURIComponent(query?.cargaHoraria || ''),
    //     precoComDesconto: decodeURIComponent(query?.precoComDesconto || ''),
    //     conteudo: decodeURIComponent(query?.conteudo || ''),
    //     imagem: decodeURIComponent(query?.imagem || ''),
    //     id: decodeURIComponent(query?.id || '')
    // });
    const router = useRouter();
    // const [enviandoRequisicao, setEnviandoRequisicao] = useState(false)

    // vars
    // const linkServer = process.env.NEXT_PUBLIC_LINK_SERVER;
  
    // functions
    // function editarInput(e) {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // async function enviarDados(e) {
    //     e.preventDefault();
    //     setEnviandoRequisicao(true)
    //     const {
    //         nome,
    //         preco,
    //         precoComDesconto,
    //         cargaHoraria,
    //         conteudo,
    //         imagem, id } = formData;

    //     const data = {
    //         nome,
    //         "url_foto": imagem,
    //         "preco": Number(preco),
    //         "preco_com_desconto": Number(precoComDesconto),
    //         "carga_horaria": cargaHoraria,
    //         conteudo,
    //         id: Number(id)
    //     };
    //     try {
    //         // cadastrar ou alterar um curso
    //         if (id) {
    //             // editar curso
    //             await axios.put(linkServer + "/cursos", data)
    //         } else {
    //             // removendo o dado que não é necessário
    //             delete data.id
    //             // salvando curso
    //             await axios.post(linkServer + "/cursos", data)
    //         }
    //         router.push("/cursos")
    //         setEnviandoRequisicao(false)
    //     } catch (e) {
    //         console.log("deu erro: ", e?.response?.data?.message || e.response || e)
    //     }
    //     setEnviandoRequisicao(false)
    // };


    // id: number;
    // content: string;
    // descountedPrice: number; 
    // name: string;
    // price: number;
    // url: string
    // workload: number

    const onSubmit = (data: Omit<CourseInterface, "id">)=>{
      console.log(data)
    }

    const inputsObject: InputCourseObjectInterface[] = [
      {
        inputName: "name",
        inputType: "text",
        maxLength: 30,
        label: "Nome do curso",
      },
      {
        inputName: "url",
        inputType: "url",
        maxLength: 100,
        label: "Url da imagem",
      },
      {
        inputName: "price",
        inputType: "number",
        maxLength: NaN,
        label: "Preço",
      },
      {
        inputName: "descountedPrice",
        inputType: "number",
        maxLength: NaN,
        label: "Preço com desconto",
      },
      {
        inputName: "workload",
        inputType: "number",
        maxLength: NaN,
        label: "Carga horária",
      },
      {
        inputName: "content",
        inputType: "text",
        maxLength: NaN,
        label: "Conteúdo",
      },
    ]

    return (
        <VStack minH="calc(100% - 12rem)" padding="2rem">
            <VStack maxW="100rem" boxShadow="0 0 0.2rem #636161" w="100%" maxWidth="35rem" padding="2rem">
              <Heading as="h2" mb="6" fontSize="2xl" textAlign="center" color="#fe7502">
                  Cadastro de Curso
              </Heading>
                  <VStack
                  as="form"
                  onSubmit={handleSubmit(onSubmit)}
                  w="100%"
                  >
                    {inputsObject.map((inputData)=>(
                      <Field
                        maxW="30rem"
                        key={inputData.inputName}
                        label={inputData.inputName}
                        invalid={!!errors[inputData?.inputName]}
                        errorText={errors[inputData?.inputName]?.message}
                      >
                        {
                        inputData.inputName !== "content"?
                        <Input
                          {...register(inputData.inputName, {required: `Obrigatório informar ${inputData.label}`, maxLength: {value: inputData.maxLength, message: `O tamanho máximo é ${inputData.maxLength}`}})}
                        />:
                        <Textarea
                          resize="none"
                          height="8rem"
                          {...register(inputData.inputName, {required: `Obrigatório informar ${inputData.label}`, maxLength: {value: inputData.maxLength, message: `O tamanho máximo é ${inputData.maxLength}`}})}
                        />
                        }
                      </Field>
                    ))}
                          {/* <Field htmlFor="nome">Nome do Curso</Field>
                          <Input
                              isDisabled={enviandoRequisicao}
                              id="nome"
                              name="nome"
                              type="text"
                              value={formData.nome}
                              onChange={editarInput}
                          />
                          <Field htmlFor="imagem">Imagem URL</Field>
                          <Input
                              isDisabled={enviandoRequisicao}
                              id="imagem"
                              name="imagem"
                              type="url"
                              value={formData.imagem}
                              onChange={editarInput}
                          />
                          <Field htmlFor="preco">Preço</Field>
                          <NumberInput
                              isDisabled={enviandoRequisicao}
                              id="preco"
                              name="preco"
                              value={formData.preco}
                              onChange={(value) => setFormData({ ...formData, preco: value })}
                              precision={2}
                              step={0.01}
                          >
                              <NumberInputField />
                          </NumberInput>
                          <Field htmlFor="precoComDesconto">Preço com Desconto</Field>
                          <NumberInput
                              isDisabled={enviandoRequisicao}
                              id="precoComDesconto"
                              name="precoComDesconto"
                              value={formData.precoComDesconto}
                              onChange={(value) => setFormData({ ...formData, precoComDesconto: value })}
                              precision={2}
                              step={0.01}
                          >
                              <NumberInputField />
                          </NumberInput>
                          <Field htmlFor="cargaHoraria">Carga Horária</Field>
                          <Input
                              isDisabled={enviandoRequisicao}
                              id="cargaHoraria"
                              name="cargaHoraria"
                              type="text"
                              value={formData.cargaHoraria}
                              onChange={editarInput}
                          />
                          <Field htmlFor="conteudo">Conteúdo (Descrição)</Field>
                          <Textarea
                              isDisabled={enviandoRequisicao}
                              id="conteudo"
                              name="conteudo"
                              type="text"
                              value={formData.conteudo}
                              onChange={editarInput}
                          /> */}
                      <Button
                        colorScheme="teal"
                        type="submit"
                        backgroundColor="#206eb3"
                        _hover={{backgroundColor:"#134a7a"}}
                      >
                        enviar
                          {/* {enviandoRequisicao ?
                              <SpinCarregando />
                              : "Cadastrar Curso"} */}
                      </Button>
                  </VStack>
               {url && (
                  <Box>
                      <Image src={url} alt="Imagem do Curso" boxSize="200px" objectFit="cover" borderRadius="md" />
                  </Box>
              )}
            </VStack> 
        </VStack>
    );
}



// "use client";

// // modulos externos
// import { useState } from 'react';
// import { Box, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField, VStack, Heading, Image } from "@chakra-ui/react";
// import { useRouter } from 'next/navigation';
// import axios from 'axios';

// // modulos internos
// import ModeloBotao from '../Components/ModeloBotao';
// import SpinCarregando from '../Components/SpinCarregando';

// export default function CadastroCurso({ searchParams: query }) {

//     // hooks
//     const [formData, setFormData] = useState({
//         nome: decodeURIComponent(query?.nome || ''),
//         preco: decodeURIComponent(query?.preco || ''),
//         cargaHoraria: decodeURIComponent(query?.cargaHoraria || ''),
//         precoComDesconto: decodeURIComponent(query?.precoComDesconto || ''),
//         conteudo: decodeURIComponent(query?.conteudo || ''),
//         imagem: decodeURIComponent(query?.imagem || ''),
//         id: decodeURIComponent(query?.id || '')
//     });
//     const router = useRouter();
//     const [enviandoRequisicao, setEnviandoRequisicao] = useState(false)

//     // vars
//     const linkServer = process.env.NEXT_PUBLIC_LINK_SERVER;
  
//     // functions
//     function editarInput(e) {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     async function enviarDados(e) {
//         e.preventDefault();
//         setEnviandoRequisicao(true)
//         const {
//             nome,
//             preco,
//             precoComDesconto,
//             cargaHoraria,
//             conteudo,
//             imagem, id } = formData;

//         const data = {
//             nome,
//             "url_foto": imagem,
//             "preco": Number(preco),
//             "preco_com_desconto": Number(precoComDesconto),
//             "carga_horaria": cargaHoraria,
//             conteudo,
//             id: Number(id)
//         };
//         try {
//             // cadastrar ou alterar um curso
//             if (id) {
//                 // editar curso
//                 await axios.put(linkServer + "/cursos", data)
//             } else {
//                 // removendo o dado que não é necessário
//                 delete data.id
//                 // salvando curso
//                 await axios.post(linkServer + "/cursos", data)
//             }
//             router.push("/cursos")
//             setEnviandoRequisicao(false)
//         } catch (e) {
//             console.log("deu erro: ", e?.response?.data?.message || e.response || e)
//         }
//         setEnviandoRequisicao(false)
//     };


//     return (
//         <Box p="6" maxW="container.md" mx="auto" bg="white" borderRadius="md" boxShadow="md">

//             <Heading as="h2" mb="6" fontSize="2xl" textAlign="center" color="#fe7502">
//                 Cadastro de Curso
//             </Heading>

//             <Box as="form" onSubmit={enviarDados}>
//                 <VStack spacing="4" align="stretch">
//                     <FormControl isRequired>
//                         <FormLabel htmlFor="nome">Nome do Curso</FormLabel>
//                         <Input
//                             isDisabled={enviandoRequisicao}
//                             id="nome"
//                             name="nome"
//                             type="text"
//                             value={formData.nome}
//                             onChange={editarInput}
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel htmlFor="imagem">Imagem URL</FormLabel>
//                         <Input
//                             isDisabled={enviandoRequisicao}
//                             id="imagem"
//                             name="imagem"
//                             type="url"
//                             value={formData.imagem}
//                             onChange={editarInput}
//                         />
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel htmlFor="preco">Preço</FormLabel>
//                         <NumberInput
//                             isDisabled={enviandoRequisicao}
//                             id="preco"
//                             name="preco"
//                             value={formData.preco}
//                             onChange={(value) => setFormData({ ...formData, preco: value })}
//                             precision={2}
//                             step={0.01}
//                         >
//                             <NumberInputField />
//                         </NumberInput>
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel htmlFor="precoComDesconto">Preço com Desconto</FormLabel>
//                         <NumberInput
//                             isDisabled={enviandoRequisicao}
//                             id="precoComDesconto"
//                             name="precoComDesconto"
//                             value={formData.precoComDesconto}
//                             onChange={(value) => setFormData({ ...formData, precoComDesconto: value })}
//                             precision={2}
//                             step={0.01}
//                         >
//                             <NumberInputField />
//                         </NumberInput>
//                     </FormControl>

//                     <FormControl isRequired>
//                         <FormLabel htmlFor="cargaHoraria">Carga Horária</FormLabel>
//                         <Input

//                             isDisabled={enviandoRequisicao}
//                             id="cargaHoraria"
//                             name="cargaHoraria"
//                             type="text"
//                             value={formData.cargaHoraria}
//                             onChange={editarInput}
//                         />
//                     </FormControl>



//                     <FormControl isRequired>
//                         <FormLabel htmlFor="conteudo">Conteúdo (Descrição)</FormLabel>
//                         <Textarea
//                             isDisabled={enviandoRequisicao}
//                             id="conteudo"
//                             name="conteudo"
//                             type="text"
//                             value={formData.conteudo}
//                             onChange={editarInput}
//                         />
//                     </FormControl>

//                     <ModeloBotao isDisabled={enviandoRequisicao} colorScheme="teal" type="submit" backgroundColor="#206eb3"
//                     _hover={{backgroundColor:"#134a7a"}}
//                     >
//                         {enviandoRequisicao ?
//                             <SpinCarregando />
//                             : "Cadastrar Curso"}
//                     </ModeloBotao>
//                 </VStack>
//             </Box>

//             {/* Exemplo de visualização da imagem do curso */}
//             {formData.imagem && (
//                 <Box mt="6" textAlign="center">
//                     <Image src={formData.imagem} alt="Imagem do Curso" boxSize="200px" objectFit="cover" borderRadius="md" />
//                 </Box>
//             )}
//         </Box>
//     );
// }
