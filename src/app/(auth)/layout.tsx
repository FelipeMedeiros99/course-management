"use client"

import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SignLayout({ children, }: { children: React.ReactNode }) {
  useEffect(() => {
    localStorage.removeItem("userToken")
  }, [])
  return (
    <HStack h="100%" flexDir={{base: "column", md: "row"}}>
      <Header display={{base: "flex", md: "none"}}/>
      <Box backgroundColor="#fe7502" width="50%" height="100%" display={{base: "none", md: "block"}}/>
      <VStack w={{base: "100%", md: "50%"}} height={{base: "calc(100vh - 12rem)"}} justifyContent="center">
        {children}
      </VStack>
      <Footer display={{base: "flex", md: "none"}}/>
    </HStack>
  )
}