"use client"

import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./styles.css"


export default function SignLayout({ children, }: { children: React.ReactNode }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  console.log(windowHeight)
  useEffect(() => {
    localStorage.removeItem("userToken")
  }, [])
  
  useEffect(()=>{
    const resizeFunction = ()=>setWindowHeight(window.innerHeight)
    window.addEventListener("resize", resizeFunction)
    return ()=> window.removeEventListener("resize", resizeFunction)
  }, [windowHeight])
  return (
    <HStack h="100%" flexDir={{base: "column", md: "row"}}>
      <Header display={{base: "flex", md: "none"}}/>
      <Box backgroundColor="#fe7502" width="50%" height="100%" display={{base: "none", md: "block"}}/>
      <VStack w={{base: "100%", md: "50%"}} height="100%" overflowY="auto" justifyContent="center" margin={"8rem 0 4rem 0"}>
        {children}
      </VStack>
      <Footer display={{base: "flex", md: "none"}} position="fixed" bottom="0"/>
    </HStack>
  )
}