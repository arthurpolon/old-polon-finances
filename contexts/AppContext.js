import React, { createContext } from 'react';
import ColorsContextProvider from './ColorsContext'

export const AppContext = createContext()

function AppContextProvider({children}) {
  return (
    <AppContext.Provider value={{}}>
      <ColorsContextProvider>
        {children}
      </ColorsContextProvider>
    </AppContext.Provider>
  );
}

export default AppContextProvider;