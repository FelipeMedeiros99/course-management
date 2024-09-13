import { Box, ListItem, List } from "@chakra-ui/react";
import Link from "next/link";

export default function MenuRotas({ativo}) {
    const links = ["/cadastrar", "/curso", "/carrinhos"]
    const descricao = ["Cadastrar curso", "Lista de cursos", "carrinhos"]
    return (
        <Box as="nav" display={ativo?"block":"none"}>
            <List display="flex" justifyContent="center" >
                {links.map((link, index)=>(
                    <ListItem key={index} margin="8px 10px 0 10px" textDecoration={"underline"}>
                        <Link href={`${link}`}>{descricao[index]}</Link>
                    </ListItem>
                ))}

            </List>
        </Box>
    )
}