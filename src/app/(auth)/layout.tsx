"use client"

import AlertMessage, { AlertMessageInterface } from "@/components/AlertMessage";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SignLayout({ children, }: { children: React.ReactNode }) {
  useEffect(()=>{
    localStorage.removeItem("userToken")
  }, [])
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="calc(100vh - 12rem)"
    >   
      {children}
    </Box>
  )
}