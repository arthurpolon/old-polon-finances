import React, { createContext, useContext, useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
      setError(null);
    } else {
      setCurrentUser(null);
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

  const signInWithGoogle = () => {
    setLoading(true);
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        setCurrentUser(result.user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const passwordResetEmail = () => {
    auth
      .sendPasswordResetEmail(currentUser.email)
      .then(() => {
        setFeedback(
          'Redefinition email sent. Check your mailbox to redefine password.'
        );
        setTimeout(() => {
          setFeedback(null);
        }, 5000);
      })
      .catch(() => console.log.log(err.message));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        error,
        feedback,
        createUser,
        signInUser,
        signOutUser,
        passwordResetEmail,
        signInWithGoogle,
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
