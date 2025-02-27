import { VStack, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";


import { MenuContent, MenuItem, MenuItemCommand, MenuRoot, MenuTrigger } from "@/components/ui/menu"

export function NavBar() {
  const router = useRouter()

  return (
    <MenuRoot >
      <MenuTrigger asChild border="solid 1px" _hover={{cursor: "pointer"}}>
        <MdOutlineMenu size="2rem"/>
      </MenuTrigger>
      <MenuContent>
        <MenuItem height="2.5rem" fontSize="1rem" width="10rem" _hover={{cursor: "pointer"}} onClick={() => router.push("/courses")} value="course">
          Cursos
        </MenuItem>
        <MenuItem height="2.5rem" fontSize="1rem" width="10rem" _hover={{cursor: "pointer"}} onClick={() => router.push("/cart")} value="cart">
          Carrinho
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}