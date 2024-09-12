import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import styles from './Styles/page.module.css'


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={styles.html}>
      <body className={styles.body}>
        <ChakraProvider>
          <Header />  
            {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
