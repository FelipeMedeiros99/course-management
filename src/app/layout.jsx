import { ChakraProvider } from '@chakra-ui/react';
import tema from './Styles/tema';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ChakraProvider>
          <Header />  
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
