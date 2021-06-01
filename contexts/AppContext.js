import React, { createContext } from 'react';
import ColorsContextProvider from './ColorsContext'
import AuthContextProvider from './AuthContext'

export const AppContext = createContext()

function AppContextProvider({children}) {
  return (
    <AppContext.Provider value={{}}>
      <ColorsContextProvider>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </ColorsContextProvider>
    </AppContext.Provider>
  );
}

export default AppContextProvider;