import { useColorMode } from '@chakra-ui/react';
import React, { createContext, useContext } from 'react';

const ColorsContext = createContext()

function ColorContextProvider({children}) {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <ColorsContext.Provider value={{colorMode, toggleColorMode}}>
      {children}
    </ColorsContext.Provider>
  );
}

export const useColors = () => {
  return useContext(ColorsContext)
}

export default ColorContextProvider;