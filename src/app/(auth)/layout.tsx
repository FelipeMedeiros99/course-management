"use client"

import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SignLayout({ children, }: { children: React.ReactNode }) {
  useEffect(() => {
    localStorage.removeItem("userToken")
  }, [])

  return (
    <HStack h="100%" flexDir={{base: "column", md: "row"}}>
      <Header display={{base: "flex", md: "none"}} position="fixed" top="0"/>
      <Box backgroundColor="#fe7502" width="50%" height="100%" display={{base: "none", md: "block"}}/>
      <VStack w={{base: "100%", md: "50%"}} height="100%" overflowY="auto" justifyContent="center" paddingTop="8rem"  paddingBottom={{base:"0", sm: "4rem"}}>
        {children}
      </VStack>
      <Footer display={{base: "none", sm: "flex", md: "none"}} position="fixed" bottom="0"/>
    </HStack>
  )
}