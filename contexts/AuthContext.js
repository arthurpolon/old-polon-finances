import React, { createContext, useContext, useState } from 'react';
import { auth } from '../lib/firebase';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
      setError(null);
    }
  });

  const createUser = (email, password) => {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(setLoading(false))
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(setLoading(false))
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };

  const signOutUser = () => {
    auth
      .signOut()
      .then(console.log('user logged out'))
      .then(setCurrentUser(null));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error,
        createUser,
        signInUser,
        signOutUser,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
