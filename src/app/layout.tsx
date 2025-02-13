"use client"
import { useState } from 'react';
import { Provider } from '@/components/ui/provider';

import { ColorModeProvider } from '@/components/ui/color-mode';
import { Theme } from '@chakra-ui/react';

import Context, { CourseDataInterface, UserDataInterface } from '../context';
import Header from '@/components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isNavigationActive, setIsNavigationActive] = useState<boolean>(true)
  const [coursesList, setCoursesList] = useState<CourseDataInterface[]>([])
  const [userData, setUserData] = useState<UserDataInterface>({ id: null, email: "", name: "" })
  return (
    <html lang="pt-br">
      <body>
        <Context.Provider value={{ isNavigationActive, setIsNavigationActive, coursesList, setCoursesList, userData, setUserData }}>
          <ColorModeProvider forcedTheme='light'>
            <Provider>
              <Theme appearance='light'>
                <Header ativo={isNavigationActive}/>  
                {children}
                <Footer />
              </Theme>
            </Provider>
          </ColorModeProvider>
        </Context.Provider>
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
