import React, {createContext, useContext} from 'react';
import { auth } from '../lib/firebase'
import { useAuthState } from "react-firebase-hooks/auth"

const AuthContext = createContext()

function AuthContextProvider ({children}) {
  const [ user, loading, error ] = useAuthState(auth)

  return (
    <AuthContext.Provider value={{user, loading, error}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider;