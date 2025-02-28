// "use client";
// import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
// import CaixaProdutoCarrinho from "../Components/CaixaProdutoCarrinho";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FiShoppingCart } from "react-icons/fi";

// export default function CarrinhoUsuario() {
//     const [carregandoCursos, setCarregandoCursos] = useState(true);
//     const [cursosNoCarrinho, setCursosNoCarrinho] = useState([]);
//     const [nomeUsuario, setNomeUsuario] = useState('');
//     const [idUsuario, setIdUsuario] = useState(null);

//     useEffect(() => {
//         // Verificar se localStorage está disponível
//         if (typeof window !== 'undefined') {
//             const dadosUsuario = JSON.parse(localStorage.getItem("usuario")) || undefined;

//             if (dadosUsuario) {
//                 setIdUsuario(dadosUsuario.id);
//                 setNomeUsuario(dadosUsuario.nome);
//             }
//         }
//     }, []);

//     useEffect(() => {
//         if (idUsuario) {
//             const buscarProdutos = async () => {
//                 try {
//                     const link = `${process.env.NEXT_PUBLIC_LINK_SERVER}/carrinho/${idUsuario}`;
//                     const resposta = await axios.get(link);
//                     setCursosNoCarrinho(resposta.data);
//                 } catch (e) {
//                     console.log("Erro ao buscar produtos: ", e);
//                 } finally {
//                     setCarregandoCursos(false);
//                 }
//             };

//             buscarProdutos();
//         }
//     }, [idUsuario]);

//     return (
//         <Box
//             maxW="800px"
//             mx="auto"
//             p="6"
//             boxShadow="lg"
//             borderRadius="md"
//             bg="gray.50"
//             mt="6"
//         >   
//             <Heading 
//                 as="h2" 
//                 size="lg" 
//                 mb="4" 
//                 textAlign="center" 
//                 color="#fe7502" 
//                 display="flex" 
//                 alignItems="center"
//                 justifyContent="center">
//                 Carrinho
//                 <FiShoppingCart style={{marginLeft:"8px"}}/>
//             </Heading>

//             <Text marginBottom="3px">Olá, {nomeUsuario}!</Text>
//             {/* Olá, {nomeUsuario}! */}
//             <Box>
//                 {carregandoCursos ? (
//                     <Box 
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         height="40vh"
//                     >
//                         <Spinner 
//                             width={"100px"} 
//                             height={"100px"}
//                             color="#fe7502"
//                         />
//                     </Box>
//                 ) : (
//                     cursosNoCarrinho.length > 0 ? (
//                         cursosNoCarrinho.map(({ codigo_carrinho: idDoCarrinho, url_foto, nome, preco, carga_horaria: cargaHoraria, preco_com_desconto: precoComDesconto, conteudo, id, comprado }, index) => (
//                             <CaixaProdutoCarrinho
//                                 comprado={comprado}
//                                 idDoCarrinho={idDoCarrinho}
//                                 key={id}
//                                 imagem={url_foto}
//                                 nome={nome}
//                                 preco={preco}
//                                 cargaHoraria={cargaHoraria}
//                                 precoComDesconto={precoComDesconto}
//                                 conteudo={conteudo}
//                                 id={id}
//                                 setCursosNoCarrinho={setCursosNoCarrinho}
//                             />
//                         ))
//                     ) : (
//                         <Text color="#595959">Você ainda não adicionou nada ao seu carrinho</Text>
//                     )
//                 )}
//             </Box>
//         </Box>
//     );
// }
