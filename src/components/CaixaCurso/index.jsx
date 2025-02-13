// "use client"
// import { useState } from "react";
// import { Box, Text } from "@chakra-ui/react"
// import { Image } from "@chakra-ui/react"
// import { converterEmMoedas } from "@/app/Tools";
// import Link from "next/link";
// import ModeloBotao from "../ModeloBotao";
// import adicionarAoCarrinho from "@/app/Tools/adicionarAoCarrinho";
// import SpinCarregando from "../SpinCarregando";
// import { FiShoppingCart } from "react-icons/fi";
// import { FiEdit } from "react-icons/fi";
// import { FiClock } from "react-icons/fi";
// import { FaDollarSign } from "react-icons/fa";


// export default function ContainerCurso({ props }) {
//     const {
//         nome,
//         preco,
//         carga_horaria: cargaHoraria,
//         preco_com_desconto: precoComDesconto,
//         conteudo,
//         url_foto: imagem,
//         id } = props;
//     const [carregando, setCarregando] = useState(false)
//     const link = `${id}?nome=${encodeURIComponent(nome)}&preco=${encodeURIComponent(preco)}&cargaHoraria=${encodeURIComponent(cargaHoraria)}&precoComDesconto=${encodeURIComponent(precoComDesconto)}&conteudo=${encodeURIComponent(conteudo)}&imagem=${encodeURIComponent(imagem)}`

//     async function adicionar() {
//         setCarregando(true)
//         await adicionarAoCarrinho(id)
//         setCarregando(false)
//     }


//     return (
//         <Box
//             as="div"
//             width="300px"
//             height="460px"
//             boxShadow='0 0 3px black'
//             borderRadius="5px"
//             padding={2}
//             margin={2}
//             color="#545454"
//             position="relative"
//         >

//             <Link href={`/cursos/${link}`}>
//                 <Image
//                     src={imagem}
//                     alt={nome}
//                     width="100%"
//                     height="200px"
//                     objectFit="cover"
//                     borderRadius="md"
//                     mx="auto"

//                 />
//                 <Text
//                     display="flex"
//                     alignItems="center"
//                     fontSize="xl"
//                     fontWeight="700"
//                     height="100px"
//                     lineHeight="1"
//                     overflow="auto"
//                     textDecor="underline"
//                 >{nome}</Text>

//                 <Text
//                     fontSize="md"
//                     height="25px"
//                     display="flex"
//                     alignItems="center"  
//                 >
//                     <FiClock style={{ marginRight: '8px' }} size="15px"/>
//                     Carga horária: 
//                     <Box as="strong" ml={1}>{cargaHoraria}</Box>
//                 </Text>


//                 <Text
//                     fontSize="xl"
//                     fontWeight="900"
//                         >R${converterEmMoedas(precoComDesconto)}
//                 </Text>
//             </Link>
//             <Box as="div" position="absolute" bottom='0' width="100%" left="0" padding="2">
//                 <ModeloBotao
//                     margin="0"
//                     isDisabled={carregando}
//                     onClick={adicionar}
//                     backgroundColor="#206eb3"
//                     _hover={{ backgroundColor: "#175388" }}
//                     color="white"
//                     rightIcon={<FiShoppingCart />}
//                     >

//                     {carregando ?
//                         <SpinCarregando /> :
//                         "Adicionar ao carrinho"
//                     }
//                 </ModeloBotao>
//             </Box>

//         </Box>


//     )
// }