import { extendTheme } from "@chakra-ui/react";

const temaCustomizado = {
    colors: {
      primary: {
        100: "#E3F2FD",
        500: "#2196F3",
        900: "#0D47A1",
      },
    },
  };
const tema = extendTheme(temaCustomizado)


export default tema;