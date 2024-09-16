import { Box, ListItem, List, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaGripLinesVertical } from "react-icons/fa";





export default function MenuRotas({ ativo }) {
    const links = ["/cadastrar", "/cursos", "/carrinho"]
    const descricao = ["Cadastrar curso", "Lista de cursos", "carrinho"]
    const marginIcone = "4px"
    const icons = [<AiOutlinePlusCircle style={{ marginLeft: marginIcone }} />, <FaBookOpen style=
        {{ marginLeft: marginIcone }} />, <FiShoppingCart style={{ marginLeft: marginIcone }} />]
    return (
        <Box as="nav" display={ativo ? "block" : "none"}>
            <List display="flex" justifyContent="center" alignItems="center" flexDir={{base:"column", sm:"row"}}>
                {links.map((link, index) => (
                    <>
                        <ListItem key={index} margin="8px 10px 0 10px" textDecoration={"underline"}>
                            <Link href={`${link}`} >
                                <Text fontWeight="700" display="flex" alignItems="center" fontSize={{base:"15px", md:"20px"}}>
                                    {descricao[index]}
                                    {icons[index]}
                                </Text>
                            </Link>
                        </ListItem>

                        {index < 2 && 
                        <Box
                            display={{base:"none", sm:"block"}}
                            as="div"
                            height="15px" // Altura da barra
                            width="1px" // Largura da barra
                            backgroundColor="white" // Cor da barra
                            mx="20px" // Margem horizontal
                        />}

                    </>
                ))}

            </List>
        </Box>
    )
}



