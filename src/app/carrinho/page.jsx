"use client"
import { Box, Heading, Text,  } from "@chakra-ui/react";
import CaixaProdutoCarrinho from "../Components/CaixaProdutoCarrinho";
import { useContext, useEffect } from "react";
import Contexto from "../Tools/Contexto";
import { useState } from "react";
import axios from "axios";


export default function CarrinhoUsuario({ params, searchParams }) {
    const link = process.env.NEXT_PUBLIC_LINK_SERVER+"/carrinho"

    const dadosUsuario = JSON.parse(localStorage.getItem("usuario"))||undefined
    const idUsuario = dadosUsuario.id
    const nomeUsuario = dadosUsuario.nome
    
    let [cursosNoCarrinho, setCursosNoCarrinho ] = useState([])
    
    useEffect(()=>{
        const buscarProdutos = async()=>{
            try{
                const promisse = await axios.get(`${link}/${idUsuario}`)
                setCursosNoCarrinho(promisse.data)
            }catch(e){
                console.log("erro ao buscar produtos: ", e)
            }
        }

        buscarProdutos()
    },[])


    console.log(cursosNoCarrinho)

    const [produtosSelecionados, setProdutosSelecionados] = useState({}) 

    return (
        <Box
            maxW="800px"
            mx="auto"
            p="6"
            boxShadow="lg"
            borderRadius="md"
            bg="gray.50"
            mt="6"
        >
            <Heading as="h2" size="lg" mb="4" textAlign="center">
                <Heading as="h2" size="lg" mb="4" textAlign="center" color="#fe7502">
                    Olá, {nomeUsuario}!
                </Heading>
                
                <Box>
                    {cursosNoCarrinho.map(({codigo_carrinho:idDoCarrinho, url_foto, nome, preco, carga_horaria:cargaHoraria, preco_com_desconto:precoComDesconto, conteudo, id, comprado }, index) => (
                        <CaixaProdutoCarrinho
                            comprado={comprado}
                            idDoCarrinho={idDoCarrinho}
                            key={id}
                            imagem={url_foto}
                            nome={nome}
                            preco={preco}
                            cargaHoraria={cargaHoraria}
                            precoComDesconto={precoComDesconto}
                            conteudo={conteudo}
                            id={id}
                            setCursosNoCarrinho={setCursosNoCarrinho}
                        />
                    ))}
                </Box>
            </Heading>
        </Box>
    );
}


// "use client"
// import { Box, Text, Heading } from "@chakra-ui/react";
// import CaixaProdutoCarrinho from "@/app/Components/CaixaProdutoCarrinho";
// import { useContext } from "react";
// import Contexto from "../Tools/Contexto";

// export default function CarrinhoUsuario({ params, searchParams }) {
//     // const idCarrinhoUsuario = params.id;
//     // const nome = decodeURIComponent(searchParams.nome);
//     // const produtos = JSON?.parse(decodeURIComponent(searchParams.produtos));
//     const {listaCursos} = useContext(Contexto)

//     return (
//         <Box 
//             maxW="800px" 
//             mx="auto" 
//             p="6" 
//             boxShadow="lg" 
//             borderRadius="md" 
//             mt="6"
//         >
//             <Heading as="h2" size="lg" mb="4" textAlign="center" color="#fe7502">
//                 Carrinho do Usuário
//             </Heading>
//             <Text fontSize="xl" fontWeight="bold" mb="2" color="blue.500">
//                 ID do Carrinho: 3
//             </Text>
//             <Text fontSize="lg" mb="6" color="gray.700">
//                 Nome: felipao
//             </Text>
//             <Box>
//                 {listaCursos.map(({ imagem, nome, preco, cargaHoraria, precoComDesconto, conteudo, id }, index) => (
//                     <CaixaProdutoCarrinho
//                         key={id}
//                         imagem={imagem}
//                         nome={nome}
//                         preco={preco}
//                         cargaHoraria={cargaHoraria}
//                         precoComDesconto={precoComDesconto}
//                         conteudo={conteudo}
//                         id={id}
//                     />
//                 ))}
//             </Box>
//         </Box>
//     );
// }
