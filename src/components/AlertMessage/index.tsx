import { Alert, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export interface AlertMessageInterface {
  status: "error" | "info" | "warning" | "success" | "neutral" | undefined;
  message: string;
  visibility: boolean;
}

export default function AlertMessage({ status, message, visibility, ...props }: AlertMessageInterface) {
  return (
    <motion.div 
      initial={{ y: "-25rem", opacity: 0 }}
      animate={{ y: visibility ? "0rem" : "-25rem", opacity: visibility ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      <Box {...props}>
        <Alert.Root status={status} variant="solid">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title fontWeight="700">
              Atenção!
            </Alert.Title>
            <Alert.Description>{message}</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      </Box>
    </motion.div>
  )
}