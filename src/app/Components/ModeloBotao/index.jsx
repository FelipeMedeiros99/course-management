import { Button } from "@chakra-ui/react"

export default function ModeloBotao({children, ...props}){
    return(
        
        <Button 
            whiteSpace="normal" 
            wordBreak="break-word" 
            height="50px" 
            width="100%"
            margin="3px"
            borderRadius="30px"
            {...props}    
        >
            {children}
        </Button>
    )
}