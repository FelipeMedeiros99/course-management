"use client"

import { useEffect } from "react";
import { Spinner, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Redirect(){

  const router = useRouter()
  useEffect(()=>{
    router.push("/sign-in")
  }, [router])

  return(
    <VStack alignItems="center" justifyContent="center" position="absolute" top="50%" left="50%" translate="-50% -50%">
      <Spinner w="10rem" h="10rem" color="#fe7502"/>
    </VStack>
  )
}