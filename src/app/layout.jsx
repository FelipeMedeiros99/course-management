import { ChakraProvider } from '@chakra-ui/react';
import tema from './Styles/tema';
import Header from './Components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProvider>
          <Header />  
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
