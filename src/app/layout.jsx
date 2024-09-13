"use client"
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import styles from './Styles/page.module.css'
import Contexto from './Tools/Contexto';
import { useState } from 'react';


export default function RootLayout({ children }) {
  const [navegacaoAtiva, setNavegacaoAtiva] = useState(true)
  return (
    <html lang="pt-br" className={styles.html}>
      <body className={styles.body}>
        <Contexto.Provider value={{navegacaoAtiva, setNavegacaoAtiva}}>
          <ChakraProvider>
            <Header ativo={navegacaoAtiva}/>  
              {children}
            <Footer />
          </ChakraProvider>
        </Contexto.Provider>
      </body>
    </html>
  );
}
