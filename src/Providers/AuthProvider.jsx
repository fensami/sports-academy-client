import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';

import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  //login with google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn =() => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }



  useEffect(() => {
     const unsubscribe =onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log(('current user', currentUser));
    })
    return () => {
      return unsubscribe()
    }

  }, [])   
  const authInfo = {
    user,
    loading,
    googleSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;