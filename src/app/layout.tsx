"use client"
import { useState } from 'react';
import { Provider } from '@/components/ui/provider';

import { ColorModeProvider } from '@/components/ui/color-mode';
import { Box, Theme } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { relative } from 'path';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" style={{height: "100%"}}>
      <body style={{height: "100%"}}>
          <ColorModeProvider forcedTheme='light'>
            <Provider>
              <Theme appearance='light' style={{minHeight: "100%", height: "100%", position: "relative"}}> 
                <Header/>  
                  {children}
                <Footer />
              </Theme>
            </Provider>
          </ColorModeProvider>
      </body>
    </html>
  );
}


// "use client"
// import { useState } from 'react';
// import { Provider } from '@/components/ui/provider';

// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import styles from './Styles/page.module.css'
// import Contexto from './Tools/Contexto';


// export default function RootLayout({ children }) {
//   const [navegacaoAtiva, setNavegacaoAtiva] = useState(true)
//   const [listaCursos, setListaCursos] = useState([])
//   const [dadosUsuario, setDadosUsuario] = useState({})
//   return (
//     <html lang="pt-br" className={styles.html}>
//       <body className={styles.body}>
//         <Contexto.Provider value={{navegacaoAtiva, setNavegacaoAtiva, listaCursos, setListaCursos, dadosUsuario, setDadosUsuario}}>
//           <Provider>
//             <Header ativo={navegacaoAtiva}/>  
//               {children}
//             <Footer />
//           </Provider>
//         </Contexto.Provider>
//       </body>
//     </html>
//   );
// }
