import { Alert, Box } from "@chakra-ui/react";

export interface AlertMessageInterface{
  status: "error" | "info" | "warning" | "success" | "neutral" | undefined;
  message: string
}

export default function AlertMessage({status, message, ...props}: AlertMessageInterface){
  return(


    <Box {...props}>
      <Alert.Root status={status} variant="solid">
        <Alert.Indicator/>
        <Alert.Content>
        <Alert.Title fontWeight="700">
          Atenção!
        </Alert.Title>
          <Alert.Description>{message}</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </Box>
  )
}