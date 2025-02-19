import { Alert, Box } from "@chakra-ui/react";

interface AlextBoxInterface{
  status: "error" | "info" | "warning" | "success" | "neutral" | undefined;
  title: string;
  message: string
}

export default function AlertBox({status, title, message, ...props}: AlextBoxInterface){
  return(


    <Box {...props}>
      <Alert.Root status={status}>
        <Alert.Indicator/>
        <Alert.Content>
          <Alert.Title>{title}</Alert.Title>
          <Alert.Description>{message}</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </Box>
  )
}