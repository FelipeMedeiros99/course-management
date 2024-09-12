import { Button } from "@chakra-ui/react"

export default function ModeloBotao({children, ...props}){
    return(
        
        <Button 
            whiteSpace="normal" 
            wordBreak="break-word" 
            height={{md: "50px", sm:"50px", base:"100px"}} 
            width="200px"
            {...props}    
        >
            {children}
        </Button>
          

    )
}