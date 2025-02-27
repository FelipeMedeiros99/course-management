import { VStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";


import { MenuContent, MenuItem, MenuItemCommand, MenuRoot, MenuTrigger } from "@/components/ui/menu"

export function NavBar() {

  const Demo = () => {
    return (
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            <MdOutlineMenu />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <Link href="/courses">
            Cursos
          </Link>
          <Link href="/cart">
            Carrinho
          </Link>
          <Link href="">
            
          </Link>
          <Link href="">
            
          </Link>
          <Link href="">

          </Link>
        </MenuContent>
      </MenuRoot>
    )
  }

}