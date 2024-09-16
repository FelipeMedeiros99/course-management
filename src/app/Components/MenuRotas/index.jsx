import { Box, ListItem, List, Text} from "@chakra-ui/react";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import React from "react";




export default function MenuRotas({ ativo }) {
    const links = ["/cadastrar", "/cursos", "/carrinho"]
    const descricao = ["Cadastrar curso", "Lista de cursos", "carrinho"]
    const marginIcone = "4px"
    const icons = [
        <AiOutlinePlusCircle key="plus-circle" style={{ marginLeft: marginIcone }} />,
        <FaBookOpen key="book-open" style={{ marginLeft: marginIcone }} />,
        <FiShoppingCart key="shopping-cart" style={{ marginLeft: marginIcone }} />
    ];


    return (
        <Box as="nav" display={ativo ? "block" : "none"}>
            <List display="flex" justifyContent="center" alignItems="center" flexDir={{base:"column", sm:"row"}}>
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        <ListItem margin="8px 10px 0 10px" textDecoration={"underline"}>
                            <Link href={`${link}`} >
                                <Text fontWeight="700" display="flex" alignItems="center" fontSize="20px">
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

                    </React.Fragment>
                ))}

            </List>
        </Box>
    )
}



